const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: { path: path.resolve(__dirname, 'dist') },
  module: {
    rules: []
  },
  plugins: [
    new htmlWebpackPlugin({ template: './src/index.html'})
  ]
}