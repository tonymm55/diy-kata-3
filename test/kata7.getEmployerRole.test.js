const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employeesArray = [
    {
      name: "Javid",
      role: "Human Recommended Reading Assistant",
    },
  ];
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Javid", employeesArray)).toEqual(
      "Human Recommended Reading Assistant"
    );
  });
});
