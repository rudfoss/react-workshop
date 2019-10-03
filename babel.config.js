module.exports = {
	presets: [
		// Adds dynamic imports of the necessary polyfills (see .browserslistrc for spec)
		["@babel/preset-env", {
			useBuiltIns: "usage",
			corejs: { version: 3, proposals: true }
		}],
		"@babel/preset-react"
	],
	plugins: [
		["@babel/plugin-proposal-class-properties", { loose: true }],
		"@babel/plugin-transform-runtime"// , // Adds support for async/await in older browsers
	]
}