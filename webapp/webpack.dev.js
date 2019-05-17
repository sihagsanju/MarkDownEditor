const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const uiMode = (process.env.NODE_ENV || 'development');
module.exports = merge(common, {
  mode: (process.env.NODE_ENV || 'development'),
  devServer: {
    proxy: {
      "/api": {
        target: "http://172.23.239.65:8082"
      }
    },
    
  }
})