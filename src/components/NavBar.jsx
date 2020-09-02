import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.svg';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .is-active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  height: ${(props) => props.theme.headroom.navBar.logoHeight.mobile};
  display: flex;
  margin-bottom: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    height: ${(props) => props.theme.headroom.navBar.logoHeight.standard};
  }
`;

const MobileMenuToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  margin-right: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.white};
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg)' : 'rotate(0deg)')};
    top: 10px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 10vh;

  z-index: ${(props) => (props.open ? '1500' : '-1')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  background: ${(props) => props.theme.colors.primary};
  transition: opacity 0.5s, visibility 0.5s;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    flex-direction: row;
    justify-content: flex-end;

    position: static;
    width: inherit;
    height: inherit;
    padding-top: 0;

    z-index: 1500;
    visibility: visible;
    opacity: 1;
    background: rgba(0, 0, 0, 0);
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  :hover,
  :active,
  :visited {
    color: ${(props) => props.theme.colors.white};
  }

  text-transform: uppercase;
  font-size: 1.8rem;
  line-height: 2.8rem;
  margin-top: 0.725rem;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    font-size: 1.1rem;
    line-height: 1.58;
    margin-top: 0;
    margin-left: 1.7rem;
  }
`;

const NavBar = ({ menuLinks }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Headroom calcHeightOnResize disableInlineStyles>
      <Navigation>
        <Link to="/">
          <Logo src={logo} alt="TheYorkshireDev Logo" />
        </Link>

        <MobileMenuToggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <MobileMenuIcon open /> : <MobileMenuIcon />}
        </MobileMenuToggle>

        <NavContainer {...(navbarOpen ? { open: true } : {})}>
          {menuLinks.map((link) => (
            <NavLink key={link.name} to={link.path} activeClassName="is-active">
              {link.name}
            </NavLink>
          ))}
        </NavContainer>
      </Navigation>
    </Headroom>
  );
};

NavBar.propTypes = {
  menuLinks: PropTypes.array,
};

export default NavBar;
