var path = require('path');

var config = {
  context: path.join(__dirname, 'src/js'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'bundle.js',
    publicPath: '/',
  },
};
module.exports = config;
