import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLine = styled.header`
  display: flex;
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
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xl}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.muted};
`;

export const ImgSep = styled.img`
  margin: 0 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.muted};
  border: none;
  background: none;
  cursor: pointer;
`;
