/*
Create a function that takes an array of numbers as an argument.
For each number, determine how many numbers in the array are smaller
than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a
number occurs multiple times in the array, it should only be counted once.

Problem
  Create a function that takes array of numbers as argument
  For each number, determine how many numbers in the array are smaller
  place the answer in an array

  resulting the resulting array

  Only count unique numbers

  8 1 2 2 3 - 3 (1 2 3) 0 1 (1) 1 (1) 2 (2 1)

algorithm
  create function smallerNumbersThanCurrent which takes array of numbers
    as argument
  create variable finalArray
  create array containing only unique numbers
  iterate over original array
    create count variable
    iterate over unique numbers array
      if element in unique numbers is less than element in original
        increase count
    push count to finalArray
  return finalArray
*/

function smallerNumbersThanCurrent(arrayOfNums) {
  let finalArray = [];
  let uniqueNums = [];
  arrayOfNums.forEach(number => {
    if (!uniqueNums.includes(number)) {
      uniqueNums.push(number);
    }
  });
  for (let i = 0; i < arrayOfNums.length; i++) {
    let count = 0;
    for (let j = 0; j < uniqueNums.length; j++) {
      if (arrayOfNums[i] > uniqueNums[j]) {
        count++;
      }
    }
    finalArray.push(count);
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