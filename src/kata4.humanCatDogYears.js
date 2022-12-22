const humanCatDogYears = (humanYears) => {
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  }
  if (humanYears === 2) {
    return [humanYears, 24, 24];
  }
  const yearsAboveFirstTwo = humanYears - 2;
  const extraCatYears = yearsAboveFirstTwo * 4;
  const extraDogYears = yearsAboveFirstTwo * 5;

  return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
};
module.exports = humanCatDogYears;
