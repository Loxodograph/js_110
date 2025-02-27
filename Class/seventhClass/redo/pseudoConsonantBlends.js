/*
Implement a function that finds substrings in a
word that are pseudo-consonant blends.
A pseudo-consonant blend is two or three consonants
that are right next to each other.

Problem:
  Create function
*/

// Test cases
console.log(findPseudoConsonantBlends("psychology")); // ["psy", "ch", "gy"]
console.log(findPseudoConsonantBlends("strengths")); // ["str", "ngt", "hs"]
console.log(findPseudoConsonantBlends("rhythms")); // ["rhy", "thm"]
console.log(findPseudoConsonantBlends("happy")); // ["ppy"]
console.log(findPseudoConsonantBlends("example")); // ["mpl"]