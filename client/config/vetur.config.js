/* eslint-disable no-undef */
/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    "../src",
    {
      root: "./src",
      package: "./package.json",
      tsconfig: "./tsconfig.json",
    }
  ]
};