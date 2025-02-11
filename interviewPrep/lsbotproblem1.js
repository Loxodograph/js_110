/*
Write a function that takes an array of numbers and returns a new
array where each element is the result of multiplying the
corresponding element in the input array by its index.

*/

function multiplyByIndex(arr) {
  return arr.map((element, idx) => element * idx);
}

console.log(multiplyByIndex([1, 2, 3, 4]));       // [0, 2, 6, 12]
console.log(multiplyByIndex([4, 7, 3, 9, 1]));    // [0, 7, 6, 27, 4]
console.log(multiplyByIndex([]));                 // []