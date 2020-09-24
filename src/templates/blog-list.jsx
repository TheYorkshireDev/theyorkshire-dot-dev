import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { IconContext } from 'react-icons';
import { FaFilter, FaRegPlusSquare, FaRegMinusSquare } from 'react-icons/fa';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import UpperH1 from '../components/UpperH1';
import { getTagCounts } from '../util/utils';

const SplitContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-decoration: none;

  .visible {
    display: inline-block;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    flex-direction: row;
  }
`;

const PostSection = styled.div`
  flex-basis: 80%;
`;

const TagSection = styled.div`
  display: none;
  flex-basis: 20%;
  text-align: center;
  padding-bottom: 0.7em;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    display: inline-block;
    padding-bottom: 0;
  }
`;

const TagList = styled.div`
  margin: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    margin-left: 1rem;
  }
`;

const TagBtn = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  border: solid 1px ${(props) => props.theme.colors.primary};

  a {
    text-decoration: none;
  }

  :hover {
    border: solid 1px ${(props) => props.theme.colors.primary};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    border: solid 1px ${(props) => props.theme.colors.white};
  }
`;

const TagLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0.8rem;
  color: ${(props) => props.theme.colors.primary};
`;

const FilterToggle = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  margin-bottom: 10px;

  .hide {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    display: none;
  }
`;

const BlogPageTemplate = ({ data }) => {
  const [tagsHidden, hideTags] = useState(true);
  const { edges } = data.posts;
  const postTags = data.allTags.nodes;
  const tags = getTagCounts(postTags);

  return (
    <Layout>
      <Helmet title={'Blog | Steven Cooney (TheYorkshireDev)'} />
      <UpperH1>All Posts</UpperH1>

      <SplitContainer>
        <PostSection itemScope itemType="http://schema.org/Blog">
          {edges.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const { title, tags, path, date, cover } = frontmatter;
            return (
              <PostList
                key={id}
                title={title}
                tags={tags}
                path={path}
                date={date}
                cover={cover.childImageSharp.fluid}
                excerpt={excerpt}
              />
            );
          })}
        </PostSection>

        <TagSection className={tagsHidden ? '' : 'visible'}>
          <TagList>
            {tags &&
              tags.map((tag) => {
                return (
                  <TagBtn key={tag.key}>
                    <TagLink to={`/tags/${tag.key}`}>
                      {tag.key} ({tag.value})
                    </TagLink>
                  </TagBtn>
                );
              })}
          </TagList>
        </TagSection>

        <FilterToggle onClick={() => hideTags(!tagsHidden)}>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <FaFilter />
            <span className={tagsHidden ? '' : 'hide'}>
              {' '}
              <FaRegPlusSquare />
            </span>
            <span className={tagsHidden ? 'hide' : ''}>
              {' '}
              <FaRegMinusSquare />
            </span>
          </IconContext.Provider>
        </FilterToggle>
      </SplitContainer>
    </Layout>
  );
};

export default BlogPageTemplate;

BlogPageTemplate.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              tags: PropTypes.array,
              path: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              cover: PropTypes.object.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
    allTags: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            tags: PropTypes.array,
          }),
        })
      ),
    }),
  }),
};

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "D MMMM YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#0B536A" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    allTags: allMarkdownRemark {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;
