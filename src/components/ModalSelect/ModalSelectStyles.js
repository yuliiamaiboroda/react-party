export const container = baseStyles => ({
  ...baseStyles,
  maxWidth: '400px',
  width: '100%',
  boxShadow: 'none',
});

export const control = (baseStyles, state) => {
  // console.log('baseStyles: ', baseStyles);
  // console.log('state: ', state);
  return {
    ...baseStyles,
    border: 'none',
    borderBottom: '1px solid #E0E0E0',
    borderRadius: '0',
    cursor: 'pointer',

    '&:hover': {
      border: 'none',
      borderBottom: '1px solid #E0E0E0',
      boxShadow: 'none',
    },
  };
};

export const valueContainer = (baseStyles, state) => {
  // console.log('valueContainer => baseStyles: ', baseStyles);
  // console.log('valueContainer => state: ', state);
  return { ...baseStyles };
};

export const indicatorsContainer = (baseStyles, state) => {
  // console.log('indicators => baseStyles: ', baseStyles);
  // console.log('indicators => state: ', state);
  return { ...baseStyles };
};

export const indicatorSeparator = (baseStyles, state) => {
  // console.log('indicatorSeparator => baseStyles: ', baseStyles);
  // console.log('indicatorSeparator => state: ', state);
  return { ...baseStyles };
};

export const menu = (baseStyles, state) => {
  // console.log('menu => baseStyles: ', baseStyles);
  // console.log('menu => state: ', state);
  return {
    ...baseStyles,
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: '20px',
    overflow: 'hidden',
  };
};

export const menuList = (baseStyles, state) => {
  // console.log('menuList => baseStyles: ', baseStyles);
  // console.log('menuList => state: ', state);
  return {
    ...baseStyles,
    '::-webkit-scrollbar': { width: '5px' },
    '::-webkit-scrollbar-track': {
      boxShadow: 'transparent',
      borderRadius: '20px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#FF6596',
      borderRadius: '20px',
    },

    '::-webkit-scrollbar-thumb:hover': {
      background: '#FFD1E0',
    },
  };
};

export const option = (baseStyles, state) => {
  // console.log('option => baseStyles: ', baseStyles);
  // console.log('option => state: ', state);
  return {
    ...baseStyles,
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: (state.isSelected && '700') || '400',
    fontSize: '18px',
    lineHeight: '1.18',

    color: (state.isSelected && '#FFFFFF') || '#000000',
    backgroundColor:
      (state.isSelected && '#FF6596') ||
      (state.isFocused && '#FFD1E0') ||
      'transparent',

    '&:hover': { fontWeight: '700', color: '#FF6596', backgroundColor: '#fff' },
    '&:focus': { fontWeight: '700', color: '#FF6596', backgroundColor: '#fff' },
    '&:target': {
      fontWeight: '700',
      color: '#FF6596',
      backgroundColor: '#fff',
    },
    '&:active': {
      fontWeight: '700',
      color: '#FF6596',
      backgroundColor: '#fff',
    },
  };
};

export const placeholder = (baseStyles, state) => {
  // console.log('placeholder => baseStyles: ', baseStyles);
  // console.log('placeholder => state: ', state);
  return { ...baseStyles };
};

export const dropdownIndicator = (baseStyles, state) => {
  // console.log('dropdownIndicator => baseStyles: ', baseStyles);
  // console.log('dropdownIndicator => state: ', state);
  return {
    ...baseStyles,
  };
};

export const theme = theme => {
  // console.log('theme => ', theme);
  return { ...theme };
};

// font-family: 'Work Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 18px;
// line-height: 21px;
// display: flex;
// align-items: center;

// color: #000000;
