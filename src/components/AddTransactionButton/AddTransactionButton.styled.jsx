import styled from 'styled-components';

export const AddButton = styled.button`
  position: fixed;
  bottom: ${p => p.theme.space[3]}px;
  right: ${p => p.theme.space[3]}px;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 44px;
  min-height: 44px;

  padding: 0;

  color: ${p => p.theme.colors.textLight};
  background-color: ${p => p.theme.colors.primary};
  border-color: transparent;
  border-radius: ${p => p.theme.radii.circle};
  box-shadow: ${p => p.theme.shadows.addButton};

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  transition: ${p => p.theme.transitions.regularScale};
  cursor: pointer;

  :hover,
  :focus {
    scale: ${p => p.theme.sizes.scale.up};
  }

  :active {
    scale: ${p => p.theme.sizes.scale.down};
  }

  @media screen and (min-width: 768px) {
    bottom: ${p => p.theme.space[4]}px;
    right: ${p => p.theme.space[4]}px;
  }
`;
