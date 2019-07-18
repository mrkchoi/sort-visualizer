// const path = require('path');

// module.exports = {
//   context: __dirname,
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   resolve: {
//     extensions: ['.js']
//   },
//   module: {
//     // configuration regarding modules
//     rules: [
//       // rules for modules (configure loaders, parser options, etc.)
//       {
//         test: /\.js?$/,
//         include: [
//           path.resolve(__dirname, "src")
//         ],
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env"]
//         },
//         // options for the loader
//       },
//     ]
//   },
//   devtool: 'inline-source-map'
// };

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
    }, {
      test: /\.s?css$/, // This will match either .scss or .css
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  watch: true
};