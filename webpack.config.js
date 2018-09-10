const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
     devtool: 'eval-source-map',//用户生成对照源文件，方便调试
    entry: path.resolve(__dirname, 'app/index.js'),//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
    resolve:{
        extensions:['.js','.jsx','json']
    },
    devServer: {     ///webpack-dev-server 服务配置
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 7060
    },
    module: {
        rules: [
            {test: /(\.jsx|\.js)$/,  include: [
                    path.resolve(__dirname, 'app')
                ],use: {loader: "babel-loader"}, exclude: /node_modules/},
            {
                test: /(\.css|\.less)$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })   
            } ,
            {test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, use: {loader: "url-loader?limit=5000"}},
        ]
    }   ,
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })   ,
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new ExtractTextPlugin('[name].css')

    ],
}