import { useSelector } from 'react-redux';
import { DivBalnce, PMoney, PText } from './Balance.styled';

export default function Balance() {
  const balanceUserMoney = useSelector(state => state.finance.totalBalance);
  return (
    <DivBalnce>
      <PText>Your balance</PText>
      <PMoney>&#8372; {balanceUserMoney}</PMoney>
    </DivBalnce>
  );
}
