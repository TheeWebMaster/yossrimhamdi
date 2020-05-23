const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageMinWebpackPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/scripts/App.js', './src/styles/styles.css'],
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: process.env.NODE_ENV === 'production' ? 'app.min.[contenthash].js' : 'app.[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.min.[contenthash].css',
    }),
    new HTMLWebpackPlugin({
      template: './static/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'static/images', to: 'images' }],
    }),
    new ImageMinWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV === 'development',
    }),
  ],
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false,
      }),
      new OptimizeCssAssetsWebpackPlugin(),
    ],
  },
  devServer: {
    port: 3000,
    open: 'chrome',
    writeToDisk: true,
    hot: true,
  },
};
