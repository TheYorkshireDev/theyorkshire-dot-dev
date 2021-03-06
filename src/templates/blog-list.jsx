import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { IconContext } from 'react-icons';
import { FaFilter, FaRegPlusSquare, FaRegMinusSquare } from 'react-icons/fa';

import BlogContentLayout from '../layouts/Blog';
import PostList from '../components/PostList';
import UpperH1 from '../components/UpperH1';
import { formatTagSlug, getTagCounts } from '../util/utils';

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

  a:hover {
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
    <BlogContentLayout
      pageTitle="All Posts"
      seoTitle="A blog by TheYorkshireDev"
      seoDescription="Latest blog posts by TheYorkshireDev"
      blog
    >
      <UpperH1>All Posts</UpperH1>

      <SplitContainer>
        <PostSection itemScope itemType="http://schema.org/Blog">
          {edges.map(({ node }) => {
            const { id, excerpt, frontmatter } = node;
            const {
              title,
              description,
              tags,
              slug,
              date,
              thumbImage,
            } = frontmatter;
            return (
              <PostList
                key={id}
                title={title}
                tags={tags}
                slug={slug}
                date={date}
                thumbImage={thumbImage.childImageSharp.fluid}
                excerpt={description || excerpt}
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
                    <TagLink to={`/tags/${formatTagSlug(tag.key)}`}>
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
    </BlogContentLayout>
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
              description: PropTypes.string.isRequired,
              tags: PropTypes.array,
              slug: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              thumbImage: PropTypes.object.isRequired,
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
    posts: allMdx(
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
            description
            slug
            tags
            date(formatString: "D MMMM YYYY")
            thumbImage {
              childImageSharp {
                fluid(
                  maxWidth: 500
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
    allTags: allMdx {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;
