/**
 * DEV WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    filename: '[name].js',
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
    }),
  ],

  performance: {
    hints: false,
  },
});
