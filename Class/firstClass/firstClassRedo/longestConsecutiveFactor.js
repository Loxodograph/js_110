/*
Problem: Write a function that returns the longest consecutive
         numbers that are factors of the given target number.

  Input: array of numbers and target number
  Output: array containing longest consecutive factors in inputArray

  Rules
    Explicit:
      - all test cases return an array of factors
        - no empty returns
      - Factors that are not consecutive are not included
      - Only longest streak of consecutive factors are returned
    Implicit:
      - Factor is any number that evenly divides into target number
        without remainder

// Test cases
// console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60));
// Expected: [12, 5, 4]

// console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12));
// Expected: [1, 2, 3, 4]

// console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150));
// Expected: [10, 15]

// console.log(longestConsecutiveFactors([1, 3, 7, 9], 21));
// Expected: [1, 3, 7]

// console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40));
// Expected: [2, 4]

Algorithm
  - create function isFactor which accepts number and targetNum
    - return whether targetNum modulo number equals 0

  - create function longestConsecutiveFactors which accepts an array
    and a target number
    - define variable longestConsecutive equal to empty array;
    - define variable currentConsecutive equal to empty array;
    - iterate over elements of inputArray
      - if isFactor element & targetNum
        - push to currentConsecutive element
        - if currentConsecutive is longer than longest
          - longest equals copy of currentConsecutive
      - else
        - currentConsecutive equals empty array
    - return longestConsecutive
*/

function isFactor(number, targetNum) {
  return targetNum % number === 0;
}

function longestConsecutiveFactors(inputArray, targetNum) {
  let longestConsecutive = [];
  let currentConsecutive = [];
  for (let idx = 0; idx < inputArray.length; idx++) {
    if (isFactor(inputArray[idx], targetNum)) {
      currentConsecutive.push(inputArray[idx]);
      if (currentConsecutive.length > longestConsecutive.length) {
        longestConsecutive = [...currentConsecutive];
      }
    } else {
      currentConsecutive = [];
    }
  }
  return longestConsecutive;
}

console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60));
// Expected: [12, 5, 4]

console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12));
// Expected: [1, 2, 3, 4]

console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150));
// Expected: [10, 15]

console.log(longestConsecutiveFactors([1, 3, 7, 9], 21));
// Expected: [1, 3, 7]

console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40));
// Expected: [2, 4]