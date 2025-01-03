/*

Problem
  - Create a function that returns the total number of boomerangs in an array.

  - Input: an array containing large sequence of numbers
  - Output: a number detailing amount of boomerangs in array

  - Rules
    - Explicit:
      - Boomerang is sub-array of length 3, with the first and last digits 
        being the same and the middle digit being different.
      - Boomerangs can overlap
        - [1, 7, 1, 7, 1, 7, 1]
            5 boomerangs (from left to right): 
            [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

    - Implicit:
      - triple identical digits is not a boomerang

  - Questions
    - What is a boomerang?

Examples and Test Cases
  countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
    9, 5, 9 && 5, 9, 5 

  countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

  countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0


Data Structures
arrays


Algorithm
  declare function countBoomerangs accepting array as argument
    - declare count = 0
      - iterate over elements of array starting at index 2
      - check if element at index 2 is equal to element 2 before
      - check if element at index 2 is not equal to element 1 before
      - if true increment count
    - return count

Code
*/

function countBoomerangs(array) {
  let count = 0;

  for (let i = 2; i < array.length; i++) {
    if ((array[i] === array[i - 2]) && (array[i] !== array[i - 1])) {
      count++
    } else {
      continue;
    }
  }
  return count;
}

countBoomerangs([9, 5, 9, 5, 1, 1, 1]) // 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) // 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) // 0
