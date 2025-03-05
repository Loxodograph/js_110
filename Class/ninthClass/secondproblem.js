// Given an array of integers, find the longest consecutive slice where all
// elements are equal. Return an empty array if no such slice
// exists (minimum length 2).

/*
Problem

Create function which finds longest consecutive slices of equal elements.
Minimum length 2

data structures
Arrays

Algorithm
create variable currentConsecutive equal to first element of array
create variable longestConsecutive equal to empty array
iterate over element of array
  if element is included in currentConsecutive
    push element to currentConsecutive
    if currentConsecutive is longer than LongestConsecutive
      longestConsecutive equals copy of currentConsecutive
  else currentConsecutive equals array containing element
*/

function longestEqualSlice(arrayOfNums) {
  let currentConsecutive = [arrayOfNums[0]];
  let longestConsecutive = [];

  for (let idx = 1; idx < arrayOfNums.length; idx++) {
    if (currentConsecutive.includes(arrayOfNums[idx])) {
      currentConsecutive.push(arrayOfNums[idx]);
      if (currentConsecutive.length > longestConsecutive.length) {
        longestConsecutive = [...currentConsecutive];
      }
    } else {
      currentConsecutive = [arrayOfNums[idx]];
    }
  }
  return longestConsecutive;
}

// Test cases
console.log(longestEqualSlice([1, 1, 1, 2, 3, 3])); // [1, 1, 1]
console.log(longestEqualSlice([2, 3, 4, 4, 5])); // [4, 4]
console.log(longestEqualSlice([1, 2, 3, 4])); // []
console.log(longestEqualSlice([5, 5, 5, 5])); // [5, 5, 5, 5]