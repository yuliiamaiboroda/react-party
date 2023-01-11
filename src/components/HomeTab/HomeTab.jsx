import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTransactions,
  deleteTransaction,
} from 'redux/transactionsController/transactionController-operations';
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
} from 'helpers/homeTabHelpers';
import Media from 'react-media';

export default function HomeTab() {
  const dispatch = useDispatch();
  const financeData = useSelector(selectTransictions);
  const transactionCategArr = useSelector(selectTransactionCategories);

  useEffect(() => {
    dispatch(getAllTransactions());
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
    return currentTrans.name;
  };

  const hadleDelete = id => {
    dispatch(deleteTransaction(id));
  };

  return (
    <>
      {sortedArr.length === 0 ? (
        <H3>No transaction yet</H3>
      ) : (
        <Media
          queries={{
            small: '(max-width: 767px)',
          }}
        >
          {matches =>
            matches.small ? (
              <DivMobile>
                {sortedArr.map(
                  ({
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                    balanceAfter,
                    id,
                  }) => (
                    <UlMobile
                      key={id}
                      style={{ borderLeft: `5px solid ${switchColor(type)}` }}
                    >
                      <LiMobile>
                        Date{' '}
                        <SpanMobile>
                          {formatDateInStr(transactionDate)}
                        </SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        Type <SpanMobile>{formatTransType(type)}</SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        Category{' '}
                        <SpanMobile>{currentTransCateg(categoryId)}</SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        Comment <SpanMobile>{comment}</SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        Sum <SpanMobile>{amount}</SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        Balance <SpanMobile>{balanceAfter}</SpanMobile>
                      </LiMobile>
                      <LiMobile>
                        Options
                        <Button type="button" onClick={() => hadleDelete(id)}>
                          delete
                        </Button>
                      </LiMobile>
                    </UlMobile>
                  )
                )}
              </DivMobile>
            ) : (
              <Div>
                <Ul>
                  <Li>Date</Li>
                  <Li>Type</Li>
                  <Li>Category</Li>
                  <Li>Comment</Li>
                  <Li>Sum</Li>
                  <Li>Balance</Li>
                  <Li>Options</Li>
                </Ul>
                {sortedArr.map(
                  ({
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                    balanceAfter,
                    id,
                  }) => (
                    <Wrapper key={id}>
                      <P>{formatDateInStr(transactionDate)}</P>
                      <P>{formatTransType(type)}</P>
                      <P>{currentTransCateg(categoryId)}</P>
                      <P>{comment}</P>
                      <P style={{ color: switchColor(type) }}>{amount}</P>
                      <P>{balanceAfter}</P>
                      <P>
                        <Button type="button" onClick={() => hadleDelete(id)}>
                          delete
                        </Button>
                      </P>
                    </Wrapper>
                  )
                )}
              </Div>
            )
          }
        </Media>
      )}
    </>
  );
}
