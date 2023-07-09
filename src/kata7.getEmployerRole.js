const getEmployerRole = (employeeNameString, employeesArray) => {
  const employee = employeesArray.find(
    (obj) => obj.name === employeeNameString
  );

  return employee.role;
};

module.exports = getEmployerRole;
