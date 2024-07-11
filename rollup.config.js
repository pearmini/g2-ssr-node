const resolve = require("@rollup/plugin-node-resolve");
const cjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const terser = require("@rollup/plugin-terser");

module.exports = [
  {
    input: "antv/index.js",
    output: {
      file: "dist/antv.js",
      format: "cjs",
    },
    plugins: [resolve(), cjs(), json(), terser()],
  },
];
