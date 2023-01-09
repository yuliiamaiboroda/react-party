import styled from 'styled-components';

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  padding: ${p => p.theme.space[1]}px;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
