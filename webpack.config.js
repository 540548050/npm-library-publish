const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV;
module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve('./dist'),
    host: '0.0.0.0',
    port: 3003,
    open: true,
    hot: true,
    compress: true,
  },
};
