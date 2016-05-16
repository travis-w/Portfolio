var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/entry.js',
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
  ],
  module: {
    loaders: [
      {
        test: /\.elm$/,
        loader: 'elm-webpack',
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
    ],
  },
};
