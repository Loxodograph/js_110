/*
Write a function that takes a nested array and an optional depth
parameter. The function should flatten the array up to the
specified depth. If no depth is provided, it should fully flatten the array.

create function flattenArray takes depth, and arr arguments
define finalArray = empty array
define stack equal to last element of array

while stack has elements

*/

function flattenArray(arr, depth = Infinity) {
  let result = [];
  const stack = arr.map(item => [item, depth]);

  while (stack.length > 0) {
    const [current, currentDepth] = stack.pop();

    if (Array.isArray(current) && currentDepth > 0) {
      stack.push(...current.map(item => [item, currentDepth - 1]));
    } else {
      result.unshift(current);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, [3, [4]], 5]]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([1, [2, [3, [4]], 5]], 1));
// [1, 2, [3, [4]], 5]

console.log(flattenArray([1, [2, [3, [4]], 5]], 2));
// [1, 2, 3, [4], 5]

console.log(flattenArray([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]