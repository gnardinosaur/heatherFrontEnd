const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader" 
        }
      },
      { 
        test: /\.s[ac]ss$/i, 
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader'
        ] 
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
