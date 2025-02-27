/*
Write a function that rotates an array by moving a specified
number of elements from the beginning to the end

if the number is negative move elements from the end
to the beginning
*/


function rotateArray(arr, k) {
  let count = 0;
  if (!arr.length) {
    return [];
  }
  if (k < 0) {
    while (count > k) {
      arr.unshift(arr.pop());
      count--;
    }
  }
  while (count < k) {
    arr.push(arr.shift());
    count++;
  }
  return arr;
}

console.log(JSON.stringify(rotateArray([1, 2, 3, 4, 5], 2)) === JSON.stringify([3, 4, 5, 1, 2]));
console.log(JSON.stringify(rotateArray([1, 2, 3, 4, 5], -1)) === JSON.stringify([5, 1, 2, 3, 4]));
console.log(JSON.stringify(rotateArray([1, 2, 3], 5)) === JSON.stringify([3, 1, 2]));
console.log(JSON.stringify(rotateArray([], 3)) === JSON.stringify([]));
console.log(JSON.stringify(rotateArray([1], 0)) === JSON.stringify([1]));