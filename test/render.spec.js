import { describe, expect, test } from "vitest";
import { renderImage, renderPDF } from "../src/index.js";

const options = {
  type: "interval",
  data: {
    type: "fetch",
    value:
      "https://gw.alipayobjects.com/os/bmw-prod/fb9db6b7-23a5-4c23-bbef-c54a55fee580.csv",
  },
  encode: { x: "letter", y: "frequency" },
  axis: { y: { labelFormatter: ".0%" } },
};

describe("render", () => {
  test("renderImage(options) should render options to image canvas", () => {
    const node = renderImage(options);
    expect(node).toBeDefined();
  });

  test("renderPDF(options) should render options to pdf canvas", () => {
    const node = renderPDF(options);
    expect(node).toBeDefined();
  });
});
