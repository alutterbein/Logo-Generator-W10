const SVG = require("./shapes");

test("should set text element to svg", () => {
  const expectedSvg =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle">abc</text></svg>`;
  const svg = new SVG();
  svg.setText("abc");
  expect(svg.render()).toEqual(expectedSvg);
});

test("should set shape element to triangle", () => {
  
const expextedSvg =
  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,182 56,182" fill="undefined" /></svg>`;
  const svg = new SVG();
  svg.setShape("triangle");
  expect(svg.render()).toEqual(expextedSvg);
});