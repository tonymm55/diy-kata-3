function getEmployerRole(employeeName, employees) {
  const employee = employees.find((obj) => obj.name === employeeName);

  return employee.role;
}

module.exports = getEmployerRole;
