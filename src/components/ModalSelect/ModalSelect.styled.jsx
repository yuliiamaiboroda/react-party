import styled from 'styled-components';

export const Dropdown = styled.ul`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  max-width: 100%;

  background-color: tomato;
`;

export const Option = styled.li`
  width: 100%;
  height: 50px;

  background-color: yellow;

  :hover {
    background-color: cornflowerblue;
  }
`;
