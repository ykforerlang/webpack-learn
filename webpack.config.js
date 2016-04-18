var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
    entry : APP_PATH,

    output: {
        path : BUILD_PATH,
        filename : 'bundle.js'
    },

    plugins : [
        new HtmlwebpackPlugin({
            title : 'Hello World app'
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery" : "jquery"
        })
    ],

    devServer : {
        historyAipFallback :true,
        hot: true,
        inline:true,
        progress : true,
    },

    devtool : 'eval-source-map',

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
                loaders: ['style', 'css'], // 处理顺序从 右往左
                include: APP_PATH
            },
            {
                test:/\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },

    jshint: {
        "esnext" :true
    }
}