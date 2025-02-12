/*
Write a function that takes a nested array and an optional depth
parameter. The function should flatten the array up to the
specified depth. If no depth is provided, it should fully flatten the array.

attempt without using flat method

while stack has elements

Examples

console.log(flattenArray([1, [2, [3, [4]], 5]]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([1, [2, [3, [4]], 5]], 1));
// [1, 2, [3, [4]], 5]

console.log(flattenArray([1, [2, [3, [4]], 5]], 2));
// [1, 2, 3, [4], 5]

console.log(flattenArray([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]

Data Structure
Arrays

Brainstorm

[1, [2, [3, [4]], 5]] - flattened to depth 1
[1, 2, [3, [4]], 5]

elements to be flattened, depths
[1 , [2...], 5] 0
[2, [3..]] 1 ***
[3, [4]] 2
[4] 3

[1, [2, [3, [4]], 5]] - flattened to depth 2
[1, 2, 3, [4], 5]

elements to be flattened, depth
[1, [2..], 5] 0
[2, [3..]] 1
[3, [4]] 2 ***
[4] 3


Algorithm

create function flattenArray, takes array argument and depth argument.
                                            Default depth to infinity
  define variable flatArray = [..array];
  define variable stack = to copy of array

  while depth > 0
    let stack = flatArray.pop();
    flatArray.concat(stack)

*/

// function flattenArray(array, depth = 5) {
//   let flatArray = [...array];
//   let element = flatArray.length - 1;
//   while (depth > 0) {
//     if (!Array.isArray(flatArray[element])) {
//       element--;
//     } else {
//       let stack = flatArray.splice(element, 1);
//       flatArray.concat(stack);
//       depth--;
//     }

//   }
//   return flatArray;
// }

console.log(flattenArray([1, [2, [3, [4]], 5]]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([1, [2, [3, [4]], 5]], 1));
// [1, 2, [3, [4]], 5]

console.log(flattenArray([1, [2, [3, [4]], 5]], 2));
// [1, 2, 3, [4], 5]

console.log(flattenArray([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]