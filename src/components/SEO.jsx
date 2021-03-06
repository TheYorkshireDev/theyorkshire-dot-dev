import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import config from '../../config/site';

const SEO = ({ title, description, banner, pagePath, article, blog }) => {
  let seoTitle = title || config.siteTitle;
  let seoDescription = description || config.siteDescription;
  let defaultImage = config.siteBanner; // Default is the site banner
  let ogType = blog ? 'blog' : article ? 'article' : 'website';
  let pageImagePath = `${config.siteUrl}${banner || defaultImage}`;
  let seoUrl = `${pagePath || config.siteUrl}`;

  let schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': config.siteUrl,
      url: config.siteUrl,
      name: seoTitle,
    },
  ];

  if (article) {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        '@id': seoUrl,
        url: seoUrl,
        name: seoTitle,
        headline: seoTitle,
        image: {
          '@type': 'ImageObject',
          url: pageImagePath,
        },
        description: seoDescription,
        author: {
          '@type': 'Person',
          name: config.author,
        },
        publisher: {
          '@type': 'Organization',
          name: config.author,
          logo: {
            '@type': 'ImageObject',
            url: defaultImage,
          },
        },
        isPartOf: config.siteUrl,
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': config.siteUrl,
        },
      },
    ];
  }

  return (
    // TODO: Review entries for particular blog posts which should
    // override these settings. Use https://search.google.com/structured-data/testing-tool
    // and https://cards-dev.twitter.com/validator to test

    <Helmet>
      <html lang={config.siteLanguage} />
      <meta name="author" content={config.author} />
      <meta name="description" content={seoDescription} />
      <meta name="image" content={pageImagePath} />
      <meta name="apple-mobile-web-app-title" content={config.siteShortName} />
      <meta name="application-name" content={config.siteShortName} />

      {/* Schema.org  */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph  */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={pageImagePath} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:site_name" content={config.siteShortName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitterHandle} />
      <meta name="twitter:site" content={config.twitterHandle} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={pageImagePath} />
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  banner: PropTypes.string,
  pagePath: PropTypes.string,
  article: PropTypes.bool,
  blog: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  banner: null,
  pagePath: null,
  article: false,
  blog: false,
};
