const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname,'build')
   },
 resolve: {
   modules: [path.resolve(__dirname, 'src'), 'node_modules']
 },
   module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: {
                   loader: "babel-loader"
               }
           },
           {
               test: /\.(css|scss)/,
               use: [
               "style-loader",
               "css-loader",
               "sass-loader"
               ]
           },
           {
            test: /\.svg$/,
            loader: 'raw-loader'
          },
           {
               test: /\.(jpg|jpeg|png|gif)$/,
               loaders: ['file-loader']
           }
       ]
   },
//    externals: {
//     'Config': JSON.stringify(process.env.NODE_ENV==='production'?{
//         serverUrl: "https://quizetency.stackroute.in"
//     //    serverUrl: "https://172.23.239.120:8082"
//         //    serverUrl: "https://localhost:8082"
        
//     }:{
//       serverUrl: "https://quizetency.stackroute.in"
//     //    serverUrl: "https://172.23.239.120:8082"
//             // serverUrl: "https://localhost:8082"
//     })
//    },  
   plugins: [
   new HtmlWebpackPlugin({
       template: path.resolve(__dirname,'public','index.html')
   }),
   new CopyWebpackPlugin([
       {from:'public/images', to:'images'}
   ])
 ]
};
