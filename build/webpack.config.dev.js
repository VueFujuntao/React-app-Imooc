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