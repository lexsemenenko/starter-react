const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].css'
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), './public'),
    watchContentBase: true,
    stats: 'none',
    quiet: false,
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '404.html' }]
    }
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(__dirname, 'public', '*.js'),
        path.join(__dirname, 'public', '*.css')
      ]
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});
