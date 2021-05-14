module.exports = {
	purge: ["./pages/**/*.tsx", "./styles/**/*.css"],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("tailwindcss-elevation")(["responsive"], {
			color: "#fff",
			opacityBoost: "0.4",
		}),
	],
};
