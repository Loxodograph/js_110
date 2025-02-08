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

// function remove(array) {
//   return array.filter((_, index) => {
//     return index % 2 === 0;
//   });
// }

// console.log(remove([1,2,3,4,5])); // [1,3,5];


// Next Bigger

// console.log(nextBiggerNum(12));
// console.log(nextBiggerNum(2017));
// console.log(nextBiggerNum(9));
// console.log(nextBiggerNum(111));
// console.log(nextBiggerNum(123456789));

// function nextBiggerNum(num) {
//   let nextBigger = num;

//   while (true) {
//     if (String(nextBigger).length !== String(num).length) {
//       return -1;
//     }
//     nextBigger++;
//     if (String(num).split("").sort().join("") === String(nextBigger).split("").sort().join("")) {
//       return nextBigger;
//     }
//   }
// }


// Write a function scramble(str1, str2) that returns true
// if a portion of str1 characters can be rearranged to match str2

/*
algorithm
  create function scramble, defining str1 and str2 as parameters
    convert str1 to array
    convert str2 to array
    iterate over elements of string 2
      if str1 includes element
        splice out element from string one
      else
        return false
    return true
*/

function scramble(str1, str2) {
  let str1Array = str1.split("");
  let str2Array = str2.split("");
  for (let idx = 0; idx < str2Array.length; idx++) {
    if (str1Array.includes(str2Array[idx])) {
      str1Array.splice(str1Array.indexOf(str2Array[idx]), 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble("javass", "jjss") === false); // true
console.log(scramble("rkqodlw", 'world') === true); // true
console.log(scramble('katas', 'steak') === false); // true
console.log(scramble('scriptjava', 'javascript') === true); // true
console.log(scramble('scriptingjava', 'javascript') === true); // true