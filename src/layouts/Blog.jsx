import React from 'react';
import PropTypes from 'prop-types';

import BaseLayout from './Base';
import SEO from '../components/SEO';

const BlogContentLayout = ({
  children,
  pageTitle,
  seoTitle,
  seoDescription,
  seoBanner,
  pagePath,
  article,
  blog,
}) => (
  <BaseLayout title={pageTitle}>
    <SEO
      title={seoTitle}
      description={seoDescription}
      banner={seoBanner}
      pagePath={pagePath}
      article={article}
      blog={blog}
    />
    {children}
  </BaseLayout>
);

BlogContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pageTitle: PropTypes.string,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  seoBanner: PropTypes.string,
  pagePath: PropTypes.string,
  article: PropTypes.bool,
  blog: PropTypes.bool,
};

export default BlogContentLayout;
