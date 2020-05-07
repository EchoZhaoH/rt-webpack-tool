const path = require('path');
const merge = require('webpack-merge')
const common = require('./common.js')

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },
  devtool: "source-map",
  target: 'web',
  mode: 'development',
})
