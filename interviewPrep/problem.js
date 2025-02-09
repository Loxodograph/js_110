/*
Your job is to write a function which increments a string to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.
*/

// console.log(incrementString("foobar0")); // "foobar1"
// console.log(incrementString("foobar999")); // "foobar1000"
// console.log(incrementString("foo")); // "foo1"
// console.log(incrementString("foobar1")); // "foobar2"
// console.log(incrementString("1")); // "2"
// console.log(incrementString("9")); // "10"
// console.log(incrementString("fo99obar99")); // "fo99obar100"

/*
Your job is to write a function which increments a string to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.
*/

// console.log(incrementString("foobar0")); // "foobar1"
// console.log(incrementString("foobar999")); // "foobar1000"
// console.log(incrementString("foo")); // "foo1"
// console.log(incrementString("foobar1")); // "foobar2"
// console.log(incrementString("1")); // "2"
// console.log(incrementString("9")); // "10"
// console.log(incrementString("fo99obar99")); // "fo99obar100"

/*
Problem - Write a function that increments a string, creating a new string
Input - a string
output - string, with final number incremented by 1 (or 1 added to end of string if no final number exists)

(typeof (string[string.length - 1] - 0)) === 'number' && !Number.isNaN(string[string.length - 1] - 0))

foobar0 - foobar1
type of "0" string
"0" - 0 = 0
"b" - 0 = NaN

a
create function incrementString, which accepts a string as an argument
define variable slice;
define variable finalNum = 1;
define variable index = 0

iterate over the elements of the string
  slice the string from element to end
    check if slice is a Number
      if slice is a number
       final Number = slice
*/


// function incrementString(string) {
//   let slice;
//   let finalNum = 1;
//   let index;
//   for (let i = 0; i < string.length; i++) {
//     slice = string.slice(i);
//     if (Number(slice) || (slice - 0 === 0)) {
//       finalNum = Number(slice) + 1
//       index = i;
//       break;
//     }
//   }
//   if (Number(string)) {
//     return finalNum;
//   } else if (index === 0) {
//     return string.slice(index) + finalNum;
//   } else {
//     return string.slice(0, index) + finalNum;
//   }
//   // console.log(string.slice(0,index) + finalNum);
// }

// console.log(incrementString("foobar0")); // "foobar1"
// console.log(incrementString("foobar999")); // "foobar1000"
// console.log(incrementString("foo")); // "foo1"
// console.log(incrementString("foobar1")); // "foobar2"
// console.log(incrementString("1")); // "2"
// console.log(incrementString("9")); // "10"
// console.log(incrementString("fo99obar99")); // "fo99obar100"


function incrementString(str) {
  let i = str.length - 1;

  // Find the start of the number at the end of the string
  while (i >= 0 && str[i] >= '0' && str[i] <= '9') {
    i--;
  }

  let prefix = str.slice(0, i + 1);
  let numStr = str.slice(i + 1);

  if (numStr === "") {
    return str + "1";
  }

  let num = parseInt(numStr, 10) + 1;
  let numLength = numStr.length;
  let incrementedNum = num.toString();

  // Preserve leading zeros
  while (incrementedNum.length < numLength) {
    incrementedNum = "0" + incrementedNum;
  }

  return prefix + incrementedNum;
}


console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"
