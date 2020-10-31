import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import config from '../../config/site';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PostHeader from '../components/PostHeader';

const Content = styled.article``;

const BlogPostTemplate = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt, wordCount } = data.markdownRemark;
  const { date, published, title, description, tags, slug } = frontmatter;
  const imagePath = frontmatter.cover.childImageSharp.sizes.src;
  const image = frontmatter.cover.childImageSharp.fluid;

  const PostURL = config.siteUrl + '/blog/' + slug;

  return (
    <Layout>
      <Helmet title={`${title} | Steven Cooney (TheYorkshireDev)`} />
      <SEO
        postTitle={title}
        postDescription={description || excerpt || ' '}
        postBanner={imagePath}
        pagePath={PostURL}
        article
      />
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
    </Layout>
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
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90, traceSVG: { color: "#0B536A" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            resize(width: 1200, quality: 90) {
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
