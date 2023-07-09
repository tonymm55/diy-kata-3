const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    const bart = {
      name: "Bart",
    };
    const lisa = {
      name: "Lisa",
    };
    const maggie = {
      name: "Maggie",
    };

    expect(joinNames([bart, lisa, maggie])).toEqual("Bart, Lisa & Maggie");
  });
});
