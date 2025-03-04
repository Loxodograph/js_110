/*
Create a function that takes an array of integers as an argument and returns
the integer that appears an odd number of times. There will always be exactly
one such integer in the input array.

Problem
  Create function returns integer that appears odd number of times

  Rules
    Explicit
      Only one integer will appear odd numbers of times

Examples

data structures
  Object to count frequency

Algorithm
create variable resultObj equal to empty object
iterate over elements of array
  if resultObj contains key current element
    increment by one
  else
    key current element equals 1
iterate over entries of resultObj
  if value is odd
    return key
*/

function oddFellow(array) {
  let resultObj = {};

  for (let idx = 0; idx < array.length; idx++) {
    resultObj[array[idx]] = (resultObj[array[idx]] || 0) + 1;
  }
  for (let num in resultObj) {
    if (resultObj[num] % 2 !== 0) {
      return Number(num);
    }
  }
}
const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);