import React from 'react';
import PropTypes from 'prop-types';

import BaseLayout from './Base';
import SEO from '../components/SEO';

const BlogContentLayout = ({ children, title }) => (
  <BaseLayout title={title}>
    <SEO />
    {children}
  </BaseLayout>
);

BlogContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string,
};

export default BlogContentLayout;
