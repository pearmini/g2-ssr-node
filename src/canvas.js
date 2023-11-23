const { createCanvas } = require("canvas");
const { Canvas } = require("../dist/g");
const { Renderer } = require("../dist/g-canvas");

function createGCanvas(width, height, dpr) {
  const canvas = createCanvas(width, height);
  const offscreenCanvas = createCanvas(1, 1);
  const renderer = new Renderer();

  // Remove html plugin to ssr.
  const htmlRendererPlugin = renderer.getPlugin("html-renderer");
  const domInteractionPlugin = renderer.getPlugin("dom-interaction");
  renderer.unregisterPlugin(htmlRendererPlugin);
  renderer.unregisterPlugin(domInteractionPlugin);

  return [
    new Canvas({
      width,
      height,
      canvas,
      renderer,
      offscreenCanvas,
      devicePixelRatio: dpr,
    }),
    canvas,
  ];
}

module.exports = { createGCanvas };
