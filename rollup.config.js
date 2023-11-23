const resolve = require("@rollup/plugin-node-resolve");
const cjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");

const common = {
  plugins: [resolve(), cjs(), json()],
  external: ["@antv/g"],
};

module.exports = [
  {
    input: "antv/g2.js",
    output: {
      dir: "dist",
      name: "g2.cjs.js",
      format: "cjs",
    },
    ...common,
  },
  {
    input: "antv/g.js",
    output: {
      dir: "dist",
      name: "g.cjs.js",
      format: "cjs",
    },
    ...common,
  },
  {
    input: "antv/g-canvas.js",
    output: {
      dir: "dist",
      name: "g-canvas.cjs.js",
      format: "cjs",
    },
    ...common,
  },
];
