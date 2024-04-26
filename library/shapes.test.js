const SVG = require("./shapes");

test("should set text element to svg", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle">abc</text></svg>';
  const svg = new SVG();
  svg.setText("abc");
  expect(svg.render()).toEqual(expectedSvg);
});