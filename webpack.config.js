const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    proxy: {
      '/todoData': { target: 'http://localhost:3000', secure: false }
    }
  },
  module: {
    loaders: [
      {
        test: /jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}