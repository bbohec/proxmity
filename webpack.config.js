var webpack = require('webpack');
var path = require('path');


var SRC_DIR = path.resolve(__dirname, 'src/client');
var BUILD_DIR = path.resolve(__dirname, 'build/client');


var config = {
  entry: SRC_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'main.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;