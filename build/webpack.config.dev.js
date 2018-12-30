const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './app/main.jsx'
  },
  output: {
    path: path.resolve(__dirname, '../page'),
    filename: "[name].js",
    publicPath: '/',
    chunkFilename: "static/js/[name]-chunk.js"
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    // 范围减少 大致减少了 200ms
    modules: [path.resolve(__dirname, '..', 'node_modules')],
    alias: {
      "@": path.resolve(__dirname, '..', 'app'),
      "@View": path.resolve(__dirname, '..', 'app/views')
    },
    enforceExtension: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, '../app'),
        use: {
          loader: "babel-loader?cacheDirectory",
          options: {
            presets: ["env", "stage-0", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
            {loader: "style-loader"},
            {loader: "css-loader"},
            {
                loader: "postcss-loader",
                options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                    plugins: [
                        require('autoprefixer')("last 100 versions"), //CSS浏览器兼容
                    ]
                }
            }
        ]
      },
      {
        test: /\.less$/,
        use: [
            {
              loader: "style-loader"
            },
            {
                loader: "css-loader"
            },
            {
              loader: 'less-loader'
            }
        ]
      },
      {
          test: /\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
          use:[
              {
                  loader: 'url-loader', //是指定使用的loader和loader的配置参数
                  options:{
                      limit: 20000,  //是把小于500B的文件打成Base64的格式，写入JS
                      name: 'static/img/[name].[hash:7].[ext]'
                  }
              }
          ],
          exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader:'url-loader',
            options: {
              limit: 20000,  //是把小于500B的文件打成Base64的格式，写入JS
              name: 'static/fonts/[name].[hash:7].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
      favicon: './public/favicon.ico',
      title: 'React'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: '/',
    publicPath: '/',
    host: 'localhost',
    port: 8888,
    hot: true,
    historyApiFallback: true,
    compress: true,
    overlay: {
      warnings: false,
      errors: true
    },
    https: false,
    watchOptions: {
      poll: false
    },
    proxy: {}
  }
}