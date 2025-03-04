/*

Create a function that takes two strings as arguments and returns
true if some portion of the characters in the first string can be
rearranged to match the characters in the second.
Otherwise, the function should return false.

You may assume that both string arguments only contain lowercase
alphabetic characters. Neither string will be empty.

Problem:
  Create function that returns true if any portion of characters in
  first string can be rearranged to match characters in the second
  Otherwise return false

  Rules:
    Explicit
      Both strings only contain lowercase characters
      Neither String will be empty

Examples:
  See Below

Data structure
  Array, to use splice

Algorithm
  Create array version of first string
  iterate over elements of second string
    if first string includes element
      remove element from first string
    else
      return false
  return true
*/

function unscramble(str1, str2) {
  let str1Array = str1.split("");
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