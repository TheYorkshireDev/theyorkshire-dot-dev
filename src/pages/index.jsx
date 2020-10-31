import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import HomepageLayout from '../layouts/Home';
import RoundLogo from '../../static/logo/logo.inline.svg';

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 80%;
  max-width: 80%;

  @media (min-width: ${(props) => props.theme.breakpoints.mediumAndUp}) {
    width: 40%;
    max-width: 40%;
  }
`;

const HomepageHeader = styled.h1`
  color: ${(props) => props.theme.colors.white};
  margin-top: 2rem;
`;

const HomepageContent = styled.div`
  color: ${(props) => props.theme.colors.white};
`;

const TwitterLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  text-decoration: underline;

  &:hover {
    color: ${(props) => props.theme.colors.twitter};
  }
`;

const IndexPage = () => (
  <HomepageLayout>
    <Helmet title={'Steven Cooney (TheYorkshireDev) | Software Developer'} />
    <HomepageContainer>
      <LogoContainer>
        <RoundLogo />
      </LogoContainer>
      <HomepageHeader>
        Hi, I&apos;m Steven Cooney. I am a Software Developer, endless
        technology tinkerer &amp; family tech support guy.
      </HomepageHeader>

      <HomepageContent>
        <p>
          I love all aspects of software development and programming. I was born
          and raised in Leeds, United Kingdom, where I still live and work to
          this day.
        </p>

        <p>
          Feel free to get in touch on{' '}
          <TwitterLink
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter link through to The Yorkshire Dev's profile"
            href="https://twitter.com/theyorkshiredev"
          >
            Twitter
          </TwitterLink>
          .
        </p>
      </HomepageContent>
    </HomepageContainer>
  </HomepageLayout>
);

export default IndexPage;
