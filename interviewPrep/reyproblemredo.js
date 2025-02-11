/*
Your job is to write a function which increments a
string to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1
should be appended to the new string.

Input: string
Output: string with number incremented

Rules
  Explicit - Increment number by 1 if string ends in number
           - otherwise, add 1 to end of string
           - only increment numbers that occur at the end of a string

Algorithm
create function incrementString takes string argument
iterate through elements of string backwards
  if string character code is between 0 and 9
  define variable rightSlice equal to string length - index
  coerce rightSlice into number, increment by one;
  define variable leftSlice equal to string length until index
  return rightSlice to left Slice

*/

function incrementString(str) {
  let number = [];
  let index = 0;

  for (let idx = str.length - 1; idx >= 0; idx--) {
    if (str[idx] >= "0" && str[idx] <= "9") {
      number.unshift(str[idx]);
    } else {
      index = idx;
      break;
    }
  }
  if (number.length === 0) {
    number = 1;
  } else {
    number = Number(number.join("")) + 1;
  }
  let leftSlice = str.slice(0, index + 1);
  return Number(leftSlice) ? Number(leftSlice) + 1 : leftSlice + number;
}

console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foobar123")); // "foobar124"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"