import React from 'react';
import PropTypes from 'prop-types';

import BaseLayout from './Base';
import SEO from '../components/SEO';

const MainContentLayout = ({ children, isIndex }) => (
  <BaseLayout isIndex={isIndex}>
    <SEO />
    {children}
  </BaseLayout>
);

MainContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  isIndex: PropTypes.bool,
};

export default MainContentLayout;
