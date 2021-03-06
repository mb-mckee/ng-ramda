const webpack = require('webpack');

module.exports = {
  entry: "./ngRamda.js",
  output: {
      path: __dirname,
      filename: "ngRamda.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {warnings: false},
        output: {comments: false},
        sourceMap: true
    })
  ],
  devtool: 'source-map'
}
