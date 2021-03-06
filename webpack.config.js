const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/build/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: 'css-loader',
            options:{
                minimize: true //css压缩
            }
          }
        })
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },

      { 
        test:/\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            
            presets: ['@babel/preset-env'],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.coffee','.js']
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 9000,
    historyApiFallback: true
  },

  plugins: [

    new CleanWebpackPlugin(['build']),

    

    new HtmlWebpackPlugin({
      title: '微v秀',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      template: 'public/index.html'
    }),

    new ExtractTextPlugin("styles.css"),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      // ( 公共chunk(commnons chunk) 的名称)
    
      //filename: "commons.js",
      // ( 公共chunk 的文件名)
    
      // minChunks: 3,
      // (模块必须被3个 入口chunk 共享)
    
      // chunks: ["pageA", "pageB"],
      // (只使用这些 入口chunk)
    })

  ]
}
