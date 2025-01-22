/*
Problem
  - Write a function that returns the maximum possible consecutive alternating
    odd and even (or even and odd) numbers. Minimum possible length is 2.
    If there’s none return [].

  - Input: array of random numbers
  - Output:

  - Rules
    - Explicit:
      - return max possible consecutive alternating
      - minimum length is 2
      - if no alternating, return empty array

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

console.log(longestAlternatingSubarray([2, 2, 3, 4, 5, 1, 1]));
// Expected: [2, 3, 4, 5]

console.log(longestAlternatingSubarray([1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8]));
// Expected : [3, 4, 5, 6, 7, 8]

Data Structures

Algorithm
  - create function longestAlternatingSubarray - takes an inputArray of numbers
    - define variable longestAlternating to empty array
    - define variable currentAlternating to first element of inputArray
    - iterate over elements of input array starting at first index
      - if element and element before it are not both odd or even
        - append element to end of currentAlternating
      - if currentAlternating length is longer than
        longest alternating length
          - longestAlternating is copy of currentAlternating
          - currentAlternating equals next element
    - return longestAlternating element if length is greater than or
      equal to 2

Code
*/

function longestAlternatingSubarray(inputArray) {
  let longestAlternating = [];
  let currentAlternating = [inputArray[0]];

  for (let index = 1; index < inputArray.length; index++) {
    if (inputArray[index] % 2 !== inputArray[index - 1] % 2) {
      currentAlternating.push(inputArray[index]);
    }
    if (currentAlternating.length > longestAlternating.length) {
      longestAlternating = [...currentAlternating];
    } else {
      currentAlternating = [inputArray[index]];
    }
  }
  return longestAlternating.length >= 2 ? longestAlternating : [];
}

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6]));
// Expected: [1, 2, 3, 4, 5, 6]

console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5]));
// Expected: [7, 8, 5]

console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17]));
// Expected: [6, 7, 12, 11]

console.log(longestAlternatingSubarray([2, 2, 3, 4, 5, 1, 1]));
// Expected: [2, 3, 4, 5]

console.log(longestAlternatingSubarray([1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8]));
// Expected : [3, 4, 5, 6, 7, 8]
