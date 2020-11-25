export const colors = {
  // Also update themeColor in site.js
  primary: '#0b536a',
  white: '#ffffff',
  black: '#000000',
  grey: '#e4e4e4',
  twitter: '#00acee',
  linkedIn: '#0e76a8',
  facebook: '#3b5998',
  email: '#ffa500',
};

export const shadow = {
  post: '0 3px 15px rgba(0,0,0,.2)',
};

export const theme = {
  colors,
  shadow,
  breakpoints: {
    // Extra small devices (portrait phones, less than 576px)
    smallAndUp: '576px', // Small devices (landscape phones, 576px and up)
    mediumAndUp: '768px', // Medium devices (tablets, 768px and up)
    largeAndUp: '992px', // Large devices (desktops, 992px and up)
    xlAndUp: '1200px', // Extra large devices (large desktops, 1200px and up)
  },
  headroom: {
    padding: '.5rem',
    transition: 'all 0.25s ease-in-out',
    navBar: {
      logoHeight: {
        mobile: '2.78rem',
        standard: '3.61rem',
      },
    },
  },
};

export default theme;
