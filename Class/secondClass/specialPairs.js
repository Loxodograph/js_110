/*
Problem
  - Implement a function that finds all pairs of numbers from an array, where:

    The first number in each pair is located at an even index in the original
    array and has a value less than 5.

    The second number in each pair is located at an odd index in the original
    array and has a value greater than 5.

  - Input: Array of numbers
  - Output: array containing array of special pairs

  - Rules
    - Explicit:
      - will be given array of positive integers
      - if no special pairs found, return empty array

    - Implicit:
      -

  - Questions


Examples and Test Cases

// console.log(findSpecialPairs([2, 6, 1, 7, 4, 10]));
// [ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]

// console.log(findSpecialPairs([4, 9, 2, 6, 3, 11, 4]));
// [ [ 4, 9 ], [ 4, 6 ], [ 4, 11 ], [ 2, 6 ], [ 2, 11 ], [ 3, 11 ] ]

// console.log(findSpecialPairs([5, 12, 3, 8]));
// [ [ 3, 8 ] ]

// console.log(findSpecialPairs([7, 4, 6, 5]));
// []

// console.log(findSpecialPairs([1, 7, 2, 8, 3, 9]));
// [ [ 1, 7 ], [ 1, 8 ], [ 1, 9 ], [ 2, 8 ], [ 2, 9 ], [ 3, 9 ] ]

Data Structures

Algorithm
  create function findSpecialPairs() which takes an array as an argument
    create result variable set to empty array

    loop through elements of array starting at index 0,
      ending at second to last element

      loop through elements at array, starting at index + 1, adding 2 each time
      if element 1 is less than 5 and element 2 is greater than 5


Code
*/

function findSpecialPairs(array) {
  let result = [];
  for (let index = 0; index < array.length - 1; index += 2) {
    for (let oddIndex = index + 1; oddIndex < array.length; oddIndex += 2) {
      if (array[index] < 5 && array[oddIndex] > 5) {
        result.push([array[index], array[oddIndex]]);
      }
    }
  }
  return result;
}
console.log(findSpecialPairs([2, 6, 1, 7, 4, 10]));
// [ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]

console.log(findSpecialPairs([4, 9, 2, 6, 3, 11, 4]));
// [ [ 4, 9 ], [ 4, 6 ], [ 4, 11 ], [ 2, 6 ], [ 2, 11 ], [ 3, 11 ] ]

console.log(findSpecialPairs([5, 12, 3, 8]));
// [ [ 3, 8 ] ]

console.log(findSpecialPairs([7, 4, 6, 5]));
// []

console.log(findSpecialPairs([1, 7, 2, 8, 3, 9]));
// [ [ 1, 7 ], [ 1, 8 ], [ 1, 9 ], [ 2, 8 ], [ 2, 9 ], [ 3, 9 ] ]