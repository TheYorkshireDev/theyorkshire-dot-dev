const config = require('./config/site');

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    menuLinks: config.menuLinks,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TOKEN,
        // this option places the tracking script into the head of the DOM
        head: true,
        anonymize: true,
        // other options
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '400i', '700', '700i'],
              fontDisplay: 'swap',
            },
          ],
        },
        useMinify: true,
        usePreload: false,
        usePreconnect: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.appShortName,
        description: config.siteDescription,
        start_url: config.appStartUrl, //TODO Point to Blog
        // Color is the same as theme.colors.primary
        background_color: config.themeColor,
        theme_color: config.themeColor,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: config.siteIcon,
      },
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
  ],
};
