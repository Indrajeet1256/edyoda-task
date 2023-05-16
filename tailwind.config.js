const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Lato: ["Lato", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"danger-1": "#F77171",
				"danger-2": "#FF000",
				"primary-1": "#E040FB",
				"alert-border-from": "#DE4313",
				"alert-border-to": "#FEC163",
				"text-color": "#3C4852",
				"disabled-color": "#E7E7E7",
				"text-disabled": "#BEBEBE",
				"success-color": "#47BA68",
			},
		},
	},
	plugins: [],
};
