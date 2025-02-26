/*
Given an array of numbers, and a segment length k
reverse every consecutive segment of k elements
if last segment is shorter than k leave it unchanged

input: Array, and number k representing consecutive segment
output: array with some elements reversed

[1,2,3,4,5,6] 3 [3,2,1,6,5,4]
[1,2,3,4,5] 2 [2,1,4,3,5]

data structures
arrays to iterate over

algorithm

create function reverseSegments which takes an array and number k as argument
create finalArray variable set to empty array
iterate over elements of input array, increasing by k
  if index + k is greater than the length of the array
    make slice of k length starting at index
    add slice to final array
  else make reversed slice of k length starting at index
    add slice to final array
return finalArray
*/
function reverseSegments(array, k) {
  let finalArray = [];
  for (let idx = 0; idx < array.length; idx += k) {
    if (idx + k > array.length) {
      let slice = array.slice(idx, idx + k);
      finalArray.push(...slice);
    } else {
      let slice = array.slice(idx, idx + k).reverse();
      finalArray.push(...slice);
    }
  }
  return finalArray;
}

console.log(reverseSegments([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4]
console.log(reverseSegments([1, 2, 3, 4, 5], 2)); // [2, 1, 4, 3, 5]
console.log(reverseSegments([7, 8, 9], 4)); // [7, 8, 9]
console.log(reverseSegments([1, 2, 3, 4], 2)); // [2, 1, 4, 3]