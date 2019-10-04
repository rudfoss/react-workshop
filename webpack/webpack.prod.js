const path = require("path")
const autoprefixer = require("autoprefixer")
const HtmlPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

const CACHE = false // Control caching for all rules/plugins and optimizers

const ROOT_FOLDER = path.resolve(__dirname, "../")
const SRC_FOLDER = path.resolve(ROOT_FOLDER, "src")
const INDEX_JS_FILE = path.resolve(SRC_FOLDER, "index.js")
const INDEX_HTML_FILE = path.resolve(SRC_FOLDER, "index.html")
const DIST_FOLDER = path.resolve(ROOT_FOLDER, "dist")

module.exports = {
	mode: "production",
	devtool: "source-map",
	entry: [
		// https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import#working-with-webpack-and-babel-preset-env
		"core-js/modules/es.promise",
		"core-js/modules/es.array.iterator",

		// IE 10 polyfills required by React.
		"core-js/es/map",
		"core-js/es/set",

		INDEX_JS_FILE
	],
	optimization: {
		namedChunks: true,
		runtimeChunk: "multiple",
		minimize: true,
		minimizer: [
			new TerserPlugin({
				sourceMap: true,
				cache: CACHE
			}),
			new OptimizeCssAssetsPlugin({})
		],
		splitChunks: {
			chunks: "all"
		}
	},
	output: {
		filename: "js/[name]-[contenthash].js",
		chunkFilename: "js/[name]-[contenthash].js",
		path: DIST_FOLDER
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			features: path.resolve(SRC_FOLDER, "features"),
			ui: path.resolve(SRC_FOLDER, "features/ui"),
			ducks: path.resolve(SRC_FOLDER, "ducks")
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
							presets: [
								// Adds dynamic imports of the necessary polyfills (see .browserslistrc for spec)
								["@babel/preset-env", {
									useBuiltIns: "usage",
									corejs: { version: 3, proposals: true },
									debug: true
								}],
								"@babel/preset-react"
							],
							plugins: [
								["@babel/plugin-proposal-class-properties", { loose: true }],
								"@babel/plugin-transform-runtime"// , // Adds support for async/await in older browsers
							]
						}
					}
				]
			},
			{ // Parses non-modular scss files
				test: /\.global\.s?css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: [
								autoprefixer
							]
						}
					},
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
					{
						loader: MiniCSSExtractPlugin.loader
					},
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
			minify: {
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				keepClosingSlash: true,
				removeRedundantAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		}),
		new MiniCSSExtractPlugin({
			filename: "styles/[name]-[contenthash].css",
			chunkFilename: "styles/[name]-[contenthash].css"
		})
	]
}