const config = require('./config/site');

module.exports = {
  siteMetadata: {
    menuLinks: config.menuLinks,
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
  ],
};
