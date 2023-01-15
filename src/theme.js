export const theme = Object.freeze({
  breakpoints: ['768px', '1280px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Work Sans, sans-serif',
  },
  fontSizes: {
    xs: 12,
    s: 16,
    m: 18,
    l: 24,
    xl: 30,
    xxl: 36,
  },
  fontWeights: { normal: 400, bold: 700 },
  lineHeights: {
    heading: 1.5,
    body: 1.18,
  },
  letterSpacing: { button: '0.1em' },
  colors: {
    text: '#000',
    textLight: '#fff',
    background: 'rgba(255, 255, 255, 0.4)',
    lightBg: '#fff',
    dropdownBg: 'rgba(255, 255, 255, 0.7)',
    backdropBg: 'rgba(0, 0, 0, 0.25)',
    primary: '#24CCA7',
    secondary: '#4A56E2',
    income: '#24CCA7',
    expense: '#FF6596',
    expenseLight: '#FFD1E0',
    muted: '#BDBDBD',
    blur: 'blur(25px)',
  },
  borders: {
    none: 'none',
    transperent: '1px solid transperent',
    normal: '1px solid #000000',
    accented: '1px solid #4A56E2',
    table: '1px solid #DCDCDF',
    formField: '1px solid #E0E0E0',
  },
  radii: { none: 'none', normal: 30, light: 20, circle: '50%' },
  shadows: {
    table: '0px 1px 0px rgba(255, 255, 255, 0.6)',
    addButton: '0px 6px 15px rgba(36, 204, 167, 0.5)',
    dropdown: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    expenseSwitch: '0px 6px 15px rgba(255, 101, 150, 0.5)',
    incomeSwitch: '0px 6px 15px rgba(36, 204, 167, 0.5)',
  },
  opacities: { none: 0, half: 0.6, full: 1 },
  sizes: {
    containerWidth: { mobile: 480, tablet: 768, desktop: 1280 },
    scale: { up: 1.1, down: 0.9 },
  },
  transitions: {
    regularColor: 'color 250ms linear',
    regularBgColor: 'background-color 250ms linear',
    regularScale: 'scale 250ms linear',
  },
});
