import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import UpperH1 from '../components/UpperH1';

const Header = styled.header`
  h1 {
    text-align: center;
    margin-bottom: 0.7rem;
  }

  margin-bottom: 1em;
`;

const PostInformation = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1em;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    flex-direction: row;
  }
`;

const PostHeader = ({
  title,
  date,
  published,
  excerpt,
  tags,
  wordCount,
  image,
}) => {
  const author = 'Steven Cooney';

  return (
    <Header>
      <UpperH1>{title}</UpperH1>
      <meta itemProp="name" content={title} />
      <PostInformation>
        <meta itemProp="description" content={excerpt} />
        <time itemProp="datePublished" dateTime={date}>
          {published}&nbsp;
        </time>
        <meta itemProp="dateModified" content={date}></meta>
        <meta itemProp="keywords" content={tags}></meta>
        <meta itemProp="wordCount" content={wordCount}></meta>
        <span>
          by&nbsp;
          <span>{author}</span>
        </span>
        <meta itemProp="author" content={author} />
        <div
          itemProp="publisher"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <meta itemProp="name" content="TheYorkshireDev"></meta>
        </div>
      </PostInformation>
      <Img fluid={image} />
    </Header>
  );
};

export default PostHeader;

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  tags: PropTypes.array.isRequired,
  wordCount: PropTypes.number,
  image: PropTypes.object.isRequired,
};
