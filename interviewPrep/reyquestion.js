/*
Given a grid of values represented by an array of arrays, e.g.:
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]

Return the largest sum of a column of values in the grid.
In this example, the largest sum is 18.

[a1, b1, c1]
[a2, b2, c3]
[a3, b3, c3]

Problem
  return the largest sum of a column in an array grid
    a column all the elements in different arrays with same index
  - arrays are nested

  Input: nested array
  output: integer representing largest sum of a column in a grid

Data structure
Arrays, to iterate over and total a sum

[1, 2, 3] [4, 5, 6] [7, 8, 9] -> length of 3

create function largestColumn which takes a nested array argument
define variable largestSum equal to 0
define variable currentSum equal to 0

iterate over the elements of first nested array
  iterate over the elements of grid
  add current element to currentSum

  if currentSum is greater than largestSum
    largestSum is equal to currentSum
    currentSum is equal to 0


return largestSum
*/

function largestColumn(grid) {
  let largestSum = 0;
  let currentSum = 0;

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid.length; j++) {
      currentSum += grid[j][i];
    }
    if (currentSum > largestSum) {
      largestSum = currentSum;
      currentSum = 0;
    }
  }
  return largestSum;
}

// TEST CASES
let a = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

let b = [[1, 2, 3, 4],
[5, 6, 7, 8]];

let c = [[1, 0, 0],
[5, 8, 10],
[3, 5, 1]];

let d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(largestColumn(a) === 18);
console.log(largestColumn(b) === 12);
console.log(largestColumn(c) === 13);
console.log(largestColumn(d) === 18);