/*
Create a function that returns the count of distinct
case-insensitive alphabetic characters and numeric digits that
occur more than once in the input string.
You may assume that the input string contains only
alphanumeric characters.

Problem :
  Create function that returns number of unique alphanum characters
  that appear multiple times in the string
  Rules
    explicit
      string will only contain alphanumeric characters
Examples
  See below

Data Structure
strings

algorithm
create function distinctMultiples which takes string argument
create variable finalArr = to empty array
iterate over the elements of input string
  if elements index is not equal to elements last index (element is not unique)
    if element is not present in finalArray
      push to finalArray
return finalArray length
*/

function distinctMultiples(str) {
  str = str.toLowerCase();
  let finalArray = [];
  for (let idx = 0; idx < str.length; idx++) {
    if (str.indexOf(str[idx]) !== str.lastIndexOf(str[idx])) {
      if (!finalArray.includes(str[idx])) {
        finalArray.push(str[idx]);
      }
    }
  }
  return finalArray.length;
}
const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5