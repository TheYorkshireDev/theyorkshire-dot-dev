import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Layout from '../layouts/Layout';
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
    <Layout>
      <Helmet title={`${tag} | Steven Cooney (TheYorkshireDev)`} />
      <HeadingOne>{tag}</HeadingOne>

      <AllPostsButton>
        <Link to="/blog">All Posts</Link>
      </AllPostsButton>

      {edges.map(({ node }) => {
        const { id, excerpt, frontmatter } = node;
        const { title, tags, slug, date, cover } = frontmatter;
        return (
          <PostList
            key={id}
            title={title}
            tags={tags}
            slug={slug}
            date={date}
            cover={cover.childImageSharp.fluid}
            excerpt={excerpt}
          />
        );
      })}
    </Layout>
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
              tags: PropTypes.array,
              slug: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              cover: PropTypes.object.isRequired,
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
    posts: allMarkdownRemark(
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
            slug
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
  }
`;
