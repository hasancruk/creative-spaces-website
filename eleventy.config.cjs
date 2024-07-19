const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
    components: "./src/_includes/components/**/*.webc"
  });

  eleventyConfig.addPassthroughCopy({
    "public": "assets",
    "./node_modules/@hasancruk/cruk-textarea/cruk-textarea.js": "scripts/cruk-textarea.js",
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
