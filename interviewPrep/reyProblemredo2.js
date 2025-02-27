/*
Your job is to write a function which increments a
string to create a new string.

If the string already ends with a number, the number should be incremented by 1.

If the string does not end with a number, the number 1
should be appended to the new string.

Problem
  Write a function that increments the numbers at the end of a string by One
  If string has no number at the end, append number 1 to end of string.

  Input: String
  Output: Modified string with incremented or appended number

  Rules:
    Explicit:
      Increment by 1
      Total number should be incremented, not just very last number
      append 1 if no number at end of string.

Datastructure
  Strings and Numbers

Examples
  foobar0 becomes foobar1, 0 incremented by 1
  foobar999 becomes foobar1000, 999 incremented by 1000
  1 becomes 2
  9 becomes 10

create function incrementString which takes string as argument
iterate over elements of string
  convert right slice of string to number
    if number is greater than or equal to zero (if element is number)
      append number to right slice
    else
      left slice is equal to all elements up to and including current index
  increment number by 1
  concatenate left slice and incremented right slice
  return concatenated string
*/

function incrementString(string) {
  let leftSlice = "";
  let rightSlice = [];
  for (let idx = string.length - 1; idx >= 0; idx--) {
    if (Number(string[idx]) >= 0) {
      rightSlice.unshift(string[idx]);
    } else {
      leftSlice = string.slice(0, idx + 1);
      break;
    }
  }
  return `${leftSlice}${(Number(rightSlice.join("")) + 1)}`;
}

console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"
console.log(incrementString("foobar123")); // "foobar124"