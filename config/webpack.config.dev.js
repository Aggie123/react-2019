const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = path.join(__dirname, '../dist');

module.exports ={
	mode:'development',
	entry: path.join(__dirname,'../src/index.js'),
	output: {
		path: publicPath,
		filename:'bundle.js'
	},
	module: {
		rules : [{
			test: /\.js$/,
			use: ['babel-loader?cacheDirectory=true'],
			include: path.join(__dirname, '../src')
		},{
			test: /\.css$/,
			use: [
			'style-loader', 
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
    })
	]

}