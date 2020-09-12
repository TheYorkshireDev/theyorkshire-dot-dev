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

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
