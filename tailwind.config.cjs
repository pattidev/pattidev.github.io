module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: {
				sm: '1rem',
				lg: '2rem',
				xl: '3rem'
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1080px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Wotfard', 'Graphik', 'sans-serif'],
				mono: ['Ubuntu Mono', 'ui-monospace']
			}
		}
	},

	plugins: []
};
