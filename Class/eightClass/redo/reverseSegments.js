// Given an array of numbers and a segment length k,
// reverse every consecutive segment of k elements.
// If the last segment is shorter than k, leave it unchanged.

/*
Problem
  Create function which returns an array
  Reverse every consecutive segment of K elements.
  If last segment is shorter than K, do not change

  Input: Array of numbers and number k which represents length of segment
  Output: Array of numbers with segments reversed

Examples
[1,2,3,4,5,6] k = 3
[3,2,1,6,5,4]

[1,2,3,4,5] k = 2
[2,1,4,3,5]

[7,8,9] k = 4
[7,8,9]

[1,2,3,4] k = 2
[2,1,4,3]

Data structures
Arrays to iterate over
Array to be returned containing reversed segment

Algorithm
Create function reverseSegments which takes array and integer argument
define variable reversedArray equal to empty array
iterate over elements of inputArray which increments by k elements
  create slice of k element length
  if slice is at least k elements long
    reverse slice
    add slice to reversedArray
  else
    add slice to reversedArray
return reversedArray
*/

function reverseSegments(array, count) {
  let reversedArray = [];

  for (let idx = 0; idx < array.length; idx += count) {
    let slice = array.slice(idx, idx + count);
    if (slice.length === count) {
      reversedArray.push(...slice.reverse());
    } else {
      reversedArray.push(...slice);
    }
  }
  return reversedArray;
}

// Test cases
console.log(reverseSegments([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4]
console.log(reverseSegments([1, 2, 3, 4, 5], 2)); // [2, 1, 4, 3, 5]
console.log(reverseSegments([7, 8, 9], 4)); // [7, 8, 9]
console.log(reverseSegments([1, 2, 3, 4], 2)); // [2, 1, 4, 3]