/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				navbar: ['SFProTextThin'],
				heading: ['SFProTextBold'],
				paragraph: ['SFProTextRegular'],
				link: ['SFProDisplayThin'],
				bankgothic: ['BankGothicBold'],
				couriernew: ['CourierNew']
			}
		}
	},
	daisyui: {
		themes: ['light']
	},
	plugins: [
		require('daisyui'),
		require('flowbite/plugin'),
		require('@tailwindcss/aspect-ratio')
	]
};
