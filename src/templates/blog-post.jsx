import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import BlogContentLayout from '../layouts/Blog';
import config from '../../config/site';
import PostHeader from '../components/PostHeader';

const Content = styled.article`
  // HEADINGS
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    padding-top: 1em;
    border-top: 1px solid ${(props) => props.theme.colors.grey};
  }

  // Make sure header link sits next to header
  a.anchor {
    color: inherit;
    fill: var(
      --theme-ui-colors-link-color,
      ${(props) => props.theme.colors.primary}
    );

    // Rare exception that we only want the property to
    // exist and be set for small screens
    @media (max-width: ${(props) => props.theme.breakpoints.largeAndUp}) {
      svg {
        visibility: visible;
      }
    }
  }

  // LISTS
  li {
    margin-bottom: 0;

    p {
      margin-bottom: 0;
    }

    ul,
    ol {
      margin-top: 0;
    }
  }
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt, wordCount } = data.markdownRemark;
  const { date, published, title, description, tags, slug } = frontmatter;
  const imagePath = frontmatter.featuredImage.childImageSharp.resize.src;
  const image = frontmatter.featuredImage.childImageSharp.fluid;

  const PostURL = config.siteUrl + '/blog/' + slug;

  return (
    <BlogContentLayout
      pageTitle={title}
      seoTitle={title}
      seoDescription={description || excerpt || ' '}
      seoBanner={imagePath}
      pagePath={PostURL}
      article
    >
      <section itemScope itemType="http://schema.org/Article">
        <PostHeader
          title={title}
          date={date}
          published={published}
          excerpt={description || excerpt}
          tags={tags}
          wordCount={wordCount.words}
          image={image}
        />
        <meta itemProp="mainEntityOfPage" content={PostURL}></meta>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </BlogContentLayout>
  );
};

export default BlogPostTemplate;

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($postSlug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $postSlug } }) {
      html
      frontmatter {
        date
        published: date(formatString: "D MMMM YYYY")
        title
        description
        tags
        slug
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90, traceSVG: { color: "#0B536A" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            resize(width: 900, quality: 90) {
              src
            }
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      excerpt
      wordCount {
        words
      }
    }
  }
`;
