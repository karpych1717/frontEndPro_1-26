const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: { path: path.resolve(__dirname, 'dist') },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({ template: './src/index.html'}),
    new miniCssExtractPlugin({ filename: 'index.css' })
  ]
}