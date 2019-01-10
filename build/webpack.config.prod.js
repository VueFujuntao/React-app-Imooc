const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const uglify = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './app/main.jsx'
  },
  output: {
    path: path.resolve(__dirname, '../page'),
    filename: "[name].js",
    publicPath: '/',
    chunkFilename: "static/js/[name]-chunk.js"
  },
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
        include: path.resolve(__dirname, '..', 'app'),
        use: {
          loader: "babel-loader?cacheDirectory"
        }
      },
      {
        test: /\.(le|c)ss$/,
        include: path.resolve(__dirname, '..', 'app'),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)/,
        include: path.resolve(__dirname, '..', 'app/static/img'),
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
        include: path.resolve(__dirname, '..', 'app/static/fonts'),
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
  optimization: {
    nodeEnv: 'production',
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
     chunks: 'all'
    },
    minimizer: [
      new uglify({
        uglifyOptions: {
          compress: {
            warnings: false
          }
        },
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
      favicon: './public/favicon.ico',
      title: 'React',
      minify: {
        caseSensitive:false,// 是否大小写敏感
        removeComments: true,// 去注释
        collapseWhitespace: true,// 是否去除空格
        removeEmptyAttributes: true, // 去除空属性
        removeTagWhitespace: true,
        removeAttributeQuotes: true// 去掉属性引用
      },
      hash: true // 是否生成hash添加在引入文件地址的末尾，这个可以避免缓存带来的麻烦
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[hash].css",
    }),
    new CleanWebpackPlugin(['*'], {
      root: path.resolve(__dirname, '..', 'page'),
      verbose: false,
      dry: false
    })
  ],
  performance: {
    hints: 'warning',
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },
  devtool: 'cheap-module-source-map'
}