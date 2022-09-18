const config = {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				abel: ['Abel', 'sans-serif'],
				'jetbrains-mono': ['JetBrains Mono', 'monospace']
			}
		}
	},

	plugins: []
};

module.exports = config;
