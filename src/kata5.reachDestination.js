const reachDestination = (distance, speed) => {
  // const stringReachDestination = `I should be there in 4.5 hours.`

  const stringReachDest = `I should be there in ${
    Math.round(distance / speed / 0.5) * 0.5
  } hours.`;
  // The .round function works by rounding 44/10 to 5. So, you have to divide 4.4 by 0.5 to get 9, then multiply by 0.5 to get 4.5!

  return stringReachDest;
};
module.exports = reachDestination;
