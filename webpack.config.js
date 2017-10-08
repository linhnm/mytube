// var path = require('path');
// const webpack = require('webpack');
// const publicPath = 'dist/build';
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: [
		'./src/index.js',
	],
	output:{
		path: __dirname,
		publicPath: '/',
		filename: "bundle.js",
	},
	module: {
	    loaders: [{
	      exclude: /node_modules/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['react', 'es2015', 'stage-1']
	      }
    	}]
  	},
	resolve: {
	   extensions: ['.js', '.jsx']   
	},
  	devServer: {
    	historyApiFallback: true,
    	contentBase: './',
    	port: 3000,
    	host: 'localhost'
  	}
}
