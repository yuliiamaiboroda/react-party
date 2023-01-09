
import './currency.css';
export default function Currency() {

    function name() {
      
        fetch('https://api.monobank.ua/bank/currency')
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        }).then(money => money[0]
          // r = money.filter(m=>(m.currencyCodeA === 840 && m.currencyCodeB === 980) || (m.currencyCodeA === 978 && m.currencyCodeB === 980))
          // if(money.currencyCodeA === 840 ){

          // }
        )
    }
    name();
          // .then(console.log).catch(err=>console.error(err))
    return <div className='currency'>
      <div style={{
        display:'flex',
        justifyContent: 'space-evenly',
      }}>
        <p className='currency_text'>Currency</p>
        <p className='currency_text'>Purchase</p>
        <p className='currency_text'>Sale</p>
      </div>
    </div>
    
}