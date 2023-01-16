import { useSelector } from 'react-redux';
import {
  selectIsHiddenBalance,
  selectTotalBalance,
} from 'redux/finance/finance-selectors';
import { DivBalnce, PMoney, PText } from './Balance.styled';
import { useTranslation } from 'react-i18next';

export default function Balance() {
  const { t } = useTranslation();

  const balanceUserMoney = useSelector(selectTotalBalance);
  const isHiddenBalance = useSelector(selectIsHiddenBalance);
  return (
    <DivBalnce>
      <PText>{t('balance.title')}</PText>
      <PMoney>
        &#8372;
        {isHiddenBalance ? '***' : balanceUserMoney.toFixed(2)}
      </PMoney>
    </DivBalnce>
  );
}
