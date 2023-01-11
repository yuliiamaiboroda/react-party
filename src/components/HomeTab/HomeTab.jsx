import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllTransactions } from "redux/transactionsController/transactionController-operations";
import { selectTransictions } from "redux/transactionsController/transactionController-selectors";
import { getTransactionCategories } from "redux/transactionCategories/transactionCategories-operations";
import { selectTransactionCategories } from "redux/transactionCategories/transactionCategories-selectors";
import { selectToken } from "redux/authController/authController-selectors";

export default function HomeTab (){
const dispatch = useDispatch(); 
const financeData = useSelector(selectTransictions);
const transactionCategArr = useSelector(selectTransactionCategories);
const isToken = useSelector(selectToken);

useEffect(()=>{
    if(!isToken) return
    dispatch(getAllTransactions());
    dispatch(getTransactionCategories())},
[dispatch]);

const sortedArr= [...financeData].sort(
    (firstTrans, secondTrans)=>Date.parse(secondTrans.transactionDate) - Date.parse(firstTrans.transactionDate)
    ) 
    
const currentTransCateg = categoryId => {
    const currentTrans = transactionCategArr.find(el=>el.id===categoryId);
    if (!currentTrans) return "other"
    return currentTrans.name 
}
    return(<>
        {sortedArr.length === 0
            ? <h3>No transaction yet</h3>
            :
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Comment</th>
                    <th>Sum</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>     
            {sortedArr.map(({transactionDate, type, categoryId, comment, amount, balanceAfter, id})=>(
                    <tr key={id}>
                    <td>{transactionDate}</td>
                    <td>{type}</td>
                    <td>{currentTransCateg(categoryId)}</td>
                    <td>{comment}</td>
                    <td style={
                        type==="INCOME" ? {color:"#24CCA7"} :
                         {color: "#FF6596"}
                    }>{amount}</td>
                    <td>{balanceAfter}</td>
                </tr>
            ))}
            </tbody>
        </table>}
        </>
    )
}