import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import BlogContentLayout from '../layouts/Blog';
import config from '../../config/site';
import PostHeader from '../components/PostHeader';
import Share from '../components/Share';

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
  a.anchor.after {
    padding-left: 4px;
    svg {
      fill: var(
        --theme-ui-colors-link-color,
        ${(props) => props.theme.colors.primary}
      );
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

const SharePost = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  p {
    margin-bottom: 0.5rem;
  }

  a {
    font-size: 30px;
  }
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { body, frontmatter, excerpt, wordCount } = data.mdx;
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
          url={PostURL}
        />
        <meta itemProp="mainEntityOfPage" content={PostURL}></meta>
        <Content>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
        <hr />

        <SharePost>
          <p>
            If you enjoyed this article, share it with your friends and
            colleagues!
          </p>
          <Share title={title} url={PostURL} tags={tags} />
        </SharePost>
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
    mdx(frontmatter: { slug: { eq: $postSlug } }) {
      body
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
