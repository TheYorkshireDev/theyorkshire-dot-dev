import React from 'react';
import PropTypes from 'prop-types';

import BaseLayout from './Base';
import SEO from '../components/SEO';

const BlogContentLayout = ({ children }) => (
  <BaseLayout>
    <SEO />
    {children}
  </BaseLayout>
);

BlogContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default BlogContentLayout;
