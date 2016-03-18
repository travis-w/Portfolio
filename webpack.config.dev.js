const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/js/main.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Travis Weidenbenner',
      filename: 'index.html',
      favicon: 'src/img/favicon.ico',
      template: 'src/templates/index.jade',
    }),
    new OpenBrowserPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|ico)(\?.*$|$)/,
        loader: 'url',
        query: {
          limit: '100000',
          name: '[name].[ext]',
        },
      },
      {
        test: /\.jade$/,
        loader: 'jade',
        query: {
          pretty: true,
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
};
