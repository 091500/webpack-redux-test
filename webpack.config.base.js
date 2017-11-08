const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.jsx'
  ],

  context: path.resolve(__dirname),

  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: ''
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src/', 'node_modules']
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

  devServer: {
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
