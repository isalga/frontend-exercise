const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    output: {
      publicPath: '/'
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
        {
            test: /\.less$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
              },
              {
                loader: "less-loader"
              }
            ]
          }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]
};