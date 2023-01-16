import { useEffect } from 'react';
import AddTransactionButton from 'components/AddTransactionButton';
import Balance from 'components/Balance';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from 'redux/transactionsController/transactionController-operations';
import { selectTransictions } from 'redux/transactionsController/transactionController-selectors';
import { getTransactionCategories } from 'redux/transactionCategories/transactionCategories-operations';
import { selectTransactionCategories } from 'redux/transactionCategories/transactionCategories-selectors';
import {
  Button,
  Div,
  DivMobile,
  H3,
  Li,
  LiMobile,
  P,
  SpanMobile,
  Ul,
  UlMobile,
  Wrapper,
} from './HomeTab.styled';
import {
  formatDateInStr,
  formatTransType,
  switchColor,
  transformEmptyComment,
} from 'helpers/homeTabHelpers';
import Media from 'react-media';
import React, { Fragment } from 'react';
import { normalizedNumber } from 'helpers/normalizedNumber';
import { selectIsHiddenBalance } from 'redux/finance/finance-selectors';
import { useTranslation } from 'react-i18next';
import { handlerCategories } from 'helpers/multiLanguage';

export default function HomeTab() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const financeData = useSelector(selectTransictions);
  const transactionCategArr = useSelector(selectTransactionCategories);
  const isHiddenBalance = useSelector(selectIsHiddenBalance);

  useEffect(() => {
    dispatch(getTransactionCategories());
  }, [dispatch]);

  const sortedArr = [...financeData].sort(
    (firstTrans, secondTrans) =>
      Date.parse(secondTrans.transactionDate) -
      Date.parse(firstTrans.transactionDate)
  );

  const currentTransCateg = categoryId => {
    const currentTrans = transactionCategArr.find(el => el.id === categoryId);
    if (!currentTrans) return 'other';
    return t(handlerCategories(currentTrans.name));
  };

  const hadleDelete = el => {
    dispatch(deleteTransaction(el));
  };

  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {matches => <Fragment>{matches.small && <Balance />}</Fragment>}
      </Media>
      {sortedArr.length === 0 ? (
        <H3>{t('homeTab.noTrans')}</H3>
      ) : (
        <Media
          queries={{
            small: '(max-width: 767px)',
          }}
        >
          {matches =>
            matches.small ? (
              <DivMobile>
                {sortedArr.map(el => {
                  const {
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                    id,
                  } = el;
                  return (
                    <UlMobile
                      key={id}
                      style={{ borderLeft: `5px solid ${switchColor(type)}` }}
                    >
                      <LiMobile>
                        {t('homeTab.date')}
                        <SpanMobile>
                          {formatDateInStr(transactionDate)}
                        </SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        {t('homeTab.type')} <SpanMobile>{formatTransType(type)}</SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        {t('homeTab.category')}
                        <SpanMobile>{currentTransCateg(categoryId)}</SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        {t('homeTab.comment')}
                        <SpanMobile>
                          {transformEmptyComment(comment)}
                        </SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        {t('homeTab.sum')}
                        <SpanMobile>
                          {isHiddenBalance ? '***' : normalizedNumber(amount)}
                        </SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        {t('homeTab.options')}
                        <Button type="button" onClick={() => hadleDelete(el)}>
                        {t('homeTab.delBtn')}
                        </Button>
                      </LiMobile>
                    </UlMobile>
                  );
                })}
              </DivMobile>
            ) : (
              <Div>
                <Ul>
                  <Li>{t('homeTab.date')}</Li>
                  <Li>{t('homeTab.type')}</Li>
                  <Li>{t('homeTab.category')}</Li>
                  <Li>{t('homeTab.comment')}</Li>
                  <Li>{t('homeTab.sum')}</Li>
                  <Li>{t('homeTab.options')}</Li>
                </Ul>
                {sortedArr.map(el => {
                  const {
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                    id,
                  } = el;
                  return (
                    <Wrapper key={id}>
                      <P>{formatDateInStr(transactionDate)}</P>
                      <P>{formatTransType(type)}</P>
                      <P>{currentTransCateg(categoryId)}</P>
                      <P>{transformEmptyComment(comment)}</P>
                      <P style={{ color: switchColor(type) }}>
                        {isHiddenBalance ? '***' : normalizedNumber(amount)}
                      </P>
                      <P>
                        <Button type="button" onClick={() => hadleDelete(el)}>
                        {t('homeTab.delBtn')}
                        </Button>
                      </P>
                    </Wrapper>
                  );
                })}
              </Div>
            )
          }
        </Media>
      )}
      <AddTransactionButton />
    </>
  );
}
