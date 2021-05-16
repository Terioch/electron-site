module.exports = {
	purge: ["./pages/**/*.tsx", "./styles/**/*.css"],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		backgroundColor: theme => ({
			...theme("colors"),
			google: "#4285F4",
			github: "#252525",
			facebook: "#1877F2",
			btnPrimary: "#364DEF",
			btnSecondary: "#252525",
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss-elevation")(["responsive"])],
};
