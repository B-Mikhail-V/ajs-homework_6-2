const path = require('path');
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           MiniCSSExtractPlugin.loader,
//           'css-loader',
//         ],
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCSSExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: './index.html',
//     }),

//   ],

};
