process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.prod');
const rimraf = require('rimraf');
const ora = require('ora');

const loading = ora('building for React Production...');

loading.start();
rimraf(path.join(path.resolve(__dirname, '../page'), 'static'), err => {
  webpack(webpackConfig, (err, stats) => {
    loading.stop();
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');
  })
})
