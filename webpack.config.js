// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const config = {
  entry: "./src/static/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
  }
};

module.exports = config;
