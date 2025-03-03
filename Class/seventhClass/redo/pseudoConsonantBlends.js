/*
Implement a function that finds substrings in a
word that are pseudo-consonant blends.
A pseudo-consonant blend is two or three consonants
that are right next to each other.

Problem:
  Create function that finds substrings
  pseudo-consonant blends two or three consonants that are
  right next to each other

  psychology
  psy
  ch
  gy

  rhythm
  rhy
  thm

  strengths
  str
  ngt
  hs

data structure
array being returned at end of function

algorithm
create variable finalArray equal to empty array
create variable vowels equal to 'aeiou'
iterate over elements of string
  if character is not vowel
    add character to currentConsonantBlend
    if currentConsonantBlend is 3 characters
     append to final array
  else
    if currentConsonantBlend is 2 characters
      append to finalArray
    currentConsonantBlend = empty string
if currentConsonatBlend is 2 characters
  append to finalArray

return finalArray
*/

function findPseudoConsonantBlends(string) {
  let finalArray = [];
  let vowels = "aeiou";
  let currentConsonantBlend = "";

  for (let idx = 0; idx < string.length; idx++) {
    if (!vowels.includes(string[idx])) {
      currentConsonantBlend += string[idx];

      if (currentConsonantBlend.length === 3) {
        finalArray.push(currentConsonantBlend);
        currentConsonantBlend = "";
      }

    } else {
      if (currentConsonantBlend.length === 2) {
        finalArray.push(currentConsonantBlend);
        currentConsonantBlend = "";
      }

      currentConsonantBlend = "";
    }
  }

  if (currentConsonantBlend.length === 2) {
    finalArray.push(currentConsonantBlend);
  }
  return finalArray;
}

// Test cases
console.log(findPseudoConsonantBlends("psychology")); // ["psy", "ch", "gy"]
console.log(findPseudoConsonantBlends("strengths")); // ["str", "ngt", "hs"]
console.log(findPseudoConsonantBlends("rhythms")); // ["rhy", "thm"]
console.log(findPseudoConsonantBlends("happy")); // ["ppy"]
console.log(findPseudoConsonantBlends("example")); // ["mpl"]