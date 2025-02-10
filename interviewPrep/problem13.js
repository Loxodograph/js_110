/*
Create a function that takes two strings as argument.
if some of the characters in the first string
can be rearranged to match characters in the second
return true

- both string arguments only lowercase
- neither will be empty

split both into arrays
if array1 included in array2
remove element from both arrays
if array2.length = 0
return true
*/

function unscramble(str1, str2) {
  let array1 = str1.split("");
  let array2 = str2.split("");

  for (let idx = 0; idx < array1.length; idx++) {
    if (array2.includes(array1[idx])) {
      array2.splice(array2.indexOf(array1[idx]), 1);
    }
  }
  return array2.length === 0;
}

const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);