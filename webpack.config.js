const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_PATH = path.join(__dirname, "/dist");
const PUBLIC_PATH = path.join(__dirname, "/public");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const copyPlugin = new CopyWebpackPlugin([{
  from: PUBLIC_PATH,
  to: BUILD_PATH
}], { debug: true });

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
      }
    ]
  },
  plugins: [htmlPlugin, copyPlugin]
};