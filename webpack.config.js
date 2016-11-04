var webpack = require('webpack');

module.exports = {
  debug : true,
  devtool : 'eval',
  entry: './src/app/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
