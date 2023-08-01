/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: 'rgb(123, 31, 162)',
				violet: 'rgb(103, 58, 183)',
				pink: 'rgb(244, 143, 177)',
				lightGrey: 'rgb(227, 227, 227)',
			},
		},
	},
	plugins: [],
};
