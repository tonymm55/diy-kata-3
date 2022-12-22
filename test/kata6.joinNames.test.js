const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    const bart = {
      nom: "Bart",
    };
    const lisa = {
      nom: "Lisa",
    };
    const maggie = {
      nom: "Maggie",
    };

    expect(joinNames([bart, lisa, maggie])).toEqual("Bart, Lisa & Maggie");
  });
});
