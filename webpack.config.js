module.exports = {
	entry: "./src/index.tsx",
	module: {
		rules: [
			//...
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			},
		],
	},
	//...
};
