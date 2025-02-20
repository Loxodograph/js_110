// # Given an array of numbers, return true if at least 3 sets of 3 consecutive
// numbers are increasing order.

/*
Problem -
  Given an array of numbers return true if at least 3 sets of 3 consecutive numbers are increasing order

  [x, y, z, a] x < y y < z [x, y, z]. if y < z and z < a [y, z, a]
  return at least three. so if three, return true

  rules
    each set of consecutive numbers in increasing orders is counted
      a number can be counted twice.
  
data structures
variable count which will return true if 3 or greater
arrays, which will be iterated over.

algorithm
create function threeIncreasingSets which takes an array argument named inputArray
create 'count' variable set to 0
iterate over the element of inputArray
  if element 1 is less than element 2 AND element 2 is less than element 3
    increase count
  if count >= 3
    return true
return false

// Test cases
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false

*/

function threeIncreasingSets(inputArray) {
  let count = 0;
  for (let idx = 0; idx < inputArray.length; idx++) {
    if (inputArray[idx] < inputArray[idx + 1] &&
      inputArray[idx + 1] < inputArray[idx + 2]) {
      count++;
    }
    if (count >= 3) {
      return true;
    }
  }
  return false;
}
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false