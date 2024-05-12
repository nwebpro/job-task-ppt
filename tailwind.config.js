/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#ffcc13',
				secondary: '#303790',
				'theme-color': '#e5232a',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
