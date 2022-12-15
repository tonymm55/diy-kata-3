const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [
    {
      name: "Javid",
      role: "Human Recommended Reading Assistant",
    },
  ];
  // const employeeName = 'Javid';
  // const role = getEmployerRole(employeeName, employees);
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Javid", employees)).toEqual(
      "Human Recommended Reading Assistant"
    );
  });
});
