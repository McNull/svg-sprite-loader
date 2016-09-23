var path = require('path');

module.exports = {
  entry: [
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve('./build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./src"
  }
};
