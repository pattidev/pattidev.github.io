import remarkFootnotes from 'remark-footnotes';

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkFootnotes],
	rehypePlugins: []
};

export default config;
