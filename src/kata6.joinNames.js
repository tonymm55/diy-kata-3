const joinNames = (namesObj) => {
  const names = namesObj.map((anything) => anything.nom);

  const nameString = `${names.slice(0, -1).join(", ")} & ${names.slice(-1)}`;

  return nameString;
};

module.exports = joinNames;
