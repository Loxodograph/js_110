/*

Problem
  - Implement function that finds all fibonacci slices
    in a given array of integers. A Fibonacci slice
    is a sequence where every number after the first
    two is the sum of the two preceding ones.
    The minimum length is 3.


  - Input: Array of integers
  - Output: nested array

  - Rules
    - Explicit:
      - Minimum length is 3

    - Implicit:
      - A Fibonacci slice is a sequence where every number after
        the first two is the sum of the two preceding ones.


  - Questions


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
  // [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, lon16], [6, 10, 16]]

  console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []

Data Structures


Algorithm

  create helper function, isFibonacci which takes a slice of an array
    iterate starting from 2 index
      if sum of two previous indexes doesn't equal current index
        return false
    return true

  create function findFibonacciSlices
    create empty array variable result
    loop through elements of array starting index 0 until second to last element
      loop through elements of array starting at start + 3 until length of array
        create variable slice, creating slice from start and end
        check if variable slice is fibonacci
        if so push slice to result
    return result

Code
*/

function isFibonacci(slice) {
  for (let idx = 2; idx < slice.length; idx++) {
    if (slice[idx - 2] + slice[idx - 1] !== slice[idx]) {
      return false;
    }
  }
  return true;
}

function findFibonacciSlices(array) {
  let result = [];

  for (let start = 0; start < array.length - 2; start++) {
    for (let end = start + 3; end <= array.length; end++) {
      let slice = array.slice(start, end);
      if (isFibonacci(slice)) {
        result.push(slice);
      }
    }
  }
  return result;
}

// function isFibonacci(slice) {
//   for (let index = 2; index < slice.length; index++) {
//     if (slice[index - 2] + slice[index - 1] !== slice[index]) {
//       return false;
//     }
//   }
//   return true;
// }
// function findFibonacciSlices(array) {
//   let result = [];
//   for (let start = 0; start < array.length - 2; start++) {
//     for (let end = start + 3; end <= array.length; end++) {
//       let slice = array.slice(start, end);
//       if (isFibonacci(slice)) {
//         result.push(slice);
//       }
//     }
//   }
//   return result;
// }


// Test cases
console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3], [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]
console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ], [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]
console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ], [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]
console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16]));  // [[2, 4, 6], [2, 4, 6, 10], [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, 16], [6, 10, 16]]
console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []