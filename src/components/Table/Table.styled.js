import styled from 'styled-components';

export const CompWrapper = styled.div`
  display: flex;
`;

export const HeaderLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 50px;
  padding: 5px 20px;
  margin-top: 20px;
  margin-bottom: 4px;
  border: ${p => p.theme.borders.transperent};
  border-radius: ${p => p.theme.radii.normal}px;
  background: ${p => p.theme.colors.lightBg};
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 50px;
  padding: 5px 20px;
  border-bottom: ${p => p.theme.borders.table};
  box-shadow: ${p => p.theme.shadows.table};
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const TotalSum = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  padding: 5px 20px;
  margin-top: 5px;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const Red = styled.span`
  color: ${p => p.theme.colors.expense};
`;

export const Green = styled.span`
  color: ${p => p.theme.colors.income};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const TextBold = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.text};
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.5;
  color: ${p => p.theme.colors.text};
`;

export const TotalText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.s}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.text};
`;
