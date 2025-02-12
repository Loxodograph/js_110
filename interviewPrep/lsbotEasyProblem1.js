/*
Write a function that takes an array of numbers and returns a new
array where each number is replaced by the sum of its digits. For
example, given [123, 4, 56, 78], the function should return [6, 4, 11, 15].

create function digitSum which takes an array as argument
  return map digit in the array
     let digitArray = string version of digit split to each char
    return reduce digitArray to numberversion of each element, start count at 0
*/

function digitSum(array) {
  return array.map(digit => {
    let digitArray = String(digit).split("");
    return digitArray.reduce((total, element) => total + Number(element), 0);
  });
}

console.log(digitSum([123,4,56,78]));