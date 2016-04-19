var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var webpack= require('webpack')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')
var TEM_PATH = path.resolve(ROOT_PATH, 'templates')

module.exports = {
    entry : {
        app: path.resolve(APP_PATH, 'index.js'),
        mobile: path.resolve(APP_PATH, 'mobile.js'),
        vendors: ['jquery']
    },

    output: {
        path : BUILD_PATH,
        filename : '[name].[hash].js'
    },

    plugins : [
        new HtmlwebpackPlugin({
            title : 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename:'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title : 'Hello mobile app',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename:'mobile.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],

    devServer : {
        historyAipFallback :true,
        hot: true,
        inline:true,
        progress : true,
    },

    devtool : 'eval-source-map', // 可以使用 浏览器的f12 的查看错误

    module: {
        preLoaders:[
            {
                test:/\.jsx?$/,
                include:APP_PATH,
                loader: 'jshint-loader'
            }
        ],

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

    jshint: {
        "esversion" :6,
        "asi": true,// 关于分号是否警告的配置
    }
}