const modules = require("./modules");

test("Starjun * 3", () => {
  expect(modules.repeatString("Starjun", 3)).toBe("StarjunStarjunStarjun");
});

test("Starjun", () => {
  expect(modules.reverseString("Starjun")).toBe("nujratS");
});


test("[1,2,3,4]", () => {
  expect(modules.sumAll([1, 2, 3, 4])).toBe(10);
});






