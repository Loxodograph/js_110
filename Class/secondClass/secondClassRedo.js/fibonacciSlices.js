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
      - slices can be longer than 3 numbers
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
- create function isFibonacci which takes a slice of an array as an argument
  - iterate over elements of the slice starting at element 3
    - if element 3 is not equal to element 2 + element 1
      - return false
  - return true

- create findFibonacciSlices which takes an array as an argument
  - define variable finalArray equal to empty array

  - iterate over elements of inputArray
    - start at index 0 until index third to last
    - iterate over elements of input array
      - end index is start + 2, until last index
        - define variable slice equal to inputArray sliced to
          start index and end index + 1
        - if slice is fibonacci, add slice to finalArray
  return finalarray
*/
function isFibonacci(slice) {
  for (let idx = 2; idx < slice.length; idx++) {
    if (slice[idx] !== slice[idx - 1] + slice[idx - 2]) {
      return false;
    }
  }
  return true;
}

function findFibonacciSlices(array) {
  let finalArray = [];

  for (let start = 0; start < array.length - 2; start++) {
    for (let end = start + 2; end < array.length; end++) {
      let slice = array.slice(start, end + 1);
      if (isFibonacci(slice)) {
        finalArray.push(slice);
      }
    }
  }
  return finalArray;
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