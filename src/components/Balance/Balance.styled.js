import styled from 'styled-components';
import { theme } from 'theme';

export const DivBalnce = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  width: 280px;
  height: 80px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    width: 336px;
    margin-bottom: 20px;
    margin-right: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 134px;
  }
  @media (min-width: 1280px) {
    width: 395px;
    margin-bottom: 32px;
  }
  background-color: ${theme.colors.textLight};
  border-radius: ${theme.radii.normal}px;
`;
export const PText = styled.p`
  color: #a6a6a6;
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.xs}px;
  line-height: ${theme.lineHeights.heading};
  text-transform: uppercase;
`;
export const PMoney = styled.p`
  color: ${theme.colors.text};
  font-weight: ${theme.fontWeights.normal};
  font-size: ${theme.fontSizes.xl}px;
  line-height: ${theme.lineHeights.heading};
`;
