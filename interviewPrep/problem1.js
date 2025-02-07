/*
Problem
  - Create a function that takes an array of numbers as an argument.
    For each number, determine how many numbers in the array are smaller
    than it, and place the answer in an array.
    Return the resulting array.

  - Input: 2 Arrays
  - Output: an array containing numbers

  - Rules
    - Explicit:
      - Determine amount of numbers smaller than each number in the array
      - return resulting array

    - Implicit:

  - Questions

Examples and Test Cases

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));
// All print true
Data Structures

Algorithm
create function smallerNumbersThanCurrent which takes an array
  of numbers as argument
  define variable finalArray equal to empty array
  iterate through elements of array
    iterate through elements of array
      if element 1 > element 2
        - if (!resultObj[element1][element2])
          - resultObj[element1][element2] = 1;
  for each key in resultObj
    finalArray.push(Object.values(resultObj[key]).length);
  return finalArray

Code
*/

function smallerNumbersThanCurrent(array) {
  let count = 0;
  let finalArray = [];
  let uniqueNums = [];
  array.forEach(number => {
    if (!uniqueNums.includes(number)) {
      uniqueNums.push(number);
    }
  });

  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j < uniqueNums.length; j++) {
      let element1 = array[i];
      let element2 = uniqueNums[j];
      if (element1 > element2) {
        count += 1;
      }
    }
    finalArray.push(count);
    count = 0;
  }
  return finalArray;
}


const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));