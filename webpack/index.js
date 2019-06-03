const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: '[hash].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },
  target: 'web',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
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
};
