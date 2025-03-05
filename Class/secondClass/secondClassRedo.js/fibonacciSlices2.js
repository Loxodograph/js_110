// Implement function that finds all fibonacci slices in a given
// array of integers. A Fibonacci slice is a sequence where every
// number after the first two is the sum of the two preceding ones.
// The minimum length is 3.

/*
Problem
  Create a function, which finds all fibonacci slices in a given
  array of integers.

  Fibonacci slice is a sequence where every number after the first
  two is the sum of the two preceding ones

  Minimum length is 3

  Input: Array of numbers
  Output: Array containing all fibonacci slices in input Array

  Rules:
    Explicit:
      A Fibonacci slice is a sequence, where every number after first 2
      is sum of the two preceding ones

Data Structures
Arrays

Algorithm
create function isFibonacci which takes a slice of numbers
  iterate over elements in slice
    if element 1 plus element 2 doesnt equal element 3
      return false
  return true

create function findFibonacciSlices which defines arrayOfNums parameter
define variable fibonacciArray equal to empty array

iterate over elements of array
  iterate over remaining elements of array
    create slice from start to end
    if slice isFibonacci
      add slice to fibonacciArray
return fibonacciArray

*/
function findFibonacciSlices(arrayOfNums) {
  let fibonacciArray = [];
  for (let start = 0; start < arrayOfNums.length; start++) {
    for (let end = start + 2; end < arrayOfNums.length; end++) {
      let slice = arrayOfNums.slice(start, end + 1);
      if (isFibonacci(slice)) {
        fibonacciArray.push(slice);
      }
    }
  }
  return fibonacciArray;
}

function isFibonacci(slice) {
  for (let idx = 2; idx < slice.length; idx++) {
    if (slice[idx - 1] + slice[idx - 2] !== slice[idx]) {
      return false;
    }
  }
  return true;
}
// Test cases
console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3], [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]
console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ], [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]
console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ], [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]
console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16]));  // [[2, 4, 6], [2, 4, 6, 10], [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, lon16], [6, 10, 16]]
console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []