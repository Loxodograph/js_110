/*

Problem

// Write a function that returns the longest consecutive numbers 
// that are factors of the given target number.


  - Input - array of integers, target integer.
  - Output - arrau of longest consecutive factors

  -Rules
    - Explicit
      - will be given array of integers
      - will return array of factors that are consecutive in the original array

    - Implicit

  - questions
    Will all inputs be integers?
    What is a factor?
    What defines consecutive factors?

Examples

console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]


Data structures
    arrays of random numbers
    array of factors that are consecutive in the first array


Algorithm
  -declare function with two arguments, array, targetNumber
  - declare a variable called longestConsecutiveArray
  - declare a variable called currentConsecutiveArray initialized to empty array
  - iterate over elements of input array starting at index 0
    - if element at index is factor of target number (target number % factor)
      - push element to consecutive array
      - if consecutive array > longestConsecutiveArray
        - longest consecutive array = consecutive array
    - else
      - consecutive array = empty array
  - return longest consecutive array

Code
*/

function longestConsecutiveFactors(array, targetNumber) {
  let longestConsecutiveArray = [];
  let currentConsecutiveArray = [];

  for (let i = 0; i < array.length; i++) {
    if (targetNumber % array[i] === 0 ) {
      currentConsecutiveArray.push(array[i]);
      if (currentConsecutiveArray.length > longestConsecutiveArray.length) {
        longestConsecutiveArray = currentConsecutiveArray;
      }
    } else {
      currentConsecutiveArray = [];
    }
  }
  return longestConsecutiveArray;
}

console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]