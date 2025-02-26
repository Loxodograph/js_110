/*
Problem
  Create a function that returns the count of
    distinct case-insensitive alphabetic characters
    AND numberic digits that occur more than once in the string

  String will only contain alphanumeric characters

Input: String
Output: Number representing characters that occur multiple times

Algorithm

Create function distinctMultiples which takes a string argument
create variable characterObj set to empty array
iterate over characters of string
  if character is present as key in characterObj
    increment by one
  else
    key 'character' in characterObj is equal to 0
filter values of characterObj to select values greater than 1
return length of filtered values of characterObj
*/

function distinctMultiples(string) {
  let characterObj = {};
  for (let idx = 0; idx < string.length; idx++) {
    if (characterObj[string[idx].toLowerCase()]) {
      characterObj[string[idx].toLowerCase()]++;
    } else {
      characterObj[string[idx]] = 1;
    }
  }
  return Object.values(characterObj).filter(element => element > 1).length;
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