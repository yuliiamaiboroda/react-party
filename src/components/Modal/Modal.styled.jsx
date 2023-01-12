import styled from 'styled-components';

export const CloseModalBtn = styled.button`
  display: none;
  position: absolute;
  top: ${p => p.theme.space[2]}px;
  right: ${p => p.theme.space[2]}px;

  justify-content: center;
  align-items: center;

  padding: ${p => p.theme.space[1]}px;

  color: ${p => p.theme.colors.text};
  background-color: transparent;
  border: transparent;

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  transition: ${p => p.theme.transitions.regularColor};

  :hover,
  :focus {
    color: ${p => p.theme.colors.expence};
  }

  :active {
    color: ${p => p.theme.colors.primary};
  }
`;
