import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
  width: 715px;
  @media screen and (max-width: 767px) {
    flex-direction: column;

    align-items: center;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const Title = styled.h3`
  @media screen and (max-width: 1279px) {
    margin-top: 20px;
  }
  margin: 32px 15px 20px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xl}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const SelWrap = styled.div`
  & {
    width: 100%;
    position: relative;
  }
  &:after {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 1.2em;
    height: 1em;
    background-color: black;
    clip-path: polygon(0 0, 6% 0, 48% 55%, 94% 0, 100% 0, 48% 64%);
  }
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  padding: 10px 20px;
  margin: 0;
  width: 100%;
  height: 50px;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.heading};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal}px;
`;

export const Option = styled.option`
  background-color: #e5e5e5;
  font-size: ${p => p.theme.fontSizes.s}px;
`;
