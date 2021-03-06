import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import BlogContentLayout from '../layouts/Blog';
import PostList from '../components/PostList';

const HeadingOne = styled.h1`
  font-weight: 500;
`;

const AllPostsButton = styled.div`
  margin: 0 0 1rem 0;
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.primary};
    border: solid 1px ${(props) => props.theme.colors.primary};
    padding: 0.25rem 0.85rem;
    border-radius: 0.4rem;
    margin: 0.3rem 0.6rem 0.3rem 0px;
    white-space: nowrap;
    text-decoration: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.smallAndUp}) {
    margin: 0 0 2rem 0;
  }
`;

const TagPageTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const { edges } = data.posts;

  return (
    <BlogContentLayout
      pageTitle={tag}
      seoTitle={`Posts about ${tag}`}
      seoDescription={`${tag} related blog posts covered by TheYorkshireDev`}
      blog
    >
      <HeadingOne>{tag}</HeadingOne>

      <AllPostsButton>
        <Link to="/blog">All Posts</Link>
      </AllPostsButton>

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
    </BlogContentLayout>
  );
};

export default TagPageTemplate;

TagPageTemplate.propTypes = {
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
  }),
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
};

export const query = graphql`
  query tagListQuery($tag: String!, $skip: Int!, $limit: Int!) {
    posts: allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
  }
`;
