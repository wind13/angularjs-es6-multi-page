'use strict';

// const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // new webpack.HotModuleReplacementPlugin(),
  mode: 'development',
  devtool: 'inline-source-map',
  // watch: true,
  // devServer: {
  //   contentBase: path.resolve(__dirname, 'app'),
  //   outputPath: path.resolve(__dirname, 'app/web/modern'),
  //   // compress: true,
  //   port: 8000
  // },

  optimization: {
    splitChunks: {
      minSize: 30000,
    },
  },
});