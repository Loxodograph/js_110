/*
create function that takes string argument
return has where keys represent lowercase letters in string
values representing occurences of that letter

create function countLetters which takes string as argument
create regex variable equal to all letters lowercase
create lowercase array variable equal to letters matched to regex
create resultObj variable equal to empty obj

for each letter in lowercaseArray
  if resultObj has key
    resultObj increment
  else
    resultObj key equals one
return resultObj
*/

function countLetters(string) {
  let regex = /[a-z]/g;
  let lowercaseArray = string.match(regex);
  let resultObj = {};
  if (lowercaseArray) {
    lowercaseArray.forEach(letter => {
      if (resultObj[letter]) {
        resultObj[letter]++;
      } else {
        resultObj[letter] = 1;
      }
    });
  }
  return resultObj;
}

const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {'x': 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));