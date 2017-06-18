var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/only-dev-server', 
    'webpack-dev-server/client?http://localhost:3000', 
    // WebpackDevServer host and port
    // "only" prevents reload on syntax errors
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js',
    publicPath: `http://localhost:3000/`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader'
      ],
      exclude: /node_modules/,
    },
     {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }
      ]
    }, 
    { 
      test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader", options: {
                sourceMap: true
            }
        }]
    }, {
      test: /\.(jpg|jpeg|png)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            limit: 8192,
          }
        }
      ],
    }]
  },
};
