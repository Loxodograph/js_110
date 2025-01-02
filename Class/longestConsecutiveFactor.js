/*
  - Problem
    Write a function that returns the longest consecutive 
    numbers that are factors of the given target number.

    - Input : Array of potential factors, inputNumber
    - Output: Array containing longest streak of consecutive factors of input Number
  
  - Examples
  console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
  console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
  console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
  console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
  console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]


  - Data Structures
    - Array which will be returned containing longest consecutive factors

  - Algorithm
    - CREATE function called longestConsecutiveFactors which takes two arguments, an inputArr and inputNum
    - Create longestsequence = [];
    - create currenSequence = [];

    - create for loop iterating over all elements of array
      - if input num % element at index === 0
        push element to longest sequence
          if current sequence.length is greater than longestsequence.length
            - longest sequence = current sequence
      - else
        - current sequence = []
    return longest sequence

  - Code
*/

function longestConsecutiveFactors(inputArr, inputNum) {
  let longestSequence = [];
  let currentSequence = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (inputNum % inputArr[i] === 0) {
      currentSequence.push(inputArr[i]);
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
    } else {
      currentSequence = [];
    }
  }
  return longestSequence;
}

console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]