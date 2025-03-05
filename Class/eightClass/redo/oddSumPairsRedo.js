/*
Given an array of numbers, return all pairs whose sum is odd.
Return an empty array if no such pairs exist.

Problem
  Create function that returns all pairs of numbers whose sum is odd
  if no such pair exists, return empty array

Examples,
1, 2, 3, 4
1 + 2 = 3
1 + 4 = 5
2 + 3 = 5
3 + 4 = 7

// Test cases
console.log(oddSumPairs([1, 2, 3, 4])); // [[1, 2], [1, 4], [2, 3], [3, 4]]
console.log(oddSumPairs([2, 4, 6, 8])); // []
console.log(oddSumPairs([1, 3, 5])); // []
console.log(oddSumPairs([10, 11])); // [[10, 11]]

Data Structure
Input array to be iterated over
Nested array which will be returned containing odd sum pairs

algorithm

define variable oddPairs equal to empty array
iterate over elements of input array
  iterate over remaining elements of input array
    if both elements sum is odd
      push elements as array to oddPairs
return oddPairs
*/

function oddSumPairs(arrayOfNums) {
  let oddPairs = [];
  for (let start = 0; start < arrayOfNums.length; start++) {
    for (let end = start + 1; end < arrayOfNums.length; end++) {
      if ((arrayOfNums[start] + arrayOfNums[end]) % 2 !== 0) {
        oddPairs.push([arrayOfNums[start], arrayOfNums[end]]);
      }
    }
  }
  return oddPairs;
}
console.log(oddSumPairs([1, 2, 3, 4])); // [[1, 2], [1, 4], [2, 3], [3, 4]]
console.log(oddSumPairs([2, 4, 6, 8])); // []
console.log(oddSumPairs([1, 3, 5])); // []
console.log(oddSumPairs([10, 11])); // [[10, 11]]