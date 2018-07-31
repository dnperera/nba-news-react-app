const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HTMLWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true
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
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
