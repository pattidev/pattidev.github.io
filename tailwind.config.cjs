module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
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
			},
			keyframes: {
				blob: {
					'0%, 100%': {
						transform: 'rotate(0turn)'
					},
					'50%': {
						transform: 'rotate(1turn)'
					}
				}
			},
			animation: {
				blobspin: 'blob 2s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite'
			}
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				fantinel: {
					primary: '#0ca4a5' /* Primary color */,
					'primary-focus': '#0EC5C6' /* Primary color - focused */,
					'primary-content': '#ffffff' /* Foreground content color to use on primary color */,

					secondary: '#7058f5' /* Secondary color */,
					'secondary-focus': '#866AFF' /* Secondary color - focused */,
					'secondary-content': '#ffffff' /* Foreground content color to use on secondary color */,

					accent: '#37cdbe' /* Accent color */,
					'accent-focus': '#e3ffff' /* Accent color - focused */,
					'accent-content': 'ff3ffff' /* Foreground content color to use on accent color */,

					neutral: '#3d4451' /* Neutral color */,
					'neutral-focus': '#2a2e37' /* Neutral color - focused */,
					'neutral-content': '#ffffff' /* Foreground content color to use on neutral color */,

					'base-100': '#f4f8fb' /* Base color of page, used for blank backgrounds */,
					'base-200': '#f9fafb' /* Base color, a little darker */,
					'base-300': '#d1d5db' /* Base color, even more darker */,
					'base-content': '#1c1e26	' /* Foreground content color to use on base color */,

					info: '#2883f4' /* Info */,
					success: '#009f70' /* Success */,
					warning: '#c87820' /* Warning */,
					error: '#f95256' /* Error */,
					'--border-color': 'var(--b3)',
					'--rounded-box': '1rem',
					'--rounded-btn': '1.9rem',
					'--rounded-badge': '1.9rem',
					'--animation-btn': '0.25s',
					'--animation-input': '.2s',
					'--btn-text-case': 'uppercase',
					'--btn-focus-scale': '0.95',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px',
					'--tab-border': '2px',
					'--tab-radius': '.5rem'
				},
				default: {
					primary: '#0ca4a5' /* Primary color */,
					'primary-focus': '#0EC5C6' /* Primary color - focused */,
					'primary-content': '#ffffff' /* Foreground content color to use on primary color */,

					secondary: '#0185f3' /*  Secondary color */,
					'secondary-focus': '#65c9ff' /* Secondary color - focused */,
					'secondary-content': '#ffffff' /* Foreground content color to use on secondary color */,

					accent: '#37cdbe' /* Accent color */,
					'accent-focus': '#e3ffff' /* Accent color - focused */,
					'accent-content': 'ff3ffff' /* Foreground content color to use on accent color */,

					neutral: '#3d4451' /* Neutral color */,
					'neutral-focus': '#2a2e37' /* Neutral color - focused */,
					'neutral-content': '#ffffff' /* Foreground content color to use on neutral color */,

					'base-100': '#f4f8fb' /* Base color of page, used for blank backgrounds */,
					'base-200': '#f9fafb' /* Base color, a little darker */,
					'base-300': '#d1d5db' /* Base color, even more darker */,
					'base-content': '#25557C' /* Foreground content color to use on base color */,

					info: '#2883f4' /* Info */,
					success: '#009f70' /* Success */,
					warning: '#c87820' /* Warning */,
					error: '#f95256' /* Error */,
					'--border-color': 'var(--b3)',
					'--rounded-box': '1rem',
					'--rounded-btn': '1.9rem',
					'--rounded-badge': '1.9rem',
					'--animation-btn': '0.25s',
					'--animation-input': '.2s',
					'--btn-text-case': 'uppercase',
					'--btn-focus-scale': '0.95',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px',
					'--tab-border': '2px',
					'--tab-radius': '.5rem'
				}
			},
			'dark',
			'light',
			'cupcake',
			'fantasy'
		]
	}
};
