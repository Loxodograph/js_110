/*
Create a function that takes a nested array of arbitrary depth and
returns a flattened version of the array. For example,
[1, [2, [3, 4], 5]] should become [1, 2, 3, 4, 5].

simple way
array.flat(Infinity)

without flat
create flatArray function that takes array as argument
define variable finalArray = to empty array
define variable stack equal to copy of array.

while stack has length
  - define variable current equal to first element of array
  - if current is an array
    - re add copy of current to front of array
  - else push current to finalArray

*/

function flatArraySimple(array) {
  return array.flat(Infinity);
}

function flatArray(array) {
  let finalArray = [];
  let stack = [...array];

  while (stack.length) {
    let current = stack.shift();
    if (Array.isArray(current)) {
      stack.unshift(...current);
    } else {
      finalArray.push(current);
    }
  }
  return finalArray;
}
console.log(flatArraySimple([1, [2, [3, [4]]], 5]));

console.log(flatArray([1, [2, [3, [4]]], 5]));