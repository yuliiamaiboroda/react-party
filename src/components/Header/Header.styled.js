import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme';

export const HeaderLine = styled.header`
  display: flex;
  background-color: ${theme.colors.lightBg};
  align-items: center;
  justify-content: space-between;
  height: 80px;
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
  margin-left: 20px;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.xl}px;
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.heading};
`;

export const Name = styled.p`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.m}px;
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.body};
  color: ${theme.colors.muted};
`;

export const ImgSep = styled.img`
  margin: 0 12px;
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
