import React from 'react';
import PropTypes from 'prop-types';

import BaseLayout from './Base';
import SEO from '../components/SEO';

const MainContentLayout = ({ children, title, isIndex }) => (
  <BaseLayout title={title} isIndex={isIndex}>
    <SEO />
    {children}
  </BaseLayout>
);

MainContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  title: PropTypes.string,
  isIndex: PropTypes.bool,
};

export default MainContentLayout;
