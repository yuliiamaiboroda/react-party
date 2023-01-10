import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllTransactions } from "redux/transactionsController/transactionController-operations";
import { selectTransictions } from "redux/transactionsController/transactionController-selectors";
import { getTransactionCategories } from "redux/transactionCategories/transactionCategories-operations";
import { selectTransactionCategories } from "redux/transactionCategories/transactionCategories-selectors";

export default function HomeTab (){
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getAllTransactions());
    dispatch(getTransactionCategories())},
[dispatch]);

const financeData = useSelector(selectTransictions);
const transactionCategArr = useSelector(selectTransactionCategories);

const sortedArr= [...financeData].sort(
    (firstTrans, secondTrans)=>Date.parse(secondTrans.transactionDate) - Date.parse(firstTrans.transactionDate)
    ) 

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
                    <td>{transactionCategArr.find(el=>el.id===categoryId)}</td>
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