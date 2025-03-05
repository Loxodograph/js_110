/*
// Implement a function that finds substrings in a word that are
// pseudo-consonant blends. A pseudo-consonant blend is two or three
// consonants that are right next to each other.

Problem
  Create a function that returns an array of all substrings that contain
  2 or 3 letters but no vowels

  Vowels are aeiou

  Input: String
  Output: Array

examples

psychology - psy, ch, gy
strengths - str ngt hs
rhythm - rhy thm
happy - ppy
example - mpl

// Test cases
console.log(findPseudoConsonantBlends("psychology")); // ["psy", "ch", "gy"]
console.log(findPseudoConsonantBlends("strengths")); // ["str", "ngt", "hs"]
console.log(findPseudoConsonantBlends("rhythms")); // ["rhy", "thm"]
console.log(findPseudoConsonantBlends("happy")); // ["ppy"]
console.log(findPseudoConsonantBlends("example")); // ["mpl"]

Data structures
Arrays

Algorithm
create function findPseudoConsonantBlends which takes string argument
define variable consonantBlends equal to empty array
define variable which is copy of string
define regex equal to aeiou

iterate over elements of string
  create slice three characters long
  if slice contains no vowels
    add slice to consonantBlends
    modify string to remove slice
  else
    create slice 2 characters long
    if slice contains no vowels
      add slice to consonantBlends
      modify string to remove slice
  else
    modify string to remove character
return consonantBlends
*/
function findPseudoConsonantBlends(str) {
  let consonantBlends = [];
  let regex = /[aeiou]/;

  while (str.length > 1) {
    let slice = str.slice(0, 3);
    if (!slice.match(regex)) {
      consonantBlends.push(slice);
      str = str.slice(2);
    } else {
      slice = str.slice(0, 2);
      if (!slice.match(regex)) {
        consonantBlends.push(slice);
        str = str.slice(1);
      }
    }
    str = str.slice(1);
  }
  return consonantBlends;
}

console.log(findPseudoConsonantBlends("psychology")); // ["psy", "ch", "gy"]
console.log(findPseudoConsonantBlends("strengths")); // ["str", "ngt", "hs"]
console.log(findPseudoConsonantBlends("rhythms")); // ["rhy", "thm"]
console.log(findPseudoConsonantBlends("happy")); // ["ppy"]
console.log(findPseudoConsonantBlends("example")); // ["mpl"]