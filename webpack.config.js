const path = require('path');
const nodeExternals = require('webpack-node-externals');
console.log(path.resolve(__dirname, 'dist/'));
const serverConfig = {
  target: 'node',
  entry: {
    index: './src',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'commonjs2',
    // pathinfo: true,
  },
  resolve: {
    extensions: ['.d.ts', '.ts']
  },
  // devtool: 'source-map',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  externals: [nodeExternals()],
};

module.exports = serverConfig;
