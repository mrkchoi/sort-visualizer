const path = require('path');

module.exports = {
  entry: './src/index.js',    // We wants our entry point to this path
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js?$/,  // This will match either .js or .jsx
      exclude: /node_modules/,
      options: {
        presets: ["@babel/preset-env"]
      },
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  watch: true
};
