/*
Write a function that compares two objects deeply.
The function should return true if the objects have
the same structure and values, even if they are nested.
Arrays should be treated as objects.
*/

function deepEqual(obj1, obj2) {
  // Your code here
}

console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2}));
// true

console.log(deepEqual({a: 1, b: 2}, {b: 2, a: 1}));
// true

console.log(deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 3}}));
// true

console.log(deepEqual({a: 1, b: {c: 3}}, {a: 1, b: {c: 4}}));
// false

console.log(deepEqual([1, 2, [3, 4]], [1, 2, [3, 4]]));
// true

console.log(deepEqual([1, 2, [3, 4]], [1, 2, [3, 5]]));
// false