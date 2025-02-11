/*
Problem
  - create function takes array of integers as argument
  - Return the index N for which all numbers
    with index less than N, sums to the sum of all numbers
    with index greater than N.
  - If no index possible return -1

algorithm
  - create function equalSumIndex
    - iterate over elements of array
      - let leftSlice = elements from 0 to index
        let rightSlice = length Of Array - index
      - if reductuion of leftSlice equals reduction
        of rightSlice
          return index
  - return -1
*/

function equalSumIndex(array) {
  for (let idx = 0; idx < array.length; idx++) {
    let leftSlice = array.slice(0, idx + 1);
    let rightSlice = array.slice(idx);
    let leftSum = leftSlice.reduce((total, number) => total + number, 0);
    let rightSum = rightSlice.reduce((total, number) => total + number, 0);
    if (leftSum === rightSum) {
      return idx;
    }
  }
  return -1;
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// // The following test case could return 0 or 3. Since we're
// // supposed to return the smallest correct index, the correct
// // return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);