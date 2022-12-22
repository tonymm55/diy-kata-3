const { boolean } = require("yargs");
const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes when passed true", () => {
    expect(booleanToWord(10)).toEqual("Yes");
  });

  it("returns no when passed false", () => {
    expect(booleanToWord(5)).toEqual("No");
  });
});
