import { useSelector } from 'react-redux';
import {
  selectIsHiddenBalance,
  selectTotalBalance,
} from 'redux/finance/finance-selectors';
import { DivBalnce, PMoney, PText } from './Balance.styled';

export default function Balance() {
  const balanceUserMoney = useSelector(selectTotalBalance);
  const isHiddenBalance = useSelector(selectIsHiddenBalance);
  return (
    <DivBalnce>
      <PText>Your balance</PText>
      <PMoney>
        &#8372;
        {isHiddenBalance ? '***' : balanceUserMoney.toFixed(2)}
      </PMoney>
    </DivBalnce>
  );
}
