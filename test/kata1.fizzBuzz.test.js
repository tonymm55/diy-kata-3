const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("returns Buzz when passed a multiple of 5", () => {});
  expect(fizzBuzz(5)).toBe("Buzz");

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {});
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
  expect(fizzBuzz(90)).toBe("FizzBuzz");

  it("returns the number when it isn't a multiple of 3 or 5", () => {});
  expect(fizzBuzz(4)).toBe(4);
  expect(fizzBuzz(11)).toBe(11);
});

// test or it...accepts a string and call-back function as arguments

// // it("test description", () => {
//   expect(function(parameters).toEqual(result));
// })

// A describe block, encapsulates all the tests

// describe("A group of tests", () => {
//   test or it ("the test", () => {
//   expect(function()).matcher(expected result)
// })
// })
