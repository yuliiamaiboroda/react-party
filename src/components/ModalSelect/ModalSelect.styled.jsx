import styled from 'styled-components';

export const Dropdown = styled.ul`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  max-width: 100%;

  background-color: tomato;

  z-index: 9999;
`;

export const Option = styled.li`
  width: 100%;
  height: 32px;

  background-color: yellow;

  :hover {
    background-color: cornflowerblue;
  }
`;
