const path = require('path');
const { formatPostPath, formatTagSlug } = require(path.resolve('src/util/utils'));

const excludePage = (path) => {
  if (
    process.env.EXCLUDE_PATHS === undefined ||
    process.env.EXCLUDE_PATHS === ''
  ) {
    return false;
  }

  var pathsToIgnore = process.env.EXCLUDE_PATHS.split(',');

  if (pathsToIgnore.indexOf(path) >= 0) {
    return true;
  }
};

exports.onCreatePage = ({ page, actions }) => {
  if (excludePage(page.path)) {
    const { deletePage } = actions;
    deletePage(page);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogLists = path.resolve('src/templates/blog-list.jsx');
    const postTemplate = path.resolve('src/templates/blog-post.jsx');
    const tagPosts = path.resolve('src/templates/tag.jsx');

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
                    slug
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

        const posts = result.data.allMarkdownRemark.edges;

        // Organise posts by tags
        const postsByTag = {};

        posts.forEach(({ node }) => {
          if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach((tag) => {
              if (!postsByTag[tag]) {
                postsByTag[tag] = [];
              }

              postsByTag[tag].push(node);
            });
          }
        });

        const tags = Object.keys(postsByTag);

        // Create blog-list pages
        const postsPerPage = 6;
        const numPages = Math.ceil(posts.length / postsPerPage);

        if (!excludePage('/blog/')) {
          Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
              path: i === 0 ? '/blog/' : `/blog/${i + 1}`,
              component: blogLists,
              context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
              },
            });
          });
        }

        // Create individual tag pages
        if (!excludePage('/tags/')) {
          tags.forEach((tagName) => {
            const posts = postsByTag[tagName];
            const postsPerPage = 6;
            const numPages = Math.ceil(posts.length / postsPerPage);

            Array.from({ length: numPages }).forEach((_, i) => {
              createPage({
                path:
                  i === 0
                    ? `/tags/${formatTagSlug(tagName)}`
                    : `/tags/${formatTagSlug(tagName)}/${i + 1}`,
                component: tagPosts,
                context: {
                  tag: tagName,
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  numPages,
                  currentPage: i + 1,
                },
              });
            });
          });
        }

        // Create blog post pages
        if (!excludePage('/blog/')) {
          posts.forEach(({ node }, index) => {
            const slug = node.frontmatter.slug;
            const path = formatPostPath(slug);
            const prev = index === 0 ? null : posts[index - 1].node;
            const next =
              index === posts.length - 1 ? null : posts[index + 1].node;
            createPage({
              path,
              component: postTemplate,
              context: {
                postSlug: slug,
                prev,
                next,
              },
            });
          });
        }
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
