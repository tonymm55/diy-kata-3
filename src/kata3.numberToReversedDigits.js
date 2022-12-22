function numberToReversedDigits(number) {
  const newArray = Array.from(String(number));
  const reversedArray = newArray.reverse();
  const outputArray = reversedArray.map((item) => Number(item));
  return outputArray;
}

module.exports = numberToReversedDigits;
