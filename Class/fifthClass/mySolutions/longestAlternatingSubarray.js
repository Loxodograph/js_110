/*

Problem
  - Write a function that returns the maximum possible consecutive alternating
    odd and even (or even and odd) numbers. Minimum possible length is 2.
    If there’s none return [].


  - Input: array with random numbers
  - Output: Array representing maximum possible
    consecutive alternating odd and even

  - Rules
    - Explicit:
      - Return empty array if no alternating odd and even
      - return MAXIMUM POSSIBLE

    - Implicit:

  - Questions

Examples and Test Cases
console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6]));
// Expected: [1, 2, 3, 4, 5, 6]

console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []

console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5]));
// Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17]));
// Expected: [6, 7, 12, 11]

Data Structures
arrays


Algorithm
  - create function longestAlternatingSubarray
    which takes an input array as argument
  - define current consecutive subArray equal to empty array
  - iterate over elements of input array starting at index 1
    - if element at index and the index before it are not both even or odd
      if length of currentAlternating is 0, push both elements
      - add element to current consecutive subarray
  - return current consecutive subarray

Code
*/

function longestAlternatingSubarray(inputArray) {
  let longestAlternating = [];
  let currentAlternatingSubarray = [inputArray[0]];

  for (let idx = 1; idx < inputArray.length; idx++) {
    if (inputArray[idx] % 2 !== inputArray[idx - 1] % 2) {
      currentAlternatingSubarray.push(inputArray[idx]);
      if (currentAlternatingSubarray.length > longestAlternating.length) {
        longestAlternating = [...currentAlternatingSubarray];
      }
    } else {
      currentAlternatingSubarray = [inputArray[idx]];
    }
  }
  return longestAlternating.length >= 2 ? longestAlternating : [];
}

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]
console.log(longestAlternatingSubarray([2, 2, 3, 4, 5, 1, 1])); // Expected: [2, 3, 4, 5]
console.log(longestAlternatingSubarray([1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8])); // Expected : [3, 4, 5, 6, 7, 8]

// function longestAlternatingSubarray(arr) {
//   let longestSubarray = [];
//   let currentSubarray = [arr[0]];

//   for (let i = 1; i < arr.length; i++) {
//       if ((arr[i] % 2 !== arr[i - 1] % 2)) {
//           currentSubarray.push(arr[i]);
//           if (currentSubarray.length > longestSubarray.length) {
//               longestSubarray = [...currentSubarray];
//           }
//       } else {
//           currentSubarray = [arr[i]];
//       }
//   }

//   return longestSubarray.length >= 2 ? longestSubarray : [];
// }