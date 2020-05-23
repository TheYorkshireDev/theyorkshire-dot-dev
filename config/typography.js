import Typography from 'typography';
const theme = require('./theme');

export const typography = new Typography({
  title: 'TheYorkshireDevTypography',
  baseFontSize: '18px',
  baseLineHeight: 1.58,
  headerFontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    // 'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
  bodyFontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    // 'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
  ],
  headerWeight: 700,
  includeNormalize: true,
  overrideStyles: () => ({
    'h1,h2,h3,h4,h5,h6': {
      color: theme.colors.primary,
    },
  }),
});

export default typography;
