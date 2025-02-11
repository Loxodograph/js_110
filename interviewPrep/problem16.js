/*
P
  - create function returns count of distinct case-insentive characters and
    digits that occur more than once in string

Input : String
Output : Number

Data structure, array and strings and numbers

algorithm
create function distinctMultiples which takes string argument
define variable duplicateArray
iterate through elements of string
  if index of element is not equal to last index of element
    push element to duplicateArray
return duplicateArray.length
*/

function distinctMultiples(string) {
  let str = string.toLowerCase();
  let duplicateArray = [];
  for (let idx = 0; idx < str.length; idx++) {
    if (str.indexOf(str[idx]) !== str.lastIndexOf(str[idx]) &&
        !duplicateArray.includes(str[idx])) {
      duplicateArray.push(str[idx]);
    }
  }
  return duplicateArray.length;
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