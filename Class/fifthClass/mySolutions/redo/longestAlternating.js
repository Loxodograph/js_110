/*

Write a function that returns the maximum possible consecutive
alternating odd and even (or even and odd) numbers.
Minimum possible length is 2. If there’s none return [].

Problem:
  Create function, return max possible alternating odd & even
  consecutive numbers

  minimum length is 2.

  if not possible return empty array

  Input: Array of numbers
  Output: Array  representing longest possible alternating
    odd and even numbers consecutive in input array

Examples
  see below

Data Structures

Array, for iteration purposes
Array to return consecutive alternating

Test cases

Algorithm

Create function longestAlternatingSubArray which takes array as argument
Define variable longestConsecutive equal to empty array
define variable currentConsecutive equal to first element in array

iterate over elements of array argument
  if elements are alternating odd and even/even and odd
    append element to currentConsecutive
      if currentConsecutive is longer than longestConsecutive
        longestConsecutive equals a copy of currentConsecutive
  else
    currrentConsecutive equals empty array
return longestConsecutive
*/

function longestAlternatingSubarray(arr) {
  let longestConsecutive = [];
  let currentConsecutive = [arr[0]];

  for (let idx = 1; idx < arr.length; idx++) {
    if ((arr[idx - 1] % 2) !== (arr[idx] % 2)) {
      currentConsecutive.push(arr[idx]);
      if (currentConsecutive.length > longestConsecutive.length) {
        longestConsecutive = [...currentConsecutive];
      }
    } else {
      currentConsecutive = [arr[idx]];
    }
  }
  return longestConsecutive.length ? longestConsecutive : [];
}

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6]));
// Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5]));
// Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17]));
// Expected: [6, 7, 12, 11]