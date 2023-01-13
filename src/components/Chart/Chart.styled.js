import styled from 'styled-components';

export const WrapperRel = styled.div`
  width: 288px;
  height: 100%;
  float: left;
  position: relative;
`;

export const WrapperTextAbs = styled.div`
  position: absolute;
  width: 110px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.text};
  text-align: center;
  zindex: 99;
`;
