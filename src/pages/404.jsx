import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const ErrorPage = () => (
  <Layout>
    <Helmet title={'404 | Steven Cooney (TheYorkshireDev)'} />
    <h1>Woops, something went wrong.</h1>

    <p>
      This page does not exist or is no longer reachable. <br /> You can return
      to the <Link to="/">Homepage</Link>.
    </p>
  </Layout>
);

export default ErrorPage;
