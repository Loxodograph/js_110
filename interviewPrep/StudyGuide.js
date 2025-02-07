/*
Problem: "reverse an array without using the built-in
  Array.prototype.reverse method"

  Input: Array
  Output: Array reversed

  Rules:
    Explicit: Do not use reverse method.
Examples and test cases
console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]

Algorithm
  Create function reverse which takes array as argument
    Create shallow copy of array
    create finalArray variable equal to empty array
      - while shallow copy has elements
        - add last element from shallow Copy to finalArray
*/

// function reverse(array) {
//   let copyArray = [...array];
//   let finalArray = [];

//   while (copyArray.length) {
//     finalArray.push(copyArray.pop());
//   }
//   return finalArray;
// }

// console.log(reverse([1, 2, 3, 4])); // [4, 3, 2, 1]


/*
Problem: select the element out of
the array if its index is a Fibonacci number
  Input: Array
  Output:element from array
Rules
  Explicit:
    Fibonacci number is number where
    number is equal to sum of 2 preceding numbers
Test Cases
  console.log(fibonacciSelect([1,2,3,4,5,6])) // [2,3,4,6];

Algorithm
create function isFibonacci which takes a number argument
  return false if number is less than zero
  initialize two variables, a and b, equal to 0 and 1 respectively
  while b is less than number
    initialize temporary variable equal to b
    b is equal to a + b
    a is equal to temporary
  return whether num equals 0 or b equals num

  create function fibonacciSelect which takes inputArray as parameter
    define variable finalArray
    iterate through the elements of inputArray
      if index isFibonacci, add element at index to finalArray
    return finalArray
*/

// function fibonacciSelect(inputArray) {
//   let finalArray = [];
//   inputArray.forEach((element, index) => {
//     if (isFibonacci(index)) {
//       finalArray.push(element);
//     }
//   });
//   return finalArray;
// }

// function isFibonacci(num) {
//   if (num < 0) {
//     return false;
//   }
//   let a = 0;
//   let b = 1;
//   while (b < num) {
//     const temp = b;
//     b = a + b;
//     a = temp;
//   }
//   return b === num || num === 0;
// }

// console.log(fibonacciSelect([1,2,3,4,5,6,7,8,9,10])); // [1,2,3,4,6,9];

/*
Problem: write a function that removes
  every other element from an array
  Input: Array
  Output: Array with elements removed

  rules
    explicit:
      remove every odd element of an array
test cases
console.log(remove([1,2,3,4,5])); // [1,3,5];

algorithm
  create function remove which takes array as argument
  return filtered array which selects only elements with even index
*/

function remove(array) {
  return array.filter((_, index) => {
    return index % 2 === 0;
  });
}

console.log(remove([1,2,3,4,5])); // [1,3,5];