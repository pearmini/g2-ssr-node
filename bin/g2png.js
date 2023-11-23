const fs = require("fs");
const { render } = require("../src/index.js");

function readJSONSync(input) {
  const data = fs.readFileSync(input, "utf-8");
  return JSON.parse(data);
}

async function g2png({ input, output }) {
  const spec = await readJSONSync(input);
  const canvas = await render(spec);
  const out = fs.createWriteStream(output);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  return new Promise((resolve, reject) => {
    out
      .on("finish", () => {
        console.log(`Convert ${input} to ${output} successfully.`);
        resolve();
      })
      .on("error", () => reject());
  });
}

module.exports = { g2png };
