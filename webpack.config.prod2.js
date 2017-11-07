const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

let config = _.merge({}, baseConfig);
config = _.merge(config, {
  name: 'production',

  watchOptions: {
    debug: true,
    displayErrorDetails: true,
    outputPathInfo: true
  },

  entry: [
    path.join(__dirname, 'src', 'entry.js'),
  ],

  devtool: 'cheap-module-eval-source-map',

  devServer: {
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    // ==== Allows the creation of global constants which can be configured at compile time
  ]
});

module.exports = config;