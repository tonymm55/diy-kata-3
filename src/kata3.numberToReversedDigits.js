const numberToReversedDigits = (number) => {
    const newArray = Array.from(String(number));
    const reversedArray = newArray.reverse();
    const outputArray = reversedArray.map(item => {
        return Number(item)
    })
    return outputArray
};

module.exports = numberToReversedDigits;
