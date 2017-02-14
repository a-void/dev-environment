var path = require('path');
var webpack = require('webpack');

var APP_PATH = __dirname
var BUILD_PATH = 'build'
var PUBLIC_PATH = '/'

module.exports = {
  debug: !!process.env.NODE_ENV === 'production',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
  entry: './src/app.js',
  output: {
    path: path.join(APP_PATH, BUILD_PATH),
    publicPath: PUBLIC_PATH,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.json$/,
        loaders: ['json']
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.DedupePlugin(0),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
