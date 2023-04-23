const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: { path: path.resolve(__dirname, 'dist') },
  module: {
    rules: [],
    loaders: { test: /\.css$/, loader: 'style-loader|css-loader' }
  },
  plugins: [
    new htmlWebpackPlugin({ template: './src/index.html'}),
    new miniCssExtractPlugin({ })
  ]
}