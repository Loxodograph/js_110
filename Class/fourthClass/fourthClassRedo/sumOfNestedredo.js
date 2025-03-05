// Write a function that calculates the sum of all numbers in a nested array.
// The array may contain integers, nested arrays of integers, or a mix of
// both. (for ruby and JS don’t use flatten)

/*
Problem
  create function that returns sum of all numbers in nested array
  Cannot use flatten

Algorithm
create function sumOfNestedArray which takes nestedArray argument
create variable stack equal to copy of array
create variable totalSum equal to zero
while stack has length
  create variable register equal to last element of stack, removed from stack
  if register is array
    add a spread of register to stack
  else
    add element to totalSum
return totalSum
*/

function sumOfNestedArray(nestedArray) {
  let stack = [...nestedArray];
  let totalSum = 0;
  while (stack.length) {
    let register = stack.pop();
    if (Array.isArray(register)) {
      stack.push(...register);
    } else {
      totalSum += register;
    }
  }
  return totalSum;
}
// Test cases
console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150