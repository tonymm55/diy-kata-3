const humanCatDogYears = (humanYears) => {
    if (humanYears === 1) {
        return [humanYears, 15, 15]
    }
    if (humanYears === 2) {
        return [humanYears, 24, 24]
    }
    const yearsAboveFirstTwo = humanYears - 2;
    const extraCatYears = yearsAboveFirstTwo * 4;
    const extraDogYears = yearsAboveFirstTwo * 5;
    
    // }
    // if (number === 4) {
    //     human = number
    //     cat = 33
    //     dog = 34
    // }
    // if (number ===5) {
    //     human = number
    //     cat = number

    
    // else if human === 2;
    //     cat === 24
    //     dog === 24
    // else if human > 2;
    //     cat = cat 1 + cat 2 human
    // dog += 5

    return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}
module.exports = humanCatDogYears;