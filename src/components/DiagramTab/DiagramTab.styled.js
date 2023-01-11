import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
  width: 715px;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 32px 15px 20px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xl}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
`;
