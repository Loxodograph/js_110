/*
Create a function that takes an array of integers as an argument.
The function should return the minimum sum of 5 consecutive
numbers in the array.
If the array contains fewer than 5 elements, the function
should return null.

Input: Array
Output: Number

Rules
  Explicit: return minimum sum of 5 consecutive numbers
  - if less than 5 numbers, return null

create function minimumSum takes array as argument
define currentSum = 0;
define minimumSum = Infinity;
if array length is less than 5 return null
for each index starting at 4
  currentSum = reduction of slice from 0 to index
  if currentSum is less than minimumSum
    minimumSum = currentSum
return minimumSum
  */

function minimumSum(array) {
  let currentSum = 0;
  let minimumSum = Infinity;

  if (array.length < 5) return null;
  for (let idx = 0; idx + 4 < array.length; idx++) {
    currentSum = array.slice(idx, idx + 5).reduce((total, count) => {
      return total + count;
    }, 0);
    if (currentSum < minimumSum) {
      minimumSum = currentSum;
    }
  }
  return minimumSum;
}
const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);