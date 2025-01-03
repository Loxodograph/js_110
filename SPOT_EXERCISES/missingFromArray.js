/*

Problem
  - You are given two arrays. The elements in arr1 threw a party and 
    started to mix around. However, one of the elements got lost! 
    Your task is to return the element which was lost.

  - Input: two arrays -> First array, second array with one element missing
  - Output: number of missing element

  - Rules
    - Explicit:
      - the first array always contains 1 or more elements
      - Elements are always lost
      - An element can also have duplicates

    - Implicit:
      

  - Questions
    

Examples and Test Cases

missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) // 2

missing([true, true, false, false, true], [false, true, false, true]) // true

missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) // "ugly"


Data Structures


Algorithm
  - create function named missing, accepts two arrays as parameters
    - sort two functions in the same way
    - iterate over elements of the first array
      - if element of first array is not equal to element of second array
      - return element of first array 

Code
*/

function missing(array1, array2) {
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return array1[i];
    }
  };
}

console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]));
console.log(missing([true, true, false, false, true], [false, true, false, true]));
console.log(missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]));