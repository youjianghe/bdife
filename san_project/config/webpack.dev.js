const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const cleanwebpackplugin = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
	entry: {
		app:'./src/index.js'
	},
	output:{
		filename:'[name].bundle.dev.js',
		path: path.resolve(__dirname,'../dev')
	},
	devtool:'inline-source-map',
	devServer:{
		contentBase:'../dev',
		hot:true
	},
	plugins:[
		new cleanwebpackplugin(['dev']),
		new htmlwebpackplugin({
			title:'IFE san'
		})
	],
	module: {
		rules: [
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.(png|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:[
					'file-loader'
				]
			},
			{
				test: /\.js$/,
				use:[
					'babel-loader'
				]
			  }
		]
	}
}