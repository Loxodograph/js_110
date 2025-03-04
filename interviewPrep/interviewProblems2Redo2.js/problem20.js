/*
Create a function that takes an array of numbers, all of which are
the same except one. Find and return the number in the array that
differs from all the rest.

The array will always contain at least 3 numbers, and there
will always be exactly one number that is different.

Problem
  Create function that returns the unique number in the array
  Rules
    Explicit
      Array will always contain at least three numbers
        one Number will be different

Algorithm
  Create function whatIsDifferent which takes array argument
  Iterate over elements of array
    if element index is equal to last index of element
      return element
*/

function whatIsDifferent(array) {
  for (num of array) {
    if (array.indexOf(num) === array.lastIndexOf(num)) {
      return num;
    }
  }
}
const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);