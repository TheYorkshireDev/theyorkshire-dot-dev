const _ = require('lodash/string');

const getTagCounts = (nodesWithTags) => {
  let flattenedTags = nodesWithTags.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator.concat(currentValue.frontmatter.tags);
  },
  []);

  flattenedTags = flattenedTags.sort();

  let groupedTags = flattenedTags.reduce(function (tags, tag) {
    if (tag in tags) {
      tags[tag]++;
    } else {
      tags[tag] = 1;
    }
    return tags;
  }, []);

  var tags = Object.keys(groupedTags).map((k) => {
    return { key: k, value: groupedTags[k] };
  });

  return tags;
};

const formatTagSlug = (tag) => {
  if (tag.toLocaleLowerCase() === 'c#') {
    tag = 'c-sharp';
  }

  return _.kebabCase(tag.toLocaleLowerCase());
};

const formatPostPath = (slug) => {
  return '/blog/' + slug;
};

module.exports.getTagCounts = getTagCounts;
module.exports.formatTagSlug = formatTagSlug;
module.exports.formatPostPath = formatPostPath;
