const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'Yes' when passed true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  it("returns 'No' when passed false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });

  it("throws an error for invalid input", () => {
    expect(() => booleanToWord(10)).toThrow(
      "Invalid input. Expected a boolean value."
    );
    expect(() => booleanToWord("true")).toThrow(
      "Invalid input. Expected a boolean value."
    );
    expect(() => booleanToWord(null)).toThrow(
      "Invalid input. Expected a boolean value."
    );
  });
});
