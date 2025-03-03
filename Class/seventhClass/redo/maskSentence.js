/*
Write a function that masks proper nouns and numbers in a sentence.

Use * to mask proper nouns and use # to mask numbers.

You may assume that a sentence will not begin with a proper noun &
will not end with a number or proper noun. Numbers can only be integers.

Problem:
  Input: String
  Output: Modified String
  Rules:
    Explicit:
      - modify properNouns and numbers in a sentence
        * to modify proper Nouns. # to modify numbers
      - proper Nouns at beginning of sentence is not modified
      - sentences will not end in modified word or number
      - Numbers are integers only
    Implicit:
      - Proper nouns are words that begin with capital letters
        - that are not the first word of a sentence

Examples
  See Below

Data Structure
  Array? for iteration purposes

Algorithm
  Split string into words
  Iterate over words in string
    if first letter of word is capital, and word is not index 0 or last index
      word = * for length of original word
    if word is number
      word = # for length of original word
    else
      word = word
  return modified array joined
*/

function maskSentence(str) {
  return str.split(" ").map((word, index) => {
    if (word[0] === word[0].toUpperCase() &&
        (index !== 0) &&
        (index !== str.split(" ").length - 1)) {
      if (Number(word) > 0) {
        return "#".repeat(word.length);
      } else {
        return "*".repeat(word.length);
      }
    } else {
      return word;
    }
  }).join(" ");
}
// Test cases
console.log(maskSentence("They bought 5 apples from John yesterday.")); // They bought # apples from **** yesterday.
console.log(maskSentence("Alice and Bob went to Paris in 2021 to have a vacation.")); // Alice and *** went to ***** in #### to have a vacation.