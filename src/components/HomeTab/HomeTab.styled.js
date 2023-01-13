import styled from 'styled-components';

export const Ul = styled.ul`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-radius: 30px;
  background-color: ${p => p.theme.colors.textLight};
  padding: 15px 20px;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 15px 20px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
`;

export const Div = styled.div`
  position: relative;
  width: 715px;
  max-height: 60vh;
  overflow: auto;
  @media (min-width: 1280px) {
    margin-top: 45px;
  }
  @media screen and (max-width: 1279px) {
    margin-right: 32px;
  }
  @media (max-width: 768px) {
    width: 705px;
    max-width: 100%;
  }
`;

export const Li = styled.li`
  text-align: center;
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const P = styled.p`
  text-align: center;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.heading};
`;
export const Button = styled.button`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s}px;
  background-color: rgba(110, 120, 232, 1);
  color: ${p => p.theme.colors.textLight};
  border: transparent;
  border-radius: ${p => p.theme.radii.light}px;
`;

export const H3 = styled.h3`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const UlMobile = styled.ul`
  border-radius: 10px;
`;

export const DivMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LiMobile = styled.li`
  width: 280px;
  background-color: ${p => p.theme.colors.textLight};
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 12px 20px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  border-bottom: 1px solid #dcdcdf;
  :last-child {
    border-bottom: none;
  }
`;

export const SpanMobile = styled.span`
  text-align: right;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.heading};
`;
