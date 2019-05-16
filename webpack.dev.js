const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Terser = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[hash:5].js',
    chunkFilename: '[id].[hash:5].css',
  },
  optimization: {
    minimizer: [
      new Terser(),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:5].css',
        chunkFilename: '[id].[hash:5].css',
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  }
})
