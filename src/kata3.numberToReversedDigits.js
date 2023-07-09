const numberToReversedDigits = (number) => {
  const newArray = Array.from(String(number));
  const reversedArray = newArray.reverse();
  const outputArray = reversedArray.map((element) => Number(element));
  return outputArray;
};

module.exports = numberToReversedDigits;
