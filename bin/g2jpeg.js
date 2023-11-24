const { convert } = require("./convert.js");
const { renderImage } = require("../src/index.js");

const g2jpeg = convert("createJPEGStream", renderImage);

module.exports = { g2jpeg };
