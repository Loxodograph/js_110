/*
Problem:
Create a function that takes an array of integers as an argument and returns an
array of two numbersthat are closest together in value. If there are multiple
pairs that are equally close, return the pair that occurs first in the array.

Input: take array of integers
Output: return two numbers closest together in value

Rules
  Explicit:
    - If multiple pairs are equally close:
      - return the pair that occurs first in the array
  Implicit:

Data Structures
Arrays

5, 25, 15, 11, 20

5 - 25
-20
5 - 15
-10
5 - 11
-6
5 - 20
-15

25 - 15
10
25 - 11
14
25 -20
5

15 - 11
4
15 - 20
-5

11 - 20
-9

15, 11

I can use Math.abs to find absolute difference

Algorithm
Creature function Closest Numbers, accepting array as argument
  define variable finalArray equal to empty array
  define variable lowestDifference = absolute value of first two elements
  subtracted;

  define currentDiff = 0

  iterate over elements of input array until second to last
    iterate over elements of input array from next element until last
      let difference equal the absolute difference between
        element1 and element 2
      if difference < lowestDifference
        lowestDifference = difference
        finalArray = [element1, element2]
  return finalArray

*/
function closestNumbers(inputArray) {
  let finalArray = [];
  let lowest = Math.abs(inputArray[0] - inputArray[1]);
  let currentDiff = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      currentDiff = Math.abs(inputArray[i] - inputArray[j]);
      if (currentDiff < lowest) {
        lowest = currentDiff;
        finalArray = [inputArray[i], inputArray[j]];
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