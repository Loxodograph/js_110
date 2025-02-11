/*
Problem
  - create function takes array of integers as argument
  - return integer that appears odd number of times
  - always exactly one such integer
Data structure
object?

algorithm
  - create function oddFellow takes array
  - create empty object resultObj
  - for each element in array
    - if resultObj contains key element
      resultobj at key element ++
    - else resultObj at key element = 1;
  - create array of keys and values in object
  - iterate through array
    - if value is odd, return key
*/

function oddFellow(array) {
  let resultObj = {};
  let oddKey;
  for (let idx = 0; idx < array.length; idx++) {
    if (resultObj[array[idx]]) {
      resultObj[array[idx]]++;
    } else {
      resultObj[array[idx]] = 1;
    }
  }
  let keyValues = Object.entries(resultObj);

  for (let idx = 0; idx < keyValues.length; idx++) {
    let [key, value] = keyValues[idx];
    if (value % 2 !== 0) {
      oddKey = Number(key);
    }
  }
  return oddKey;
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);