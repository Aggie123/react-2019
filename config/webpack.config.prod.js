const path = require('path');
/*html模板中自动插入打包生成的文件*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*提取css文件*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*css压缩*/
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
/*清空打包*/
const CleanWebpackPlugin = require('clean-webpack-plugin');


const publicPath = path.join(__dirname, '../dist');

module.exports ={
	mode:'production',
	devtool:'none',
	/*公共模块提取*/
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	entry: {
		app: [
			path.join(__dirname,'../src/index.js'),
		],
		/*提取公共代码*/
		vendor: ['react', 'react-dom', 'react-router-dom', /*'redux', 'react-redux'*/]
	},
	output: {
		publicPath:'/dist/',
		path: publicPath,
		filename:'[name].[hash].js',
		//提取公共代码
		chunkFilename: '[name].[chunkhash].chunk.js'
	},
	module: {
		rules : [{
			test: /\.js$/,
			use: ['babel-loader?cacheDirectory=true'],
			include: path.join(__dirname, '../src')
		},{
			test: /\.css$/,
			use: [
			// 'style-loader', 
			{loader: MiniCssExtractPlugin.loader},
			{
		    loader:'css-loader',
		    options: {
	        modules: true,
	        localIdentName: '[local]--[hash:base64:5]'
		    }
			}, 
			'postcss-loader']
		},{
			test: /\.(png|jpg|gif)$/,
			use:[{
				loader:'url-loader',
				options:{
					limit: 8192
				}
			}]
		}]
	},
	//别名
	resolve: {
    alias: {
      pages: path.join(__dirname, '../src/pages'),
      components: path.join(__dirname, '../src/components'),
      css: path.join(__dirname, '../src/css'),
      imgs: path.join(__dirname, '../src/imgs'),
      api: path.join(__dirname, '../src/api'),
      mock: path.join(__dirname, '../src/mock')
    }
	},
	plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({ // 压缩css
	    filename: "[name].[contenthash].css",
	    chunkFilename: "[id].[contenthash].chunk.css"
		}),
		new OptimizeCssAssetsPlugin(), //压缩单独提出来的css
		new CleanWebpackPlugin(), // 每次打包前清空

	],

}