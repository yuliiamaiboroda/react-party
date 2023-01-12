import styled from 'styled-components';

export const AddButton = styled.button`
  position: absolute;
  bottom: ${p => p.theme.space[5]}px;
  right: ${p => p.theme.space[5]}px;

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

  :hover,
  :focus {
    scale: ${p => p.theme.sizes.scale.up};
  }

  :active {
    scale: ${p => p.theme.sizes.scale.down};
  }
`;