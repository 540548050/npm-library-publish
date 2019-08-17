const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // externals:['lodash'],
  output: {
    filename: 'busyzzLib.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'busyzzLib',
    libraryTarget: 'umd',
  },
};
