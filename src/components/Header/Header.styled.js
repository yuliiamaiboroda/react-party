import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme';

export const HeaderLine = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  @media (max-width: ${theme.sizes.containerWidth.tablet - 1}px){
    margin: 0 auto;
    max-width:280px;
  }
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const H2 = styled.h2`
  margin-left: 15px;
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.body};
  font-size: ${theme.fontSizes.l}px;
  @media (min-width: ${theme.breakpoints[0]}){
    margin-left: 20px;
    font-size: ${theme.fontSizes.xl}px;
    line-height: ${theme.lineHeights.heading};
  }
  
`;

export const Name = styled.p`
@media (max-width: ${theme.sizes.containerWidth.tablet - 1}px){
  margin-right: 8px;
}
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.m}px;
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.body};
  color: ${theme.colors.muted};
`;

export const ImgSep = styled.img`
  display: none;
@media (min-width: ${theme.breakpoints[0]}){
  display: block;
  margin: 0 12px;
}
  
`;
export const ImgWallet = styled.img`
  width: 30px;
  height: 30px;
  @media (min-width: ${theme.breakpoints[0]}){
    width: 40px;
    height: 40px;
}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.m}px;
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.body};
  color: ${theme.colors.muted};
  border: none;
  background: none;
  cursor: pointer;
`;
export const ExitText = styled.p`
@media (max-width: ${theme.sizes.containerWidth.tablet - 1}px){
display: none;
}
margin-left: 8px;
`;
