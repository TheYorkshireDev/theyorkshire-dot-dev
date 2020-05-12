import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../config/site';

const SEO = () => {
  // TODO: Override these if the page is a blog post
  let title = config.siteTitle;
  let description = config.siteDescription;
  let image = config.siteBanner; // Default is the site banner
  let ogType = 'website';
  let pageImagePath = `${config.siteUrl}${image}`;
  let seoUrl = `${config.siteUrl}`;

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: title,
    },
  ];

  return (
    // TODO: Review entries for particular blog posts which should
    // override these settings. Use https://search.google.com/structured-data/testing-tool
    // and https://cards-dev.twitter.com/validator to test

    <Helmet>
      <html lang={config.siteLanguage} />
      <meta name="author" content={config.author} />
      <meta name="description" content={description} />
      <meta name="image" content={pageImagePath} />
      {/* <link name="icon" content={config.favicon} /> */}
      <meta name="apple-mobile-web-app-title" content={config.siteShortName} />
      <meta name="application-name" content={config.siteShortName} />

      {/* Schema.org  */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph  */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={pageImagePath} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={config.siteShortName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.twitterHandle} />
      <meta name="twitter:site" content={config.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageImagePath} />
    </Helmet>
  );
};

export default SEO;
