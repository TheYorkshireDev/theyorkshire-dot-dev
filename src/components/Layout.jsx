import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import theme from '../../config/theme';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {/* NOTE: Typography.js Normalizes Browser Defaults */}
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          html {
            overflow-x: hidden;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          html,
          body {
            width: 100%;
            height: 100%;
          }
          a,
          a:hover,
          a:active,
          a:visited {
            color: ${theme.colors.primary};
          }
          a {
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}
      />
      {children}
    </Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default Layout;
