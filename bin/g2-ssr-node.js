#!/usr/bin/env node
const { Command } = require("commander");
const process = require("node:process");
const { version } = require("../package");
const { g2png } = require("./g2png.js");
const { g2pdf } = require("./g2pdf.js");
const { g2jpeg } = require("./g2jpeg.js");

const program = new Command();

program
  .name("g2-ssr-node")
  .description("CLI for ssr of @antv/g2")
  .version(version);

program
  .command("g2png")
  .description("Convert a G2 spec to an PNG image")
  .option("-i, --input <filename>", "filename for the input spec")
  .option("-o, --output <filename>", "filename for the output image")
  .action((options) => g2png(options).then(() => process.exit()));

program
  .command("g2jpeg")
  .description("Convert a G2 spec to an JPEG image")
  .option("-i, --input <filename>", "filename for the input spec")
  .option("-o, --output <filename>", "filename for the output image")
  .action((options) => g2jpeg(options).then(() => process.exit()));

program
  .command("g2pdf")
  .description("Convert a G2 spec to a PDF")
  .option("-i, --input <filename>", "filename for the input spec")
  .option("-o, --output <filename>", "filename for the output pdf")
  .action((options) => g2pdf(options).then(() => process.exit()));

program.parse();
