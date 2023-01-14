import { theme } from '../../theme';
import dropdownIcon from 'icons/dropdownIcon.svg';

export const container = baseStyles => ({
  ...baseStyles,
  maxWidth: '400px',
  width: '100%',
  height: '32px',
  boxShadow: 'none',
});

export const control = baseStyles => {
  return {
    ...baseStyles,
    border: theme.borders.none,
    borderBottom: theme.borders.formField,
    borderRadius: theme.radii.none,
    cursor: 'pointer',

    '&:hover': {
      border: 'none',
      borderBottom: theme.borders.formField,
      boxShadow: 'none',
    },
  };
};

export const placeholder = baseStyles => {
  return {
    ...baseStyles,
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.normal,
    fontSize: `${theme.fontSizes.m}px`,
    lineHeight: theme.lineHeights.body,

    color: theme.colors.muted,
  };
};

export const indicatorSeparator = () => {
  return { display: 'none' };
};

export const dropdownIndicator = baseStyles => {
  return {
    ...baseStyles,
    width: '32px',
    height: '32px',
    padding: '0',
    backgroundImage: `url(${dropdownIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    svg: {
      display: 'none',
    },
  };
};

export const menu = baseStyles => {
  return {
    ...baseStyles,
    maxWidth: '400px',
    maxHeight: '290px',
    backgroundColor: theme.colors.dropdownBg,
    boxShadow: theme.shadows.dropdown,
    backdropFilter: theme.colors.blur,
    borderRadius: `${theme.radii.light}px`,
    overflow: 'hidden',
  };
};

export const menuList = baseStyles => {
  return {
    ...baseStyles,
    '::-webkit-scrollbar': { width: '5px' },
    '::-webkit-scrollbar-track': {
      boxShadow: 'transparent',
      borderRadius: `${theme.radii.light}px`,
    },
    '::-webkit-scrollbar-thumb': {
      background: theme.colors.expenseLight,
      borderRadius: `${theme.radii.light}px`,
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: theme.colors.expense,
    },
  };
};

export const option = (baseStyles, state) => {
  return {
    ...baseStyles,
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    padding: `${theme.space[0]} ${theme.space[3]}px`,
    fontFamily: theme.fonts.heading,
    fontWeight:
      (state.isSelected && theme.fontWeights.bold) || theme.fontWeights.normal,
    fontSize: `${theme.fontSizes.m}px`,
    lineHeight: '1.18',

    color: (state.isSelected && theme.colors.textLight) || theme.colors.text,
    backgroundColor:
      (state.isSelected && theme.colors.expense) ||
      (state.isFocused && theme.colors.expenseLight) ||
      'transparent',

    '&:hover': {
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.expense,
      backgroundColor: theme.colors.lightBg,
    },
    '&:focus': {
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.expense,
      backgroundColor: theme.colors.lightBg,
    },
    '&:target': {
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.expense,
      backgroundColor: theme.colors.lightBg,
    },
    '&:active': {
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.expense,
      backgroundColor: theme.colors.lightBg,
    },
  };
};
