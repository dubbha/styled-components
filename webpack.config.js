const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?|tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
};
