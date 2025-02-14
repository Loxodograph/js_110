/*
Create function that takes array of numbers as an argument
For each number, determine how many numbers in the array
are smaller than it.
Place the answer in an array
Return Resulting array
Only count unique vowels

Create function smallerNumbersThanCurrent, takes array as argument

define variable unique numbers = to empty array
define variable finalArray = to empty array

for each number in array, if uniqueNumbers doesn't include number, push to
uniqueNumbers element in array

for each number in uniqueNumbers
  define variable count = 0
  for each remaining number in unique numbers
    if number > remaining number, add 1 to count
  add to finalArray count

return finalArray
*/

function smallerNumbersThanCurrent(array) {
  let uniqueNumbers = [];
  let finalArray = [];

  array.forEach(number => {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  });

  for (let idx = 0; idx < array.length; idx++) {
    let count = 0;
    for (let jdx = 0; jdx < uniqueNumbers.length; jdx++) {
      if (array[idx] > uniqueNumbers[jdx]) {
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