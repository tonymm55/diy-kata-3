const booleanToWord = (value) => {
  if (typeof value !== "boolean") {
    throw new Error("Invalid input. Expected a boolean value.");
  }
  if (value === true) {
    return "Yes";
  }
  return "No";
};

module.exports = booleanToWord;
