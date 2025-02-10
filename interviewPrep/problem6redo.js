/*
Problem
  - create function takes string argument, returns object with
    keys as lowercase letters in string, values as how often those
    letters occur

  rules
    explicit:
      - return object
        - keys are lowercase letters
        - values are occurences in string
      - Do not include punctuation or spaces
  Input: string
  Output: Object

Examples and Test Cases
see below

Data Structures
Strings and objects

Algorithm
Creatue function called countLetters which takes string argument
  - define variable resultObj equal to empty object
  - define variable punctuation equal to all punctuation
  - iterate over letters of string
    - if letter is equal to lowercase letter
    - and letter is not included in punctuation
      - if resultObj contains letter as key
        - increment key by 1
      - else
        - add key to result object, value 1;
  - return resultObj
*/

function countLetters(str) {
  let resultObj = {};
  let punctuation = ".,?!/ ";

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