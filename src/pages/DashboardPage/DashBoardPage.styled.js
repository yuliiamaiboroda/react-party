import styled from 'styled-components';

export const Div = styled.div`
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    display: grid;
    justify-content: space-around;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  @media (min-width: 1280px) {
    padding-bottom: 63px;
  }

  @media screen and (max-width: 1279px) {
    display: block;
  }
`;

export const DivContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
  }
`;
