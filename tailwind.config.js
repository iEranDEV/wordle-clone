/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'main': ['Kaushan Script']
			},
			rotate: {
				'360': '360deg',
			},
			keyframes: {
				wiggle: {
				  '0%': { transform: 'translate(0,4px)' },
				  '50%': { transform: 'translate(0,-4px)' },
				  '100%': { transform: 'translate(0,0)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s both',
			}
		},
	},
	plugins: [],
}
