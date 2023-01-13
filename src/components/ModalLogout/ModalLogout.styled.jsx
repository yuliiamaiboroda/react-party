import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;

  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xl}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
`;

const Button = styled.button`
  min-width: 150px;
  height: 40px;

  border-radius: ${p => p.theme.radii.light}px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;

  transition: ${p => p.theme.transitions.regularScale};

  :hover,
  :focus {
    scale: ${p => p.theme.sizes.scale.up};
  }

  :active {
    scale: ${p => p.theme.sizes.scale.down};
  }
`;

export const CancelButton = styled(Button)`
  background: ${p => p.theme.colors.primary};
  border-color: transparent;

  color: ${p => p.theme.colors.textLight};
`;

export const LogoutButton = styled(Button)`
  background: ${p => p.theme.colors.lightBg};
  border: ${p => p.theme.borders.accented};

  color: ${p => p.theme.colors.secondary};
`;
