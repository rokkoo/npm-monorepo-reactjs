const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'ui.bundle.min.js',
    path: path.resolve(__dirname, 'build'),
    // Below two important lines!
    library: 'alfonso',
    libraryTarget: 'umd',
  },
};
