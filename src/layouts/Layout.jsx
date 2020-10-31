import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';
import headroom from '../styles/headroom';
import NavBar from '../components/NavBar';
import themeTemplate from '../../config/theme';

const FlexStructure = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  background-color: ${(props) =>
    props.homepage ? props.theme.colors.primary : 'inherit'};
`;

const PageContent = styled.section`
  flex: 1;

  padding-top: calc(
    ${(props) => props.theme.headroom.navBar.logoHeight.mobile} +
      (${(props) => props.theme.headroom.padding} * 2) + 2rem
  );

  padding-right: 1.7rem;
  padding-left: 1.7rem;

  a {
    text-decoration: underline;
  }
  a:hover {
    font-weight: bold;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    width: 90%;
    margin: auto;
    padding-top: calc(
      ${(props) => props.theme.headroom.navBar.logoHeight.mobile} +
        (${(props) => props.theme.headroom.padding} * 2) +
        ${(props) => (props.homepage ? '2rem' : '3.5rem')}
    );
  }

  @media (min-width: ${(props) => props.theme.breakpoints.largeAndUp}) {
    width: 80%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xlAndUp}) {
    width: 60%;
  }
`;

const Layout = ({ children, isIndex }) => (
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
      <ThemeProvider theme={themeTemplate}>
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
                color: ${themeTemplate.colors.primary};
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
          <FlexStructure {...(isIndex ? { homepage: true } : {})}>
            <NavBar menuLinks={data.site.siteMetadata.menuLinks} />
            <PageContent {...(isIndex ? { homepage: true } : {})}>
              {children}
            </PageContent>
            <Footer />
          </FlexStructure>
        </Fragment>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  isIndex: PropTypes.bool,
};

export default Layout;
