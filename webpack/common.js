const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: '[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, '../src/')
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
    symlinks: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Welcome your app',
      template: path.resolve(__dirname, '../index.html'),
      filename: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
  ],
}