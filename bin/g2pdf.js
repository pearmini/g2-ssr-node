const { convert } = require("./convert.js");
const { renderPDF } = require("../src/index.js");

const g2pdf = convert("createPDFStream", renderPDF);

module.exports = { g2pdf };
