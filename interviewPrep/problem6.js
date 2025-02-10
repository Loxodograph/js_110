/*
p
Create a function that takes a string argument and
returns a hash in which the keys represent the lowercase letters in the
string, and the values represent how often the corresponding
letter occurs in the string.

Input: String
Output : Object

Rules
  Explicit -
    - only include lowercase letters
    - calues represent how offten letter occurs in string
  Implicit
e
see below
d
objects
a
create function countLetters which takes a string argument
  - declare variable resultObj
  - declare variable punctuation equal to ".! "
  - Iterate over characters in string
    if character is equal to character to lowercase and punctuation doesnt
      include character
      if resultObject has key present
        increment count
      else add key to result object equal to 1

  - return resultObj
c
*/
function countLetters(str) {
  let resultObj = {};
  let punctuation = "!.,? /";
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === str[idx].toLowerCase() &&
      (!punctuation.includes(str[idx]))) {
      if (resultObj[str[idx]]) {
        resultObj[str[idx]]++;
      } else {
        resultObj[str[idx]] = 1;
      }
    }
  }
  return resultObj;
}
const p = console.log;
const objeq = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = { 'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1 };
p(objeq(countLetters('woebegone'), expected));

expected = {
  'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
  'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2
};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = { 'u': 1, 'o': 1, 'i': 1, 's': 1 };
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), { 'x': 1 }));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));