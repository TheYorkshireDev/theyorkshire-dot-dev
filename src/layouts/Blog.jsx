import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import SEO from '../components/SEO';

const BlogContentLayout = ({ children }) => (
  <Layout>
    <SEO />
    {children}
  </Layout>
);

BlogContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default BlogContentLayout;
