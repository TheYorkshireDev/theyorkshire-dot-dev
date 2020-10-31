import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layouts/Layout';

const HomePageLayout = ({ children }) => (
  <Layout isIndex={true}>{children}</Layout>
);

HomePageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default HomePageLayout;
