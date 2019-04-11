##dependencies
1. react-loadable 按需加载
2. mini-css-extract-plugin 提取css文件


##建项步骤
1. 初始化npm项目
npm init -y

2. 安装webpack打包工具
npm install webpack webpack-cli -D
配置 webpack.config.dev.js
```
const path = require('path');

module.exports ={
    entry: path.join(__dirname,'../src/index.js'),
    mode:'development',
    output: {
        path: path.join (__dirname, '../dist'),
        filename:'bundle.js'
    }
}
```

3.package.json中加入webpack指定config文件命令（默认会用node_modules里webpakc的配置文件）
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack": "webpack --config ./build/webpack.config.dev.js"
  },
```


4. 安装babel转码工具
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D
配置.babelrc.js
```
module.exports = {
  presets: [
    "@babel/preset-react", 
    "@babel/preset-env"
  ],
  plugins: []
}
```
配置 webpack.config.dev.js,使用babel-loader转码js文件
```
const path = require('path');

module.exports ={
    mode:'development',
    entry: path.join(__dirname,'../src/index.js'),
    output: {
        path: path.join (__dirname, '../dist'),
        filename:'bundle.js'
    },
    module: {
        rules : [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }]
    }
}
```
更新./src/index.js,用react语法实现，webpack测试
```
let func = str => {
    document.getElementById('app').innerHTML = str
}

func('hello babel')
```

5. 安装react
npm i -S react react-dom
更新./src/index.js,用react语法实现，webpack打包测试
```
import React from 'react';
import { render } from 'react-dom';

render(
    <div>hello react</div>,
    document.getElementById('app'))
```

6. 安装react-router
npm i -S react-router react-router-dom
更新Nav.js, index.js, router.js

7.安装webpack-dev-server，启动一个本地服务器
配置webpack.config.dev.js
```
// webpack-dev-server
    devServer: {
    contentBase: publicPath, 
    compress: true,  // gzip压缩
    host: '0.0.0.0', // 允许ip访问
    hot:true, // 热更新
    historyApiFallback:true, // 解决启动后刷新404
    port: 8000 // 端口
    },
```
配置package.json
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack": "webpack --config ./config/webpack.config.dev.js",
    "start": "webpack-dev-server --config ./config/webpack.config.dev.js"
  },
```
