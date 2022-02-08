// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const config = {
  entry: {
    bundle: "./src/static/main.ts",
    login: "./src/static/login.ts",
    goods: "./src/static/render.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/js")
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
