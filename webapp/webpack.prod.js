const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const uiMode = (process.env.NODE_ENV || 'production');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: (process.env.NODE_ENV || 'production'),
  
})