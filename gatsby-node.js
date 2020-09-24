const path = require('path');

exports.onCreatePage = ({ page, actions }) => {
  if (
    process.env.EXCLUDE_PATHS === undefined ||
    process.env.EXCLUDE_PATHS === ''
  ) {
    return;
  }

  var pathsToIgnore = process.env.EXCLUDE_PATHS.split(',');

  if (pathsToIgnore.indexOf(page.path) >= 0) {
    const { deletePage } = actions;
    deletePage(page);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogLists = path.resolve('src/templates/blog-list.jsx');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          return reject(result.errors);
        }

        // Create blog-list pages
        const posts = result.data.allMarkdownRemark.edges;
        const postsPerPage = 6;
        const numPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? '/blog' : `/blog/${i + 1}`,
            component: blogLists,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
