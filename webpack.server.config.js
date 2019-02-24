const { resolve, join } = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    server: './server/server.ts',
    prerenderer: './server/prerenderer.ts'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  target: 'node',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/, loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      join(__dirname, 'src'),
      {}
    )
  ]
}
