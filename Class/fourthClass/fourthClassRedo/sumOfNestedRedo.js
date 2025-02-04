/*

Problem
  - Write a function that calculates the sum of all numbers in a nested array.
    The array may contain integers, nested arrays of integers, or a mix of both.
    (for ruby and JS don’t use flatten)

  Input: A nested Array
  Output: Sum of all integers in nested array

  Rules
    explicit:
      - Can not use flatten
      - all elements will be either integers or nested arrays of integers
      - Return sum of numbers

Examples and Test Cases

console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150

Algorithm
  - Create function sumOfNestedArray which defines inputArray as parameter
    - define stack variable equal to copy of array
    - define total sum equal to 0
    - while stack contains elements
      - let current element equal last element of stack
      - if current element is array
        - add to stack - copy of current element
        - else
          - add current element to total sum
    - return total sum
*/
function sumOfNestedArray(inputArray) {
  let stack = [...inputArray];
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