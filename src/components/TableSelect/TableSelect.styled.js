import { theme } from '../../theme';
import dropdownIcon from 'icons/dropdownIcon.svg';

export const container = baseStyles => ({
  ...baseStyles,
  position: 'relative',
  width: '100%',
  height: '50px',
  cursor: 'pointer',
  fontFamily: theme.fonts.heading,
  fontWeight: theme.fontWeights.normal,
  fontSize: `${theme.fontSizes.s}px`,
  lineHeight: theme.lineHeights.heading,
  border: theme.borders.normal,
  borderRadius: `${theme.radii.normal}px`,
});

export const valueContainer = baseStyles => ({
  ...baseStyles,
  padding: 0,
});

export const input = baseStyles => ({
  ...baseStyles,
  padding: 0,
  margin: 0,
});

export const control = baseStyles => {
  return {
    ...baseStyles,
    padding: '10px 20px',
    height: '50px',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  };
};

export const indicatorSeparator = () => {
  return { display: 'none' };
};

export const dropdownIndicator = baseStyles => {
  return {
    ...baseStyles,
    position: 'absolute',
    right: '20px',
    width: '32px',
    height: '32px',
    padding: '0',
    backgroundImage: `url(${dropdownIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    svg: {
      display: 'none',
    },
    '&:focus:after': {
      right: '0px',
      backgroundColor: theme.colors.expense,

    },

  };
};

export const menu = baseStyles => {
  return {
    ...baseStyles,
    marginTop: '1px',
    maxHeight: '157px',
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
    height: '150px',
    '::-webkit-scrollbar': { width: '5px' },
    '::-webkit-scrollbar-track': {
      boxShadow: 'transparent',
      borderRadius: `${theme.radii.light}px`,
    },
    '::-webkit-scrollbar-thumb': {
      background: theme.colors.backdropBg,
      borderRadius: `${theme.radii.light}px`,
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: theme.colors.text,
    },
  };
};

export const option = (baseStyles, state) => {
  return {
    ...baseStyles,
    display: 'flex',
    alignItems: 'center',
    height: '28px',
    paddingLeft: '22px',
    fontFamily: theme.fonts.heading,
    fontWeight:
      (state.isSelected && theme.fontWeights.bold) || theme.fontWeights.normal,
    fontSize: `${theme.fontSizes.s}px`,
    lineHeight: theme.lineHeights.body,

    color: theme.colors.text,
    backgroundColor:
      (state.isSelected && theme.colors.lightBg) ||
      (state.isFocused && theme.colors.lightBg) ||
      'transparent',

    '&:hover': {
      backgroundColor: theme.colors.lightBg,
    },
    '&:focus': {
      backgroundColor: theme.colors.lightBg,
    },
    '&:target': {
      backgroundColor: theme.colors.lightBg,
    },
    '&:active': {
      backgroundColor: theme.colors.lightBg,
    },
  };
};
