import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import BlogContentLayout from '../layouts/Blog';
import UpperH1 from '../components/UpperH1';
import { formatTagSlug, getTagCounts } from '../util/utils';

const ButtonStyling = `
  padding: 0.25rem 0.85rem;
  border-radius: 0.4rem;
  margin: 0.3rem 0.6rem 0.3rem 0px;
  white-space: nowrap;
  text-decoration: none;
`;

const AllPostsButton = styled.div`
  padding: 1rem 0;
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.primary};
    border: solid 1px ${(props) => props.theme.colors.primary};
    ${ButtonStyling}
  }
`;

const TagContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  a {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    ${ButtonStyling}
  }
`;

const TagCounter = styled.span`
  margin-left 0.75em;
`;

const TagsPage = ({ data }) => {
  const postTags = data.allTags.nodes;
  const tags = getTagCounts(postTags);

  return (
    <BlogContentLayout
      pageTitle="Tags"
      seoTitle="Tags"
      seoDescription="List of tags/categories covered in blog posts by TheYorkshireDev"
      blog
    >
      <UpperH1>Tags</UpperH1>

      <AllPostsButton>
        <Link to="/blog">All Posts</Link>
      </AllPostsButton>

      <TagContainer>
        {tags &&
          tags.map((tag) => {
            return (
              <Link key={tag.key} to={`/tags/${formatTagSlug(tag.key)}`}>
                <span>{tag.key}</span> <TagCounter>{tag.value}</TagCounter>
              </Link>
            );
          })}
      </TagContainer>
    </BlogContentLayout>
  );
};

export default TagsPage;

TagsPage.propTypes = {
  data: PropTypes.shape({
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
  query {
    allTags: allMdx {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;
