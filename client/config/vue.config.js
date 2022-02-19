/* eslint-disable indent */
/* eslint-disable no-undef */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new CleanWebpackPlugin()]
  },
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
        .loader("pug-plain-loader")
        .end();
  }
};
