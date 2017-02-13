const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/app.jsx',
  output: {
    path: path.join(__dirname, '/src'),
    filename: 'bundle.js',
    publicPath: '/src/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/js')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
