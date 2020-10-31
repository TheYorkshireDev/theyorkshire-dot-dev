import React from 'react';
import PropTypes from 'prop-types';

import MainContentLayout from '../layouts/Main';

const HomePageLayout = ({ children }) => (
  <MainContentLayout isIndex={true}>{children}</MainContentLayout>
);

HomePageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default HomePageLayout;
