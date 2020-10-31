import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layouts/Layout';
import SEO from '../components/SEO';

const MainContentLayout = ({ children, isIndex }) => (
  <Layout isIndex={isIndex}>
    <SEO />
    {children}
  </Layout>
);

MainContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  isIndex: PropTypes.bool,
};

export default MainContentLayout;
