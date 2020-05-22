const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/scripts/App.js', './src/styles/styles.scss']
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'test.css'
    }),
    new HTMLWebpackPlugin({
      template: './static/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}