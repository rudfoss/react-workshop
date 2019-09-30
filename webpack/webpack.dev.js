const path = require("path")
const autoprefixer = require("autoprefixer")
const HtmlHarddiskPlugin = require("html-webpack-harddisk-plugin")
const HtmlPlugin = require("html-webpack-plugin")

const CACHE = true // Control caching for all rules/plugins and optimizers

const ROOT_FOLDER = path.resolve(__dirname, "../")
const SRC_FOLDER = path.resolve(ROOT_FOLDER, "src")
const INDEX_JS_FILE = path.resolve(SRC_FOLDER, "index.js")
const INDEX_HTML_FILE = path.resolve(SRC_FOLDER, "index.html")
const DIST_FOLDER = path.resolve(ROOT_FOLDER, "dist-dev")

module.exports = {
	mode: "development",
	devtool: "source-map",
	devServer: {
		historyApiFallback: true,
		hot: true,
		https: true,
		overlay: true,
		inline: true,
		writeToDisk: true,
		port: 3010,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},
	entry: [
		// https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import#working-with-webpack-and-babel-preset-env
		"core-js/modules/es.promise",
		"core-js/modules/es.array.iterator",

		// IE 10 polyfills required by react-dom. https://reactjs.org/docs/javascript-environment-requirements.html
		"core-js/es/map",
		"core-js/es/set",

		INDEX_JS_FILE
	],
	output: {
		filename: "js/[name]-[hash].js",
		chunkFilename: "js/[name]-[hash].js",
		publicPath: "https://localhost:3010/",
		path: DIST_FOLDER
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"react-dom": "@hot-loader/react-dom" // https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom
		}
	},
	module: {
		rules: [
			{ // https://github.com/gaearon/react-hot-loader#typescript
				exclude: /node_modules/,
				test: /\.(t|j)sx?$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							cacheDirectory: CACHE,
							babelrc: false,
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
								"@babel/plugin-transform-runtime", // Adds support for async/await in older browsers
								"react-hot-loader/babel"
							]
						}
					}
				]
			},
			{ // Parses non-modular scss files
				test: /\.global\.s?css$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								outputStyle: "compressed"
							}
						}
					}
				]
			},
			{ // Parses modular scss files
				exclude: /\.global\.s?css$/,
				test: /\.s?css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 2, // How many loaders should be applied to imported resources before this one
							modules: true
						}
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: [
								autoprefixer
							]
						}
					},
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								outputStyle: "compressed"
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: INDEX_HTML_FILE,
			alwaysWriteToDisk: true,
			minify: false
		}),
		new HtmlHarddiskPlugin()
	]
}