const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LessLists = require('less-plugin-lists');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'app.js')
  },

  output: {
    path: path.join(__dirname, './public')
  },

  module: {
    rules: [
      {
        test: /\.((png)|(jpg)|(jpeg)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/[hash].[ext]'
      },
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      },
      {
        test: /\.(le|c)ss$/, // For what files are the loaders
        exclude: /node_modules/,
        use: [
          // Last is executed first
          {
            // What Loaders to use from bottom to top
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: MiniCssExtractPlugin.loader // Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS
          },
          {
            loader: 'css-loader' // Second, translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              plugins: [new LessLists()],
              strictMath: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/fonts/',
        to: 'fonts/',
        flatten: true
      },
      {
        from: './src/images/',
        to: 'images/',
        flatten: true
      }
    ]),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html'
    })
  ]
};
