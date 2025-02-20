/*
Problem
  Create a function that takes 2 string arguments
  Return true if some portion of characters in first string
  can be rearranged to match characters in the second
  Otherwise return false

  Both strings will only contain lowercase characters. Neither will be empty

Data Structures
an array version of strings for iteration and deletion purposes

Algorithm

create function unscramble which takes 2 string arguments
split both strings into arrays
iterate over characters of second string
  if element in second string, is included in first string array
    remove character from first string array
  else
    return false
return true

*/

function unscramble(str1, str2) {
  let str1Array = str1.split("")
  for (let idx = 0; idx < str2.length; idx++) {
    if (str1Array.includes(str2[idx])) {
      str1Array.splice(str1Array.indexOf(str2[idx]), 1);
    } else {
      return false;
    }
  }
  return true;
}

const p = console.log;
p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);