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
    modules: [path.resolve(__dirname, '..', 'node_modules')],
    alias: {
      "@": path.resolve(__dirname, '..', 'app'),
      "@View": path.resolve(__dirname, '..', 'app/views')
    },
    enforceExtension: false,
  },
  module: {
    rules: [{
        test: /\.jsx$/,
        include: path.resolve(__dirname, '../app'),
        use: {
          loader: "babel-loader?cacheDirectory"
        }
      },
      {
        test: /\.(le|c)ss$/,
        include: path.resolve(__dirname, '..', 'app'),
        use: [
          'style-loader',
          "css-loader",
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)/,
        include: path.resolve(__dirname, '..', 'app'),
        use: [{
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: 'static/img/[name].[hash:7].[ext]'
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: path.resolve(__dirname, '..', 'app'),
        use: [{
          loader: 'url-loader',
          options: {
            limit: 20000,
            name: 'static/fonts/[name].[hash:7].[ext]',
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',// 模板来源文件(html文件)
      filename: 'index.html',// 生成的模板文件的名字
      inject: true, // 引入模板的注入位置，取值有true/false/body/head true：默认值，script标签位于html文件的body底部             body:script标签位于html文件的body底部            head:script标签位于html文件的head中            false:不插入生成的js文件，这个几乎不会用到的
      favicon: './public/favicon.ico', // 指定页面图标
      title: 'React' // 生成的HTML模板的title，如果模板中有设置title的名字，则会忽略这里的设置
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