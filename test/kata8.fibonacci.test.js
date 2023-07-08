const { fibonacci } = require("../src");

describe("Fibonacci", () => {
  it("returns 0 for n = 1", () => {
    expect(fibonacci(1)).toEqual(0);
  });

  it("returns 1 for n = 2", () => {
    expect(fibonacci(2)).toEqual(1);
  });

  it("returns 1 for n = 3", () => {
    expect(fibonacci(3)).toEqual(1);
  });

  it("returns 2 for n = 4", () => {
    expect(fibonacci(4)).toEqual(2);
  });

  it("returns 34 for n = 10", () => {
    expect(fibonacci(10)).toEqual(34);
  });

  it("throws an error for invalid input", () => {
    expect(() => fibonacci(-1)).toThrow("Invalid input. n should be a positive integer.");
    expect(() => fibonacci(0)).toThrow("Invalid input. n should be a positive integer.");
  });
});
