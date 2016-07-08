
var webpack = require('webpack');

// 单独打包插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 多页面公共模块
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
 
module.exports = {

// 插件
    plugins: [
        new ExtractTextPlugin("[name].css"),
        //new webpack.optimize.CommonsChunkPlugin('jquery','jquery.min.js'),
    ],

// 第三方库
    externals: {

    },

// 别名映射
    resolve : {
    
    }

// 入口文件
    entry  : {
        index : './src/app.js',

    },

// 输出文件
    output :{
        path: './build',
        filename: '[name].js'
    },

// 加载器配置
    module: {        
        loaders: [
            //{test: /\.(jsx|es6)$/,  loaders: [ 'babel' ], exclude: /node_modules/, include: __dirname},
            //{test: /\.js$/,          loader: "babel"},
            
            // CSS 默认处理
            //{test: /\.css$/,        loader: 'style!css!autoprefixer' },
            //{test: /\.less$/,       loader: 'style!css!autoprefixer!less'},
            
            // CSS 单独打包
            {test: /\.css$/,        loader: ExtractTextPlugin.extract("style-loader", "css-loader")},            
            {test: /\.less$/,       loader: ExtractTextPlugin.extract("style-loader","css!autoprefixer!less")},

            {test: /\.json$/,       loader: 'json'},
            {test: /\.vue$/,        loader: 'vue'}

            //{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }, 
};