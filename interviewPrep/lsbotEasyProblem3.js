/*
Write a function that takes an object where the values are arrays of
numbers. The function should return a new object with the same keys,
but each value should be the average of the numbers in the original array.

create function averageObject which takes object argument
define variable resultObj = empty obj
iterate over keys in object
  resultObj[key] = reduction of object[key]
return resultObj

let obj = {
  a: [2, 2, 6, 4],
  b: [6, 6, 12],
}
*/

function averageObject(object) {
  let resultObj = {};

  for (let key in object) {
    resultObj[key] =
    object[key].reduce((sum, element) => sum + element, 0) / object[key].length;
  }
  return resultObj;
}

let obj = {
  a: [2, 2, 6, 4],
  b: [6, 6, 12],
};

console.log(averageObject(obj));
