/*
Create a function that takes array of integers as an argument
and returns an array of two numbers that are closest together
in value.

if there are multiple pairs, that are equally close, return the pair
that occurs first in the array

algorithm

create function closestNumbers which takes array as argument
define variable difference equal to infinity
iterate over elements of array
  iterate over remaining elements of array
    define variable currentDifference equal to difference between two elements
    if currentDifference is less than difference
      difference = currentDifference
return difference
*/

function closestNumbers(array) {
  let difference = Infinity;
  let finalArray = [];

  for (let idx = 0; idx < array.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < array.length; jdx++) {
      let currentDifference = Math.abs(array[idx] - array[jdx]);
      if (currentDifference < difference) {
        difference = currentDifference;
        finalArray = [array[idx], array[jdx]];
      }
    }
  }
  return finalArray;
}
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));