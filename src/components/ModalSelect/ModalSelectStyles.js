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
  return { ...baseStyles };
};

export const menuList = (baseStyles, state) => {
  // console.log('menuList => baseStyles: ', baseStyles);
  // console.log('menuList => state: ', state);
  return { ...baseStyles };
};

export const option = (baseStyles, state) => {
  // console.log('option => baseStyles: ', baseStyles);
  // console.log('option => state: ', state);
  return { ...baseStyles };
};

export const placeholder = (baseStyles, state) => {
  // console.log('placeholder => baseStyles: ', baseStyles);
  // console.log('placeholder => state: ', state);
  // return { ...baseStyles };
};

export const dropdownIndicator = (baseStyles, state) => {
  // console.log('dropdownIndicator => baseStyles: ', baseStyles);
  // console.log('dropdownIndicator => state: ', state);
  return { ...baseStyles };
};

export const theme = theme => {
  // console.log('theme => ', theme);
  return { ...theme };
};
