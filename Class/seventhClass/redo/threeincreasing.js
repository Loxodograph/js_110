/*
Given an array of numbers,
return true if at least 3 sets of 3 consecutive numbers are increasing order.

Problem:
  Create function which returns true
    if at least 3 sets
      of 3 consecutive numbers
        are in increasing order

  Input : Array of numbers
  Output: Boolean determining if 3 sets of 3 consec numbers are increasing order

  Rules:
    Implicit :
      increasing order just means increasing, doesnt mean increasing by 1

examples
  see below

Data structure
  arrays

algorithm

create function threeIncreasingSets which takes array argument
define variable count which is equal to 0
iterate over elements of array until third to last
  if element and next two elements are in increasing order
    increment count
return count greater than three
  */

function threeIncreasingSets(nums) {
  let count = 0;
  for (let idx = 0; idx < nums.length - 2; idx++) {
    if (nums[idx] < nums[idx + 1] && nums[idx + 1] < nums[idx + 2]) {
      count++;
      if (count >= 3) {
        break;
      }
    }
  }
  return count >= 3;
}

// Test cases
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false
