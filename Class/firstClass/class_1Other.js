// Given 2 two arguments of an array of numbers and a number,
// find all the pairs that results in the forming a triangle with the number.

// Note: To determine if three numbers form a triangle you have to
// use the Triangle Inequality Theorem, which states that the sum of
// two side lengths of a triangle is always greater than the third side.
// If this is true for all three combinations of added side lengths,
// then you will have a triangle. -- Hamdi

/*
P:
Input: array of numbers && a number
Output: array (of PAIRS of numbers)

Rules:
--To see if 3 numbers form a triangle,
  they need to follow the triangle inequality rule:
-----SUM of 2 sides is always GREATER THAN the 3rd

// Test cases
console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]

--In this test case,
(3, 5, 7) -- all combinations of these satisfies idea that 2 numbers in the pair is greater than the 3rd

3 + 5 > 7
5 + 7 > 3
7 + 3 > 5


console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []

--if there aren't any pairs of numbers that are greter than given number argument, RETURN empty array

console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]

console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]


Data Structure:
--an array (need to return an array of subarrays)


Mental model:
--CREATE a function `findTrianglePairs` that takes an array, `arr`, and a number, `inputNum` as arguments
--CREATE a variable `resultArray` and set to empty array
--ITERATE through the input array
----SET the first element EQUAL to `firstNum` variable
------ITERATE from index of `firstNum` + 1 to end of array
-------Check if `firstNum` + next number is greater than `inputNum`, next number + `inputNum` is GREATER THAN `firstNum` and `firstNum` + `inputNum` is greater than next number
-----IF this is true, APPEND `firstNum` and next number to `result` array

----if there aren't any pairs of numbers that satis, RETURN empty array
*/

// function findTrianglePairs(array, inputNum) {
//   let resultArray = [];

//   for (let index = 0; index < array.length; index++) {
//     let firstNum = array[index];
//     for (let j = index + 1; j < array.length; j++) {
//       if (
//         firstNum + array[j] > inputNum &&
//         array[j] + inputNum > firstNum &&
//         firstNum + inputNum > array[j]
//       ) {
//         resultArray.push([firstNum, array[j]]);
//       } else {
//         continue;
//       }
//     }
//   }
//   return resultArray;
// }

// function findTrianglePairs(array, inputNum) {
//   let resultArray = [];

//   for (let index = 0; index < array.length; index++) {
//     let firstNum = array[index];
//     for (let j = index + 1; j < array.length; j++) {
//       for (let k = j + 1)
//       if (
//         firstNum + array[j] > inputNum &&
//         array[j] + inputNum > firstNum &&
//         firstNum + inputNum > array[j]
//       ) {
//         resultArray.push([firstNum, array[j]]);
//       } else {
//         continue;
//       }
//     }
//   }
//   return resultArray;
// }

// console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]

// console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []

// console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]

// console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]


// # Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is `2`. If there’s none return `[]`. -- Nick

// Test cases
// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]

// Write a function that returns the longest consecutive numbers that are factors of the given target number. -- Generosa

// function longestConsecutiveFactors(arr, target) {
//   let longestSequence = [];
//   let currentSequence = [];

//   for (let i = 0; i < arr.length; i++) {
//       if (target % arr[i] === 0) { // Check if arr[i] is a factor of target
//           currentSequence.push(arr[i]);
//       } else {
//           if (currentSequence.length > longestSequence.length) {
//               longestSequence = currentSequence;
//           }
//           currentSequence = [];
//       }
//   }

//   // Check at the end of the array
//   if (currentSequence.length > longestSequence.length) {
//       longestSequence = currentSequence;
//   }

//   return longestSequence;
// }

/*
// Test cases
console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60));
// Expected: [12, 5, 4]

console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12));
// Expected: [1, 2, 3, 4]

console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150));
// Expected: [10, 15]

console.log(longestConsecutiveFactors([1, 3, 7, 9], 21));
// Expected: [1, 3, 7]

console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40));
// Expected: [2, 4]

PROBLEM:

Rules:
- find all substrings with two vowels
- Then find the triples of those words
- If there are not 3 words, return empty array
- If there are more than three words, return a 2D array with all possible triples

Input: String
Output: Empty array, or a 2D array containing subarrays of triples

Questions:
- Is it all permutations? No, it's just in order from first to last
- What about 5 or more words? How many would there be there?

Data structures:
- single array containing all the words with 2 or more vowels
- 2D array containing all possible combinations of three words

Algorithm:
- dec and init an array of twoVowelStrings
- loop through words in string,
- check if there are at least two vowels in a substring
- if so, add that to the twoVowelStrings array
- if not, do nothing

- Dec/Init a solutionArray
- Check the length of the twoVowelStrings array. If 3 or more
- construct 2D array of all triple of words. // EXTRACT TO HELPER
*/
// function findTripleWithVowels(sentence) {
//   let twoVowelStrings = [];
//   let words = sentence.split(" ");
//   words.forEach(word => {
//     if (hasTwoVowels(word)) twoVowelStrings.push(word);
//   })
//   //console.log(twoVowelStrings);

//   let solutionArray = constructSolutionArray(twoVowelStrings);
//   return solutionArray;
// }

// function hasTwoVowels(string) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   string.split("").forEach(letter => {
//     if (vowels.includes(letter)) count++;
//   })
//   return (count > 1)
// }

// function constructSolutionArray(array) {
//   if (array.length < 3) {
//     return [];
//   }

//   let solutionArray = [];

//   for (let i = 0; i < array.length - 2; i++) {
//     for (let j = i + 1; j < array.length - 1; j++) {
//       for (let k = j + 1; k < array.length; k++) {
//         solutionArray.push([array[i], array[j], array[k]]);
//       }
//     }
//   }
//   // for (let array of solutionArray) {
//   //   console.log(array);
//   // }
//   return solutionArray;
// }

/*

HELPER FUNCTION:
Construct a 2D array of all the triple of words:

Problem:
Input: an array of 3 or more strings
Output: 2D array of different combinations of those elements...

Questions: How to do that...

A B C
A B D
A C D
B C D

A B C D E

ABC, ABD, ABE
ACD, ACE,
ADE

BCD BDE, BCE

CDE

RECURSIVE SOLUTION...?
- start at last subArr of 3, add to array
- move back one char to subArr of 4, return

Algorithm: nested for loops


- Check if the length of the inputted array is less than 3
- if so, return an empty array

- initialize a solutionArray to [];

- Check if the length of the inputted array is 3;

- nested for loop:
- outer index: start 0, end at 3rd to last char
  - inner index: start at 1 more than outer, end at 2nd to last
    - inner inner index start at 1 more than inner, end at last
      - push the i, j, and k element to the array...
*/
