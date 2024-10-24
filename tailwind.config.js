/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	fontFamily :{
		value: ["Teko"]
	},
	  extend: {
		brightness: {
			60: '.60'
		}
	  },
	},
	plugins: [],
  }