import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import MainContentLayout from '../layouts/Main';

const HomePageLayout = ({ children }) => (
  <MainContentLayout isIndex={true}>
    <Helmet title={'Steven Cooney (TheYorkshireDev) | Software Developer'} />
    {children}
  </MainContentLayout>
);

HomePageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

export default HomePageLayout;
