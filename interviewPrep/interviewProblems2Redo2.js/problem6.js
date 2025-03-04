/*
Create a function that takes a string argument and returns
a hash in which the keys represent the lowercase letters
in the string, and the values represent how often the
corresponding letter occurs in the string.

Problem:
  Create function that returns an object where
  keys are lowercase letters in string
  and vallues are the frequency of letter

  Input: String
  Output: Object

Examples:
  see below

Data Structures
  Object to be returned
  Strings

Algorithm
  Create function countLetters which takes string argument
  define variable resultObj equal to empty object
  iterate over characters of string
    if character is lowercase letter
      if character is key in resultObj
        increment key value
      else
        key value = 1
  return resultObj
*/

function countLetters(str) {
  let resultObj = {};
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] >= "a" && str[idx] <= "z") {
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
};

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