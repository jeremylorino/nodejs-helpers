const path = require("path");
const nodeExternals = require("webpack-node-externals");
const serverConfig = {
  target: "node",
  entry: {
    index: "./src",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".d.ts", ".ts"]
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  externals: [nodeExternals()],
};

module.exports = serverConfig;
