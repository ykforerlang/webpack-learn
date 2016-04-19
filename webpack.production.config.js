var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var webpack= require('webpack')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
    entry :{
        app:path.resolve(APP_PATH, "index.js"),
        vendors :['jquery']
    } ,

    output: {
        path : BUILD_PATH,
        filename : 'bundle.js'
    },

    plugins : [
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize:true}),
        //把入口文件里面的数组打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new HtmlwebpackPlugin({
            title : 'Hello World app'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css?sourceMap'], // 处理顺序从 右往左   ?sourceMap 显示css的代码错误
                include: APP_PATH
            },
            {
                test:/\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },
}