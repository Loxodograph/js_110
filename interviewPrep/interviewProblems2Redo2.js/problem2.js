/*
Create a function that takes an array of integers as an argument.

The function should return the minimum sum of 5
consecutive numbers in the array.

If the array contains fewer than 5 elements,
the function should return null.

problem : Return minimum sum of 5 consecutive numbers in an array
  rules
    return null if fewer than five elements

algorithm
  return null if fewer than five elements in original array
  create lowestSum variable equal to infinity
  create currentSum variable equal to 0

  iterate over elements of input array starting from element 5th
    create slice from five items before element up to element
      currentSum = reduce slice
        if currentSum is less than lowestSum
          lowestSum equals currentSum
  return lowestSum
*/
function minimumSum(array) {
  if (array.length < 5) {
    return null;
  }
  let currentSum = 0;
  let lowestSum = Infinity;
  for (let idx = 5; idx <= array.length; idx++) {
    let slice = array.slice(idx - 5, idx);
    currentSum = slice.reduce((total, element) => total + element, 0);
    if (currentSum < lowestSum) {
      lowestSum = currentSum;
    }
  }
  return lowestSum;
}
const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);