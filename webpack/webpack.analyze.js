const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const prodConfig = require("./webpack.prod")

module.exports = {
	...prodConfig,
	plugins: [
		...prodConfig.plugins,
		new BundleAnalyzerPlugin()
	]
}