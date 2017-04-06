let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
      app: './lib/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'lib')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
	 test: /\.json$/,
        loader: 'json-loader'
      },

    ]
  },
  resolve: {
    modules:["node_modules" ,path.resolve('./lib')],
    extensions: ['.js']
  }
};
