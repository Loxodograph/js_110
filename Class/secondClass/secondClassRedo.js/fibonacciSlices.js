/*

Problem
  - Implement function that finds all fibonacci slices
    in a given array of integers. A Fibonacci slice
    is a sequence where every number after the first
    two is the sum of the two preceding ones.
    The minimum length is 3.

  Input: array of numbers
  Output: nested array

  Rules
    Explicit: fibonacci slice, is sequence where every number after first 2
      is sum of the two preceding ones.
      - minimum length is 3.
    Implicit:

Examples and Test Cases

  console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2],
  // [1, 1, 2, 3],
  // [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3],
  // [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]

  console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ],
  //  [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]

  console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ],
  // [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]

  console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16]));  // [[2, 4, 6],
  // [2, 4, 6, 10],
  // [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, 16], [6, 10, 16]]

  console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []

Algorithm
  - Create function is fibonacciSlice which accepts an array slice as argument
    - iterate over elements of slice
      - if slice element is equal to the sum of the true preceding elements
        - return true

  create function findFibonacciSlices
    create empty array variable result
    loop through elements of array starting index 0 until second to last element
      loop through elements of array starting at start + 3 until length of array
        create variable slice, creating slice from start and end
        check if variable slice is fibonacci
        if so push slice to result
    return result
*/

function isFibonacci(slice) {
  for (let idx = 2; idx < slice.length; idx++) {
    if (slice[idx - 2] + slice[idx - 1] !== slice[idx]) {
      return false;
    }
  }
  return true;
}

function findFibonacciSlices(inputArray) {
  let result = [];

  for (let idx = 0; idx < inputArray.length - 2; idx++) {
    for (let jdx = idx + 3; jdx <= inputArray.length; jdx++) {
      let slice = inputArray.slice(idx, jdx);
      if (isFibonacci(slice)) {
        result.push(slice);
      }
    }
  }
  return result;
}

console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2],
// [1, 1, 2, 3],
// [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3],
// [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]

console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ],
//  [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]

console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ],
// [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]

console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16]));  // [[2, 4, 6],
// [2, 4, 6, 10],
// [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, 16], [6, 10, 16]]

console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []