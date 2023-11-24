const { createCanvas } = require("canvas");
const { Canvas } = require("../dist/g");
const { Renderer } = require("../dist/g-canvas");

function createGCanvas(width, height, type) {
  const canvas = createCanvas(width, height, type);
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
      devicePixelRatio: 2,
    }),
    canvas,
  ];
}

module.exports = { createGCanvas };
