// Given an array of numbers, return all pairs whose sum is odd. Return an empty array if no such pairs exist.
/*
return all pairs whose sum is odd. empty array if none is odd

input: array
output: nested array

algorithm

create function oddSumPairs which takes array argument
create variable finalArray equal to empty array
iterate over elements of array
  iterate over remaining elements of array
  if sum of both elements is odd
    add both elements as array to final array

return finalArray
  */

function oddSumPairs(array) {
  let finalArray = [];
  for (let idx = 0; idx < array.length - 1; idx++) {
    for (let j = idx + 1; j < array.length; j++) {
      if ((array[idx] + array[j]) % 2 !== 0) {
        finalArray.push([array[idx], array[j]]);
      }
    }
  }
  return finalArray;
}
// Test cases
console.log(oddSumPairs([1, 2, 3, 4])); // [[1, 2], [1, 4], [2, 3], [3, 4]]
console.log(oddSumPairs([2, 4, 6, 8])); // []
console.log(oddSumPairs([1, 3, 5])); // []
console.log(oddSumPairs([10, 11])); // [[10, 11]]