
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import money from 'redux/currency/currency-options';
import './currency.css';
export default function Currency() {
  const dispatch = useDispatch();
useEffect(()=>{
dispatch(money())
},[dispatch])
const finance = useSelector(state=> state.currency.totalBalance)
console.log(finance);
    return <table>
      <tr>
        <th>Currency</th>
        <th>Purchase</th>
        <th>Sale</th>
      </tr>
      <tr>
        <td>USD</td>
        <td>{finance[0].rateBuy}</td>
        <td>{finance[0].rateSell}</td>
      </tr>
      <tr>
        <td>EUR</td>
        <td>{finance[1].rateBuy}</td>
        <td>{finance[1].rateSell}</td>
      </tr>
    </table>
    // <div className='currency'>
    //   <div style={{
    //     display:'flex',
    //     justifyContent: 'space-evenly',
    //   }}>
    //     <p className='currency_text'>Currency</p>
    //     <p className='currency_text'>Purchase</p>
    //     <p className='currency_text'>Sale</p>
    //   </div>
    //   <div>
    //     <p></p>
    //   </div>
    // </div>
    
}