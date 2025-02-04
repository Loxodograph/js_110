/*
Problem
  - Implement a function that finds all pairs of numbers from an array, where:

    The first number in each pair is located at an even index in the original
    array and has a value less than 5.

    The second number in each pair is located at an odd index in the original
    array and has a value greater than 5.

  - Input: array of numbers
  - Output: nested array of special pairs.

  - Rules:
    - Explicit:
      - Special pair is first number < 5 at even index
        - Second Number > 5 at odd index;
    - Implicit:


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

Algorithm
  - create function findSpecialpairs which takes array as argument
    - define variable finalArray = to empty Array
    - iterate over even elements of input Array
      - iterate over next odd elements of input Array
        - if even element is less than 5 and odd element is greater
          than 5
            - add elements as array to finalArray;
    -return finalArray
*/

function findSpecialPairs(inputArray) {
  let finalArray = [];
  for (let evens = 0; evens < inputArray.length; evens += 2) {
    for (let odds = evens + 1; odds < inputArray.length; odds += 2) {
      if (inputArray[evens] < 5 && inputArray[odds] > 5) {
        finalArray.push([inputArray[evens], inputArray[odds]]);
      }
    }
  }
  return finalArray;
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