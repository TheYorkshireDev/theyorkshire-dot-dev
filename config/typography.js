import Typography from 'typography';

export const typography = new Typography({
  title: 'TheYorkshireDevTypography',
  baseFontSize: '18px',
  baseLineHeight: 1.58,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
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
});

export default typography;
