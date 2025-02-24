/*
Create function, take array of integers
return the integer that appears odd number of times
Only one such integer will appear in array

Algorithm
create function oddFellow takes array argument
create object numObj equal to empty obj
iterate over elements of array
  if key element is present in numObj
    increment by 1
  else
    key element is equal to 1
return entries of object filtered to value not evenly divisible by 2
*/

function oddFellow(array) {
  let numObj = {};
  for (let idx = 0; idx < array.length; idx++) {
    if (numObj[array[idx]]) {
      numObj[array[idx]]++;
    } else {
      numObj[array[idx]] = 1;
    }
  }
  return Number(Object.entries(numObj).filter(element => element[1] % 2 !== 0)[0][0]);
}

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);