import { normalizedNumber } from 'helpers/normalizedNumber';
import React from 'react';
import {
  CompWrapper,
  Green,
  HeaderLi,
  Li,
  Red,
  Text,
  TextBold,
  TotalSum,
  TotalText,
  Wrapper,
} from './Table.styled';
import { useTranslation } from 'react-i18next';
import { handlerCategories } from 'helpers/multiLanguage';

const Table = ({ data, colors }) => {
  const { t } = useTranslation();

  const currentColor = index => colors.find((_, ind) => index === ind);
  const { categoriesSummary, expenseSummary, incomeSummary } = data;

  const onlyExpenses = categoriesSummary.filter(
    trans => trans.type === 'EXPENSE'
  );

  return (
    <CompWrapper>
      <ul>
        <HeaderLi>
          <TextBold>{t('table.category')}</TextBold>
          <TextBold>{t('table.sum')}</TextBold>
        </HeaderLi>
        {onlyExpenses.length ? (
          onlyExpenses.map((el, index) => (
            <Li key={el.name + el.total}>
              <Wrapper>
                <span
                  style={{
                    backgroundColor: currentColor(index),
                    display: 'block',
                    height: '24px',
                    width: '24px',
                    borderRadius: '3px',
                  }}
                ></span>
                <Text>{t(handlerCategories(el.name))}</Text>
              </Wrapper>
              <Text>{normalizedNumber(el.total)}</Text>
            </Li>
          ))
        ) : (
          <Li>
            <Text>There are no transactions</Text>
          </Li>
        )}
        <TotalSum>
          <TotalText>Expenses:</TotalText>
          <TotalText>
            <Red>{normalizedNumber(expenseSummary)}</Red>
          </TotalText>
        </TotalSum>
        <TotalSum>
          <TotalText>Income:</TotalText>
          <TotalText>
            <Green>{normalizedNumber(incomeSummary)}</Green>
          </TotalText>
        </TotalSum>
      </ul>
    </CompWrapper>
  );
};

export default Table;
