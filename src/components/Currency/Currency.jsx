import { DivTop, LI, MainDiv, PTop, UL } from './Currency.styled';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import money from 'redux/currency/currency-options';
import { loadingBool } from 'redux/currency/currency';
import { useTranslation } from 'react-i18next';

export default function Currency() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const currencyDate = useSelector(state => state.currency.dateCurrency);
  const finance = useSelector(state => state.currency.Bank);
  const loader = useSelector(state => state.currency.loader);
  const date = new Date().getTime();
  const time = new Date(date - currencyDate).getUTCHours();
  useEffect(() => {
    if (time >= 1) {
      dispatch(money());
      return;
    }
    dispatch(loadingBool(true));
  }, [dispatch, time]);

  return (
    <MainDiv>
      {loader ? (
        finance.length ? (
          <>
            <DivTop>
              <PTop>{t('currencys.currency')}</PTop>
              <PTop>{t('currencys.purchase')}</PTop>
              <PTop>{t('currencys.sale')}</PTop>
            </DivTop>
            <UL>
              <LI>USD</LI>
              <LI>{finance[0].rateBuy.toFixed(2)}</LI>
              <LI>{finance[0].rateSell.toFixed(2)}</LI>
            </UL>
            <UL>
              <LI>EUR</LI>
              <LI>{finance[1].rateBuy.toFixed(2)}</LI>
              <LI>{finance[1].rateSell.toFixed(2)}</LI>
            </UL>
          </>
        ) : (
          ''
        )
      ) : (
        <Loader />
      )}
    </MainDiv>
  );
}
