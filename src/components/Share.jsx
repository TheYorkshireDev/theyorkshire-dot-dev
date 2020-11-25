import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaTwitter, FaFacebookF, FaLinkedin, FaAt } from 'react-icons/fa';

const TwitterLink = styled.a`
  &:hover {
    color: ${(props) => props.theme.colors.twitter};
  }
`;

const FacebookLink = styled.a`
  margin: 0 0.5rem;

  &:hover {
    color: ${(props) => props.theme.colors.facebook};
  }
`;

const EmailLink = styled.a`
  margin: 0 0.5rem 0 0;

  &:hover {
    color: ${(props) => props.theme.colors.email};
  }
`;

const LinkedInLink = styled.a`
  &:hover {
    color: ${(props) => props.theme.colors.linkedIn};
  }
`;

const Share = ({ title, tags, url }) => {
  var hashtags = '#' + tags.join(' #');

  var encodedUrl = encodeURIComponent(url);
  var encodedSocialText = encodeURIComponent(
    `${title} - TheYorkshireDev by @theyorkshiredev ${hashtags}`
  );
  var encodedEmailText = encodeURIComponent(
    `${url} ${title} - TheYorkshireDev`
  );
  var encodedLinkedInText = encodeURIComponent(
    `${title} - TheYorkshireDev by @theyorkshiredev`
  );

  var twitterLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedSocialText}`;
  var facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedSocialText}`;
  var emailLink = `mailto:?&subject=&body=${encodedEmailText}`;
  var linkedInLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedLinkedInText}`;

  return (
    <span>
      <TwitterLink
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share blog post on Twitter"
        href={twitterLink}
      >
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <FaTwitter />
        </IconContext.Provider>
      </TwitterLink>
      <FacebookLink
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share blog post on Facebook"
        href={facebookLink}
      >
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <FaFacebookF />
        </IconContext.Provider>
      </FacebookLink>
      <EmailLink
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share blog post via email"
        href={emailLink}
      >
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <FaAt />
        </IconContext.Provider>
      </EmailLink>
      <LinkedInLink
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share blog post on LinkedIn"
        href={linkedInLink}
      >
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <FaLinkedin />
        </IconContext.Provider>
      </LinkedInLink>
    </span>
  );
};

export default Share;

Share.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
};
