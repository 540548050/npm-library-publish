const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV;
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/test.js',
  devtool: isDev ? 'source-map' : 'none',
  // externals:['lodash'],
  output: {
    filename: 'busyzzLib.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'busyzzLib',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                //按需引入babel-polyfill ，文件里面不需要再手动引入，解决babel-polyfill包过大的问题
                useBuiltIns: 'usage',
              },
            ],
            'stage-0',
          ],
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve('./dist'),
    host: 'localhost',
    port: 3010,
    open: true,
    hot: true,
    compress: true,
  },
};
