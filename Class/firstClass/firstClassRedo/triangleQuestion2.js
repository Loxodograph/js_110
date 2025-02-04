// Given 2 two arguments of an array of numbers and a number,
// find all the pairs that results in the forming a triangle with the number.

// Note: To determine if three numbers form a triangle you have to
// use the Triangle Inequality Theorem, which states that the sum of
// two side lengths of a triangle is always greater than the third side.
// If this is true for all three combinations of added side lengths,
// then you will have a triangle. -- Hamdi

// console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]

// console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []

// console.log(findTrianglePairs([7, 10, 12, 15], 9));
// // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]

// console.log(findTrianglePairs([8, 2, 5, 6, 3], 4));
// // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]

/*
Problem:
  Given 2 arguments of an array of numbers and a number find all
  the pairs that results in the forming of a triangle with the number.

  Note: To determine if three numbers form a triangle you have to
  use the Triangle Inequality Theorem, which states that the sum of
  two side lengths of a triangle is always greater than the third side.
  If this is true for all three combinations of added side lengths,
  then you will have a triangle.

  Input: array of numbers, and target number
  output: nested array containing all pairs that form triangle with target
    number

  Rules :
    Explicit:
      - A triangle is formed if sum of two sides is greater than third side
        - A + B > C
          - this applies to all combinations of triangles sides.

    Implicit:
      - Not all input arrays will form triangles with target numbers

  Examples and test Cases
    // console.log(findTrianglePairs([2, 3, 4, 5], 7));
      // [ [ 3, 5 ], [ 4, 5 ] ]

    // console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []

    // console.log(findTrianglePairs([7, 10, 12, 15], 9));
      // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]

    // console.log(findTrianglePairs([8, 2, 5, 6, 3], 4));
    // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]

Algorithm
  - create function findTrianglePairs which accepts inputArray and number
    as argument
    - create finalArray variable equal to empty array
    - iterate over elements of inputArray starting at index 0, ending at
      length of inputArray - 2
      - iterate over elements at inputArray starting at index 1 - end inputArray
        - if isTriangle first element, secondelement and target number
          - push two elements to finalArray as array

    - return finalArray

  - create function isTriangle which accepts 3 numbers as argument.
    - return true if num1 + num2 is greater than num3
    - return true if num2 + num3 is greater than num1
    - return true if num1 + num3 is greater than num2
    - else return false

*/
function findTrianglePairs(inputArray, targetNum) {
  let finalArray = [];

  for (let idx = 0; idx < inputArray.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < inputArray.length; jdx++) {
      if (isTriangle(inputArray[idx], inputArray[jdx], targetNum)) {
        finalArray.push([inputArray[idx], inputArray[jdx]]);
      }
    }
  }
  return finalArray;
}
function isTriangle(num1, num2, num3) {
  return ((num1 + num2 > num3) &&
    (num2 + num3 > num1) &&
    (num3 + num1 > num2));
}

console.log(findTrianglePairs([2, 3, 4, 5], 7));
// [ [ 3, 5 ], [ 4, 5 ] ]

console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []

console.log(findTrianglePairs([7, 10, 12, 15], 9));
// [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]

console.log(findTrianglePairs([8, 2, 5, 6, 3], 4));
// [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]