'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
// const webpack = require('webpack');
// const pkg = require('./package.json');

module.exports = {
  entry: {
    // vendor: Object.keys(pkg.dependencies),
    // util: './src/common/util.js',
    'home': './src/home/index.js',
    'demo': './src/demo/index.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  externals: {
    ramda: {
      commonjs: 'ramda',
      commonjs2: 'ramda',
      amd: 'ramda',
      root: 'R'
    },
    rxjs: {
      commonjs: 'rxjs',
      commonjs2: 'rxjs',
      amd: 'rxjs',
      root: 'rxjs'
    },
    angular: {
      commonjs: 'angular',
      commonjs2: 'angular',
      amd: 'angular',
      root: 'angular'
    }
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts',]
  },
  output: {
    filename: '[name]/[name].min.js',
    // publicPath: process.env.ASSET_PATH || '../lib',
    path: path.resolve(__dirname, 'app/pages')
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.p?css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  browsers: 'last 2 versions',
                  stage: 0
                }/* pluginOptions */)
              ]
            }
          }
        ]
      },
      // eslint
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules|asserts/,
        loader: "eslint-loader",
      },
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules|asserts/,
        loader: "babel-loader"
      },
      // html
      {
        test: /\.html$/,
        loader: "raw-loader",
        exclude: path.resolve("./src/index.html")
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['app/pages']),
    // new webpack.ProvidePlugin({
    //     R: 'ramda'
    // }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      // chunks: ['vendor', 'util', 'home'],
      // chunks: ['util', 'home'],
      chunks: ['home'],
      filename: 'home/index.html' //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      chunks: ['demo'],
      filename: 'demo/index.html' //relative to root of the application
    }),
  ]
  //...
}