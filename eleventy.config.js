const webcPlugin = require('@11ty/eleventy-plugin-webc');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(webcPlugin);

	return {
		dir: {
			input: 'source',
			output: '_site',
		},
	};
};
