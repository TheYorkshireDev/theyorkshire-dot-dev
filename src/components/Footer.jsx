import React from 'react';
import styled from '@emotion/styled';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Wrapper = styled.footer`
  font-size: 0.75rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0rem 0rem 0rem;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    flex-direction: row;
    padding: 1.2rem 2rem 0.8rem 2rem;
  }
`;

const FooterItem = styled.div`
  flex: 1;
`;

const FooterLeft = styled(FooterItem)`
  line-height: 2.2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    padding-bottom: 0;
    line-height: inherit;
  }
`;

const FooterMiddle = styled(FooterItem)`
  order: -1;
  font-size: 2.25rem;
  line-height: 2.2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    order: 0;
    text-align: center;
  }
`;

const FooterRight = styled(FooterItem)`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    display: block;
    text-align: right;
  }
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  :active,
  :visited {
    color: ${(props) => props.theme.colors.white};
  }
`;

const TwitterLink = styled(FooterLink)`
  &:hover {
    color: ${(props) => props.theme.colors.twitter};
  }
`;

const GithubLink = styled(FooterLink)`
  margin: 0 0.5rem;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

const LinkedInLink = styled(FooterLink)`
  &:hover {
    color: ${(props) => props.theme.colors.linkedIn};
  }
`;

const Footer = () => (
  <Wrapper>
    <FooterLeft>© {new Date().getFullYear()} - TheYorkshireDev</FooterLeft>
    <FooterMiddle>
      <TwitterLink
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter icon to link through to profile"
        href="https://twitter.com/theyorkshiredev"
      >
        <FaTwitter />
      </TwitterLink>

      <GithubLink
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub icon to link through to profile"
        href="https://github.com/TheYorkshireDev"
      >
        <FaGithub />
      </GithubLink>

      <LinkedInLink
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn icon to link through to profile"
        href="https://www.linkedin.com/in/stevenjamescooney/"
      >
        <FaLinkedin />
      </LinkedInLink>
    </FooterMiddle>
    <FooterRight />
  </Wrapper>
);

export default Footer;
