const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    devtool: 'eval-source-map',//用户生成对照源文件，方便调试
    entry: path.resolve(__dirname, 'app/index.js'),//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json']
    },
    devServer: {     ///webpack-dev-server 服务配置
        proxy: [{ //配置跨域
            context: ['/news', '/sn/api'],
            target: 'https://news.baidu.com',
            secure: false,     //https 请求需要配置此项
            changeOrigin: true,    //跨域请求需要配置此项
        }],

        /*  proxy: {
              // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
              // koa 代码在 ./mock 目录中，启动命令为 npm run mock
              '/news': {
                  target: 'https://news.baidu.com',
                  secure: false    ,
                  changeOrigin: true,
              }
          },*/
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 7060
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/, include: [
                    path.resolve(__dirname, 'app')
                ], use: {loader: "babel-loader"}, exclude: /node_modules/
            },
            /* {   //没有使用cssmodules的方案
                 test: /(\.css|\.less)$/, use: ExtractTextPlugin.extract({
                     fallback: 'style-loader',
                     use: [
                         'css-loader',
                         'less-loader'
                     ]
                 })
             },*/


            /*  {      //使用cssmodules的方案 而没有使用 ExtractTextPlugin
                  test: [/\.css$/, /\.less$/],

                  use: [
                      'style-loader',
                      {
                          loader: 'css-loader',
                          options: {
                              modules: true,
                              localIdentName: '[name]__[local]-[hash:base64:5]'
                          }
                      },

                      'less-loader'
                  ]
              },*/

            /*  {
                  test: [/\.css$/, /\.less$/],
                  use: ExtractTextPlugin.extract({
                      fallback: "style-loader",  // 规则提取器
                      use: [{
                          loader: "css-loader",
                          options: {
                              minimize: false,  // 是否压缩
                              modules: true,  // 是否启用 css modules 规范
                              localIdentName: '[path][name]__[local]--[hash:base64:5]',

                          },

                      }, {
                          loader: "less-loader",

                      }]
                  }),
                  exclude: /node_modules/
              },
  */

            {   // 使用MiniCssExtractPlugin处理css
                test: [/\.css$/, /\.less$/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader

                    },
                 
                    {

                        loader: "css-loader",
                        options: {
                            minimize: false,  // 是否压缩
                            modules: true,
                            camelCase: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        },

                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },


            {test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, use: {loader: "url-loader?limit=50000"}},
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            _ENV_: JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        /*  new ExtractTextPlugin("[name]-bundle-[hash].css")*/
        new MiniCssExtractPlugin({
            filename: "[name]-bundle-[hash].css"

        }),
    ],
}