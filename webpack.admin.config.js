const path = require('path');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
	mode: 'production',
	cache: true,
	devtool: 'source-map',
	entry: './admin/js/integrations/index.js',
	output: {
		path: path.join(__dirname, '/dist/js/admin'),
		publicPath: `/wp-content/themes/${path.basename(__dirname)}/dist/js/admin/`,
		filename: 'integrations.min.js',
		chunkFilename: '[name].bundle.js'
	},
	plugins: [
		// new HardSourceWebpackPlugin()
	],
	resolve: {
		modules: ['node_modules']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules\/(?!(dom7|swiper|imagebuddy)\/).*/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			}
		]
	}
};
