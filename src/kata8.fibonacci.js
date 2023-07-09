/* eslint-disable no-plusplus */
// Function to calculate the nth Fibonacci number
// const fibonacci = (n) => {
//   if (n <= 0) {
//     throw new Error("Invalid input. n should be a positive integer.");
//   }
//   if (n === 1) {
//     return 0;
//   }
//   if (n === 2) {
//     return 1;
//   }
//   let prev = 0;
//   let curr = 1;
//   for (let i = 3; i <= n; i++) {
//     const next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return curr;
// };

const fib = (n) => {
  if (n < 0) {
    throw new Error("Invalid input. n should be a positive integer.");
  }
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

module.exports = fib;
