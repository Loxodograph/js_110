/*
Problem
  - Write a function that returns the maximum possible
    consecutive alternating odd and even (or even and odd)
    numbers. Minimum possible length is `2`.
    If there’s none return `[]`.

  Input: An array of numbers
  Output: An array of longest alternating odd & even

  Rules:
    - Explicit
      - return empty array if no alternating exists
      - minimum possible length is 2
    - Implicit
      - alternating is one where first and second number are not
        both odd or both even

Examples and Test Cases

  console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6]));
  // Expected: [1, 2, 3, 4, 5, 6]
  console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
  console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
  console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5]));
  // Expected: [7, 8, 5]
  console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17]));
  // Expected: [6, 7, 12, 11]

Algorithm
  - create function longestAlternatingSubarray which defines parameter
    inputArray
    - create longestConsecutive variable equal to empty array
    - create currentConsecutive variable equal to first element of input
    - iterate over elements of input array starting at index 1
      - if element and preceding element are not both odd or even
        - push element to current consecutive
        - if current consecutive is greater than longestconsecutive
          - longestConsecutive equals copy of currentConsecutive
      - else
        - currentConsecutive equals current element
    - if longestConsecutive is longer than 2, return longestConsecutive
      - else return empty array
*/

function longestAlternatingSubarray(inputArray) {
  let longestConsecutive = [];
  let currentConsecutive = [inputArray[0]];

  for (let idx = 1; idx < inputArray.length; idx++) {
    if (inputArray[idx] % 2 !== inputArray[idx - 1] % 2) {
      currentConsecutive.push(inputArray[idx]);
      if (currentConsecutive.length > longestConsecutive.length) {
        longestConsecutive = [...currentConsecutive];
      }
    } else {
      currentConsecutive = [inputArray[idx]];
    }
  }
  return longestConsecutive.length > 2 ? longestConsecutive : [];
}

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6]));
// Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5]));
// Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17]));
// Expected: [6, 7, 12, 11]