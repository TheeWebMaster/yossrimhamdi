module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'App.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-class-properties'],
        },
      },
    ],
  },
};
