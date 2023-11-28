const resolve = require("@rollup/plugin-node-resolve");
const cjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const terser = require("@rollup/plugin-terser");

const common = {
  plugins: [resolve(), cjs(), json(), terser()],
  external: ["@antv/g"],
};

module.exports = [
  {
    input: "antv/g2.js",
    output: {
      file: "dist/g2.js",
      format: "cjs",
    },
    ...common,
  },
  {
    input: "antv/g.js",
    output: {
      file: "dist/g2.js",
      format: "cjs",
    },
    ...common,
  },
  {
    input: "antv/g-canvas.js",
    output: {
      file: "dist/g2-canvas.js",
      format: "cjs",
    },
    ...common,
  },
];
