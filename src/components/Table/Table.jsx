import React from 'react';
import {
  CompWrapper,
  HeaderLi,
  Li,
  Text,
  TextBold,
  Wrapper,
} from './Table.styled';

const Table = ({ data, colors }) => {
  const currentColor = index => colors.find((_, ind) => index === ind);

  return (
    <CompWrapper>
      <ul>
        <HeaderLi>
          <TextBold>Category</TextBold>
          <TextBold>Sum</TextBold>
        </HeaderLi>
        {data.map((el, index) => (
          <Li key={el.id}>
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
              <Text>{el.comment}</Text>
            </Wrapper>
            <Text>{el.amount}.00</Text>
          </Li>
        ))}
      </ul>
    </CompWrapper>
  );
};

export default Table;
