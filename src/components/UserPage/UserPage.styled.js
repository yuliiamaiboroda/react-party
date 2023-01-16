import styled from 'styled-components';

export const P = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const PSett = styled.p`
  width: 100px;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const PBold = styled.p`
  padding-bottom: 20px;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.heading};
  border-bottom: ${p => p.theme.borders.table};
  box-shadow: ${p => p.theme.shadows.table};
`;

export const Span = styled.span`
  color: #394ebe;
`;

export const Button = styled.button`
  padding: 10px 5px;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s}px;
  color: ${p => p.theme.colors.textLight};
  border: transparent;
  border-radius: ${p => p.theme.radii.light}px;
  width: 100px;
  background-color: rgba(110, 120, 232, 1);
  flex-grow: 1;
  cursor: pointer;
`;

export const InfoDiv = styled.div`
  margin: 40px 0 20px 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: ${p => p.theme.borders.table};
  box-shadow: ${p => p.theme.shadows.table};
  @media (min-width: 1280px) {
    margin-right: auto;
  }
  @media screen and (max-width: 1279px) {
    margin-right: 32px;
  }
`;

export const SettingsDiv = styled.div`
  margin: 20px 0 20px 0;
  padding-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  border-bottom: ${p => p.theme.borders.table};
  box-shadow: ${p => p.theme.shadows.table};
  @media (min-width: 1280px) {
    margin-right: auto;
  }
  @media screen and (max-width: 1279px) {
    margin-right: 32px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const SettBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
