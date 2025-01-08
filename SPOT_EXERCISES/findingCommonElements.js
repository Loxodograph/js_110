/*

Problem
  - Create a function that takes two "sorted" arrays of
    numbers and returns an array of numbers which are
    common to both the input arrays.

  - Input: Two sorted arrays
  - Output: Array of numbers common to both arrays

  - Rules
    - Explicit: Arrays are sorted.

    - Implicit:

  - Questions

Examples and Test Cases
commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) // [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) // [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) // [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) // []


Data Structures
arrays

Algorithm
  create function commonElements with two arrays as parameters
    define variable result;

    - loop through all elements of first array
      - loop through all elements of second array
      - if element of first array is equal element of second array
        AND result does not include element
        - push element to result
    return result

Code
*/

function commonElements(array1, array2) {
  let result = [];
  for (let idx = 0; idx < array1.length; idx++) {
    for (let jdx = 0; jdx < array2.length; jdx++) {
      if ((array1[idx] === array2[jdx]) && !result.includes(array1[idx])) {
        result.push(array1[idx]);
      }
    }
  }
  return result;
}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));