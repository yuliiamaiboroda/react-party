import { DivTop, LI, MainDiv, PTop, UL } from './Currency.styled';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import money from 'redux/currency/currency-options';
export default function Currency() {
  const dispatch = useDispatch();
useEffect(()=>{
dispatch(money())
},[dispatch])
const finance = useSelector(state=> state.currency.totalBalance);
const loader = useSelector(state=> state.currency.loader);
    return <MainDiv >{
    loader?finance.length ? <>
      <DivTop>
        <PTop style={{marginLeft:'26px'}}>Currency</PTop>
        <PTop>Purchase</PTop>
        <PTop style={{marginRight:'49px'}}>Sale</PTop>
      </DivTop>
      <UL>
        <LI >USD</LI>
        <LI>{finance[0].rateBuy.toFixed(2)}</LI>
        <LI >{finance[0].rateSell.toFixed(2)}</LI>
      </UL>
      <UL>
        <LI >EUR</LI>
        <LI>{finance[1].rateBuy.toFixed(2)}</LI>
        <LI>{finance[1].rateSell.toFixed(2)}</LI>
      </UL>
    </>:'':
    <Loader />}</MainDiv>
    
    
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
    //     <PTop></p>
    //   </div>
    // </div>
    
}