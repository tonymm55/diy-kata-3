const joinNames = (namesObj) => {
  const names = namesObj.map((element) => element.name);
  // slice names from 0 to -1, then add the last name to the end of the names array.
  const nameString = `${names.slice(0, -1).join(", ")} & ${names.slice(-1)}`;
  return nameString;
};

module.exports = joinNames;
