/*
Create a function that takes an array of integers as ana rgument and returns an
array of two numbers that are closest together in value
Return the first pair if multiple pairs are equally close

Input:Array of numbers
Output: array of numbers closest together in value

examples
see below

data structures
arrays
numbers

algorithm
create function closestNumbers which takes array of numbers argument
define variable difference equal to infinity
define variable finalArray = to empty array
iterate over each value in array
  iterate over remaining values in array
    if absolute difference between two elements is less than difference
      finalArray equals two elements in array
      difference equals absolute difference between two elements
return finalarray
*/

function closestNumbers(arrayOfNums) {
  let difference = Infinity;
  let finalArray = [];
  for (let first = 0; first < arrayOfNums.length - 1; first++) {
    for (let next = first + 1; next < arrayOfNums.length; next++) {
      if (Math.abs(arrayOfNums[first] - arrayOfNums[next]) < difference) {
        finalArray = [arrayOfNums[first], arrayOfNums[next]];
        difference = Math.abs(arrayOfNums[first] - arrayOfNums[next]);
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