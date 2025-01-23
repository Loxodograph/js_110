/*
Problem
  - Write a function that returns the maximum possible consecutive
    subarray where the elements form an arithmetic progression (the
    difference between consecutive numbers is constant).

    The minimum possible length of the subarray is 2.
    If there’s none, return [].
  - Input: An array of numbers.
  - Output: The longest consecutive subarray where all
    elements form an arithmetic progression.

  - Rules
    - Explicit:
      - An arithmetic progression (AP) is a sequence of numbers where the
        difference between consecutive terms is constant.
      - The function should return the longest
        subarray where this condition is met

    - Implicit:

  - Questions

Examples and Test Cases

console.log(longestArithmeticSubarray([1, 3, 5, 7, 9, 11]));
// Expected: [1, 3, 5, 7, 9, 11]

console.log(longestArithmeticSubarray([10, 7, 4, 1, -2, 0, -3, -6]));
// Expected: [10, 7, 4, 1, -2]

console.log(longestArithmeticSubarray([1, 2, 4, 8, 12, 16]));
// Expected: [4, 8, 12, 16]

console.log(longestArithmeticSubarray([5, 5, 5, 5, 5]));
// Expected: [5, 5, 5, 5, 5]

console.log(longestArithmeticSubarray([1, 2, 3, 5, 8, 11]));
// Expected: [1, 2, 3]

Data Structures

Algorithm
  - Create function longestArithmeticSubarray which accepts
    an inputArray of numbers as an argument.
    - define variable longestSubarray equal to empty array
    - define variable currentSubarray equal to first element of inputArray
    - define variable difference equal to first element - second element
      - iterate over elements of subarray starting at second element (index 1)
        - if difference between element and preceding element
          is equal to difference variable
          - push element to current subArray
          - if currentSubarray length is greater than longestSubarray length
            - longestSubarray equals copy of currentSubarray
        - else
          - difference equals element - next element
          - currentSubarray equals element
Code
*/

function longestArithmeticSubarray(inputArray) {
  let longestSubarray = [];
  let currentSubarray = [inputArray[0]];
  let difference = inputArray[1] - inputArray [0];

  for (let idx = 1; idx < inputArray.length; idx++) {
    if (difference === (inputArray[idx] - inputArray[idx - 1])) {
      currentSubarray.push(inputArray[idx]);
      if (currentSubarray.length > longestSubarray.length) {
        longestSubarray = [...currentSubarray];
      }
    } else {
      difference = inputArray[idx] - inputArray[idx - 1];
      currentSubarray = [inputArray[idx - 1], inputArray[idx]];
    }
  }
  return longestSubarray.length >= 2 ? longestSubarray : [];
}

console.log(longestArithmeticSubarray([1, 3, 5, 7, 9, 11]));
// Expected: [1, 3, 5, 7, 9, 11]

console.log(longestArithmeticSubarray([10, 7, 4, 1, -2, 0, -3, -6]));
// Expected: [10, 7, 4, 1, -2]

console.log(longestArithmeticSubarray([1, 2, 4, 8, 12, 16]));
// Expected: [4, 8, 12, 16]

console.log(longestArithmeticSubarray([5, 5, 5, 5, 5]));
// Expected: [5, 5, 5, 5, 5]

console.log(longestArithmeticSubarray([1, 2, 3, 5, 8, 11]));
// Expected: [1, 2, 3]
