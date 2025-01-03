/*

Problem
  - Create a function that takes an array of numbers between 
    1 and 10 (excluding one number) and returns the missing number.

  - Input: array of numbers between 1 & 10
  - Output: number missing from range 1 & 10

  - Rules
    - Explicit:
      - array will be unsorted
      - only one number will be missing

    - Implicit:
      

  - Questions
    

Examples and Test Cases
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

Data Structures
arrays


Algorithm
  declare function missingNum which accepts array as argument
  sort missing num numerically
  iterate over elements of missing num
    - if element doesnt equal element at next index
      - return element
Code
*/

function missingNum(array) {
  array.sort((a, b) => a - b);
  for (let i = 0; i <= array.length; i++) {
    if (array[i] !== (i + 1)) {
      return i + 1;
    }
  }
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))