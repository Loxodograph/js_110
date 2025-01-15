/*

Problem
  - Write a function that calculates the sum of all numbers in a nested array.
    The array may contain integers, nested arrays of integers, or a mix of both.
    (for ruby and JS don’t use flatten)


  - Input: array, containing nested arrays
  - Output: a number representing sum of all numbers in the array

  - Rules
    - Explicit:
      - don't use flatten
      - array may contain integers and nested arrays of integers
      - caluclate sum of all numbers in array

    - Implicit:

  - Questions

Examples and Test Cases

console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150

Data Structures
Arrays and nested Arrays

Algorithm
  - create function sumofNestedArray, which takes an array of
    nested arrays as arguments
    - define variable stack equal to copy of array;
    - define variable totalSum = to 0
    - while stack contains elements
      - current element = last element of stack
      - if element is array
          - push spread of current element to stack
      - else
        - add element to totalsum


Code
*/
function sumOfNestedArray(array) {
  let stack = [...array];
  let totalSum = 0;
  while (stack.length) {
    let currentElement = stack.pop();
    if (Array.isArray(currentElement)) {
      stack.push(...currentElement);
    } else {
      totalSum += currentElement;
    }
  }
  return totalSum;
}

console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150