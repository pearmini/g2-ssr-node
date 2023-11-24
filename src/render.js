const { createCanvas } = require("canvas");
const fetch = require("node-fetch");
const { stdlib, render: renderChart } = require("../dist/g2.js");
const { createGCanvas } = require("./canvas.js");

if (!global.fetch) {
  global.fetch = fetch;
}

function updateLight(stdlib) {
  const lib = stdlib();
  const background = (name, color) => {
    const n = `theme.${name}`;
    const Theme = lib[n];
    const theme = Theme();
    theme.view.viewFill = color;
    lib[n] = () => theme;
  };
  background("light", "white");
  background("classic", "white");
  return lib;
}

function render(type) {
  return async (options) => {
    const { width = 640, height = 480, ...rest } = options;
    const [gCanvas, canvas] = createGCanvas(width, height, type);
    const spec = { ...rest, width, height };
    const context = {
      canvas: gCanvas,
      library: updateLight(stdlib),
      createCanvas: () => createCanvas(300, 150),
    };
    await new Promise((resolve) => renderChart(spec, context, resolve));
    return canvas;
  };
}

module.exports = { render };
