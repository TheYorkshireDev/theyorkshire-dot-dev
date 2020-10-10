import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { IconContext } from 'react-icons';
import { FaRegCalendar, FaTags } from 'react-icons/fa';

const Post = styled.article`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 0.5rem;
  margin-bottom: 1.58rem;

  @media (min-width: ${(props) => props.theme.breakpoints.largeAndUp}) {
    display: flex;
    border-top: none;
    border-left: none;
    border-right: none;

    :hover {
      border-bottom: 1px solid transparent;
      box-shadow: ${(props) => props.theme.shadow.post};
    }
  }
`;

const Image = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    display: block;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.largeAndUp}) {
    flex-basis: 34%;
  }
`;

const Details = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.largeAndUp}) {
    padding-left: 1rem;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 0.6rem;
  font-size: 1.2em;
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    padding-top: 0.6rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.largeAndUp}) {
    padding-top: 0;
  }
`;

const Information = styled.div`
  margin-bottom: 0.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Tags = styled.div`
  display: none;
  font-size: 0.7rem;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    display: block;
  }
`;

const Tag = styled.span`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  margin: 0.3rem;
  display: inline-block;
`;

const Date = styled.p`
  text-align: right;
  font-size: 0.8rem;
  margin-bottom: 0.6rem;
  margin-left: auto;
`;

const Excerpt = styled.p`
  margin: 0;
`;

const PostList = ({ slug, cover, title, date, excerpt, tags }) => (
  <Post>
    <Image>
      <Img fluid={cover} />
    </Image>
    <Details>
      <Title itemProp="name headline">{title}</Title>
      <Information>
        <Tags>
          In
          {tags &&
            tags.map(function (tag) {
              return (
                <IconContext.Provider
                  key={tag}
                  value={{ style: { verticalAlign: 'middle' } }}
                >
                  <Tag>
                    <FaTags /> {tag}
                  </Tag>
                </IconContext.Provider>
              );
            })}
        </Tags>
        <Date>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <FaRegCalendar /> {date}
          </IconContext.Provider>
        </Date>
      </Information>
      <Excerpt>{excerpt}</Excerpt>
    </Details>
  </Post>
);

export default PostList;

PostList.propTypes = {
  cover: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
