/*
Problem
  Create function that takes an array of integers as an argument
  Determine and return, index N

  index N is the index for which all numbers less than N equal
  all numbers greater than N

  If no index exists, return -1

  return smallest index if multiple correct answers exist

  Sum of numbers left of index 0 is 0. Sum of numbers right of index 0
  is 0.

  Input: Array of numbers
  Output: Number representing index N

  Data structures
    Arrays

create function sum which takes array argument
  return reduction of array to get sum

create function equalSumIndex which takes array argument
  iterate over elements of array
    create leftSlice variable equal elements up to index
    create rightSlice variable equal to elements right of index
    if sum of leftSlice equals sumOf right slice
      return index
  return false

*/

function equalSumIndex(array) {
  for (let idx = 0; idx < array.length; idx++) {
    let leftSlice = array.slice(0, idx + 1);
    let rightSlice = array.slice(idx);
    if (sum(leftSlice) === sum(rightSlice)) {
      return idx;
    }
  }
  return -1;
}
function sum(array) {
  return array.reduce((sum, element) => sum + element, 0);
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);