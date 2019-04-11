const path = require('path');
//html模板中自动插入打包生成的文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//提取css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const publicPath = path.join(__dirname, '../dist');

module.exports ={
	mode:'development',
	entry: {
		app: [
			path.join(__dirname,'../src/index.js'),
		],
		//提取公共代码
		vendor: ['react', 'react-dom', 'react-router-dom', /*'redux', 'react-redux'*/]
	},
	output: {
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
	// webpack-dev-server
	devServer: {
    contentBase: publicPath, 
    compress: true,  // gzip压缩
    host: '0.0.0.0', // 允许ip访问
    hot:true, // 热更新
    historyApiFallback:true, // 解决启动后刷新404
    port: 8000 // 端口
	},
	//优化展示，方便断点调试
	devtool: 'inline-source-map',
	//别名
	resolve: {
    alias: {
      pages: path.join(__dirname, '../src/pages'),
      components: path.join(__dirname, '../src/components'),
      css: path.join(__dirname, '../src/css'),
      imgs: path.join(__dirname, '../src/imgs')
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
		})
	],

}