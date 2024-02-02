import webcPlugin from '@11ty/eleventy-plugin-webc';

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(webcPlugin);

	return {
		dir: {
			input: 'source',
			output: '_site',
		},
	};
}
