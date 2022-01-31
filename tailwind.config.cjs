const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Wotfard', 'Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			mono: [
				'Ubuntu Mono',
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace'
			]
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
