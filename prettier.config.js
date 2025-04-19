export default {
	htmlWhitespaceSensitivity: 'ignore',
	overrides: [
		{
			files: '*.html',
			options: {
				printWidth: Infinity
			}
		},
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	],
	plugins: ['prettier-plugin-svelte'],
	quoteProps: 'consistent',
	singleQuote: true,
	trailingComma: 'none',
	useTabs: true
};
