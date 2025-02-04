/*
Problem Statement:

Write a higher-order function called processNumbers that takes:

    An array of numbers
    A callback function that processes each number

The function should return a new array with the processed numbers.

Test Cases

function square(num) {
  return num ** 2;
}

function double(num) {
  return num * 2;
}

console.log(processNumbers([1, 2, 3, 4], square));
// Expected output: [1, 4, 9, 16]

console.log(processNumbers([5, 10, 15], double));
// Expected output: [10, 20, 30]
*/
function processNumbers(numberArray, operation) {
  return numberArray.map(number => operation(number));
}
function square(num) {
  return num ** 2;
}

function double(num) {
  return num * 2;
}

console.log(processNumbers([1, 2, 3, 4], square));
// Expected output: [1, 4, 9, 16]

console.log(processNumbers([5, 10, 15], double));
// Expected output: [10, 20, 30]