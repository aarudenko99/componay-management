/**
 * PROD WEBPACK CONFIGURATION
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[chunkhash].js',
  },

  plugins: [
    new CompressionPlugin({
      test: /\.js$|\.html$/,
      threshold: 8192,
    }),

    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
  ],
});
