# @berryv/g2-ssr-node

The tool for G2 spec's SSR(Server-Side Rendering) in Node.js.

## Installing

Install via a package manager such as Yarn or NPM.

```bash
$ npm install @berryv/g2-ssr-node
```

Use CLI to convert a G2 specification file named in `bar.json` into a png file named `bar.png`.

```bash
$ g2-ssr-node g2png -i ./bar.json -o bar.png
```

In Node, use `render` to convert a G2 specification into a png file named `bar.png`.

```js
const fs = require("fs");
const { render } = require("@berry/g2-ssr-node");

const spec = {
  type: "interval",
  data: [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 },
  ],
  encode: { x: "genre", y: "sold", color: "genre" },
};

render(spec).then((canvas) => {
  const out = fs.createWriteStream("./bar.png");
  const stream = canvas.createJPEGStream();
  stream.pipe(out);
  stream.on("finish", () => console.log("Convert successfully!"));
});
```

## Development

```bash
$ npm i
$ npm link
$ npm run build
$ npm run test:png
```

## API Reference

- [CLI](#cli) - Convert spec in command line.
- [Node](#node) - Convert spec in Node.js.

### CLI

<a name="cli-g2png" href="#cli-g2png">#</a> subcommand.**g2png**

```txt
Usage: g2-ssr-node g2png [options]

Convert a G2 spec to an PNG image

Options:
  -i, --input <filename>   filename for the input spec
  -o, --output <filename>  filename for the output image
  -h, --help               display help for command
```

For example, convert a G2 specification file named in `bar.json` into a png file named `bar.png`:

```bash
$ g2-ssr-node g2png -i ./bar.json -o bar.png
```

<a name="cli-g2jpeg" href="#cli-g2jpeg">#</a> subcommand.**g2jpeg**

```txt
Usage: g2-ssr-node g2pdf [options]

Convert a G2 spec to a PDF

Options:
  -i, --input <filename>   filename for the input spec
  -o, --output <filename>  filename for the output pdf
  -h, --help               display help for command
```

For example, convert a G2 specification file named in `bar.json` into a png file named `bar.jpeg`:

```bash
$ g2-ssr-node g2jpeg -i ./bar.json -o bar.jpeg
```

<a name="cli-g2pdf" href="#cli-g2pdf">#</a> subcommand.**g2pdf**

```txt
Usage: g2-ssr-node g2jpeg [options]

Convert a G2 spec to an JPEG image

Options:
  -i, --input <filename>   filename for the input spec
  -o, --output <filename>  filename for the output image
  -h, --help               display help for command
```

For example, convert a G2 specification file named in `bar.json` into a png file named `bar.pdf`:

```bash
$ g2-ssr-node g2pdf -i ./bar.json -o bar.pdf
```

### Node

<a name="node-renderImage" href="#node-renderImage">#</a> node.**renderImage(_options_)**

Renders a G2 specification into a image canvas in [node-canvas](https://github.com/Automattic/node-canvas) resolved by a promise. Then creates a stream from the returned canvas and write into a file, supporting the following stream types:

- [canvas.createPNGStream](https://github.com/Automattic/node-canvas#canvascreatepngstream)
- [canvas.createJPEGStream](https://github.com/Automattic/node-canvas#canvascreatejpegstream)

For example, convert a G2 specification into a png file named `bar.png`.

```js
const fs = require("fs");
const { render } = require("@berry/g2-ssr-node");

const spec = {
  type: "interval",
  data: [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 },
  ],
  encode: { x: "genre", y: "sold", color: "genre" },
};

renderImage(spec).then((canvas) => {
  const out = fs.createWriteStream("./bar.png");
  const stream = canvas.createJPEGStream();
  stream.pipe(out);
  stream.on("finish", () => console.log("Convert successfully!"));
});
```

<a name="node-renderPDF" href="#node-renderPDF">#</a> node.**renderPDF(_options_)**

Renders a G2 specification into a pdf canvas in [node-canvas](https://github.com/Automattic/node-canvas) resolved by a promise. Then creates a pdf stream from the returned canvas and write into a file:

- [canvas.createPDFStream](https://github.com/Automattic/node-canvas#canvascreatepdfstream)

For example, convert a G2 specification into a png file named `bar.png`.

```js
const fs = require("fs");
const { render } = require("@berry/g2-ssr-node");

const spec = {
  type: "interval",
  data: [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 },
  ],
  encode: { x: "genre", y: "sold", color: "genre" },
};

renderPDF(spec).then((canvas) => {
  const out = fs.createWriteStream("./bar.png");
  const stream = canvas.createPDFStream();
  stream.pipe(out);
  stream.on("finish", () => console.log("Convert successfully!"));
});
```
