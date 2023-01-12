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

const Table = ({ data, colors }) => {
  const currentColor = index => colors.find((_, ind) => index === ind);
  const { categoriesSummary, expenseSummary, incomeSummary } = data;

  return (
    <CompWrapper>
      <ul>
        <HeaderLi>
          <TextBold>Category</TextBold>
          <TextBold>Sum</TextBold>
        </HeaderLi>
        {categoriesSummary.length ? (
          categoriesSummary.map((el, index) => (
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
                <Text>{el.name}</Text>
              </Wrapper>
              <Text>{el.total.toFixed(2)}</Text>
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
            <Red>{expenseSummary.toFixed(2)}</Red>
          </TotalText>
        </TotalSum>
        <TotalSum>
          <TotalText>Income:</TotalText>
          <TotalText>
            <Green>{incomeSummary.toFixed(2)}</Green>
          </TotalText>
        </TotalSum>
      </ul>
    </CompWrapper>
  );
};

export default Table;
