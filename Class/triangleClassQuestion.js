/* Given 2 two arguments of an array of numbers and a number, 
  find all the pairs that results in the forming a triangle 
  with the number. 

  Note: To determine if three numbers form a triangle 
  you have to use the Triangle Inequality Theorem, which 
  states that the sum of two side lengths of a triangle 
  is always greater than the third side. If this is true 
  for all three combinations of added side lengths, 
  then you will have a triangle.

Problem -
  
  Input: Array of numbers and a number
  Output: array of arrays containing 2 numbers

  -Rules
    -Explicit
      - to be a triangle, sum of 2 sides is always greater than side 3

Examples:

console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]

2, 3, 7  -   2 + 3 > 7?
2, 4, 7  -   2 + 4 > 7?
2, 5, 7  -   2 + 5 > 7?
3, 4, 7  -   3 + 4 > 7?
3, 5, 7  -   3 + 5 > 7? yes 5 + 7 > 3? yes 7 + 3 > 5? yes
4, 5, 7  -   4 + 5 > 7? yes 5 + 7 > 4? yes 7 + 4 > 5 yes

console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []

return empty array if no pairs satisfy inequality theorem. 

console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]
console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]


Data Structures
Arrays and nested arrays

Algorithm
  - Create function called findTrianglePairs
    - takes two arguments, an array, and a third number.
  - create variable FInalArray set to empty array.

  - create for loop from index 0, to second to last element
    -create for loop from index + 1, to last element
      - if element at (index + element at index + 1 > thirdNumbe from arguments) and (element at index + 1 and third number > index) and (index and third number > element at index +1),
        - push [element at index, element at index + 1] to finalarray
  return final Array

Code
*/

function findTrianglePairs(array, thirdNumber) {
  let finalArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j ++ ) {
      if (
        array[i] + array[j] > thirdNumber &&
        array[j] + thirdNumber > array[i] &&
        thirdNumber + array[i] > array[j]
      ) {
        finalArray.push([array[i], array[j]]);
      }
    }
  }
  return finalArray
}

console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]

console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []

console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]
console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]