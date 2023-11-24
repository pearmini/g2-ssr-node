const fs = require("fs");

function readJSONSync(input) {
  const data = fs.readFileSync(input, "utf-8");
  return JSON.parse(data);
}

function convert(createFormatStream, render) {
  return async ({ input, output }) => {
    console.log(`Start converting ${input} to ${output} ...`);
    const spec = await readJSONSync(input);
    const canvas = await render(spec);
    const out = fs.createWriteStream(output);
    const stream = canvas[createFormatStream]();
    stream.pipe(out);
    return new Promise((resolve, reject) => {
      out
        .on("finish", () => {
          console.log(`Convert ${input} to ${output} successfully.`);
          resolve();
        })
        .on("error", () => reject());
    });
  };
}

module.exports = { convert };
