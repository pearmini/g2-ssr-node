// const fs = require("fs");

const { renderImage } = require("../src/index.js");

const { convert } = require("./convert.js");

const g2png = convert("createPNGStream", renderImage);

module.exports = { g2png };
