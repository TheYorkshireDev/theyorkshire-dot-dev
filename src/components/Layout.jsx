import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';
import theme from '../../config/theme';
import headroom from '../styles/headroom';

const FlexStructure = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const PageContent = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              path
            }
          }
        }
      }
    `}
    render={(data) => (
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

              ${headroom}
            `}
          />
          <FlexStructure>
            <NavBar menuLinks={data.site.siteMetadata.menuLinks} />
            <PageContent>{children}</PageContent>
            <Footer />
          </FlexStructure>
        </Fragment>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default Layout;
