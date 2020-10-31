import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import MainContentLayout from '../layouts/Main';
import UpperH1 from '../components/UpperH1';

const ErrorPage = () => (
  <MainContentLayout>
    <Helmet title={'404 | Steven Cooney (TheYorkshireDev)'} />
    <UpperH1>Woops, something went wrong.</UpperH1>

    <p>
      This page does not exist or is no longer reachable. <br /> You can return
      to the <Link to="/">Homepage</Link>.
    </p>
  </MainContentLayout>
);

export default ErrorPage;
