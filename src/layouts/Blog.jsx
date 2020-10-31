import React from 'react';
import PropTypes from 'prop-types';

import BaseLayout from './Base';
import SEO from '../components/SEO';

const BlogContentLayout = ({
  children,
  title,
  postDescription,
  postBanner,
  pagePath,
  article,
}) => (
  <BaseLayout title={title}>
    <SEO
      postTitle={title}
      postDescription={postDescription}
      postBanner={postBanner}
      pagePath={pagePath}
      article={article}
    />
    {children}
  </BaseLayout>
);

BlogContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string,
  postDescription: PropTypes.string,
  postBanner: PropTypes.string,
  pagePath: PropTypes.string,
  article: PropTypes.bool,
};

export default BlogContentLayout;
