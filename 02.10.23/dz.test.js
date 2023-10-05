const findMax = require("./dz");

test("return the max", () => {
  expect(findMax([-10, 3, 1])).toBe(3);
});
