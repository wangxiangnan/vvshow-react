const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },

      { 
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },

  resolve: {
    extensions: ['.coffee','.js']
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },

  plugins: [

    new CleanWebpackPlugin(['build']),

    new HtmlWebpackPlugin({
      title: '微v秀',
      template: 'public/index.html'
    }),

    new ExtractTextPlugin("styles.css"),

  ]
}