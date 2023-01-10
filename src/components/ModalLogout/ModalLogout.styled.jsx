import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;

  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xl}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const CancelButton = styled.button`
  width: 150px;
  height: 40px;

  background: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.light}px;
  border-color: transparent;

  color: ${p => p.theme.colors.textLight};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
`;

export const LogoutButton = styled.button`
  width: 150px;
  height: 40px;

  background: ${p => p.theme.colors.lightBg};
  border-radius: ${p => p.theme.radii.light}px;
  border: ${p => p.theme.borders.accented};

  color: ${p => p.theme.colors.secondary};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
`;
