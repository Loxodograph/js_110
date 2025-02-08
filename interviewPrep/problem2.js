/*
Problem
  - Create a function that takes an array of integers as an argument.
  The function should return the min. sum of 5 consecutive numbers in the array
  If the array contains fewer than 5 elements, the function should return null.


  - Input: Array of integers
  - Output: Minimum sum of 5 consecutive numbers in the array

  - Rules
    - Explicit:
      - if fewer than five elements, return null

    - Implicit:

  - Questions

Examples and Test Cases

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

Data Structures

Algorithm
create function minimumSum which takes an array as argument
  - define arraySum equal to empty array
  - if length of array is less than 5, return null.
  - iterate over elements of array
    - if index + 5 is greater than length, break
    - let slice = from element, to 5 after.
    - push to arraySum sumArray of slice
  - return minimum from arraySum

create function sumArray which takes array slice as argument
  reduce array slice to calculate sum
  return reduction
Code
*/

function minimumSum(array) {
  if (array.length < 5) return null;
  let arraySum = [];
  for (let i = 0; i < array.length; i++) {
    if (i + 5 > array.length) {
      break;
    }
    let slice = array.slice(i, i + 5);
    arraySum.push(sumArray(slice));
  }
  return Math.min(...arraySum);
}

function sumArray(arraySlice) {
  return arraySlice.reduce((total, element ) => {
    return total + element;
  }, 0);
}
const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
