/*
Problem
  - Find all triple of words in the sentence
    that have at least 2 vowels in them.

  - Input: sentence
  - Output: array of arrays containing triples

  - Explicit:
    - triple is a combination of 3 words where all words
      have 2 or more vowels.
  - Implicit:
    - Combinations are presented in order, not every possible combo.

Examples & Test Cases

console.log(findTripleWithVowels("This is a test sentence with some vowels"));
// [["sentence", "some", "vowels"]]
console.log(findTripleWithVowels("The quick brown fox jumps over the lazy dog"))
// []
console.log(
findTripleWithVowels("Beautiful, bright, and sunnier days are lovely")
)

// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]

Algorithm
  - Create helper function twoOrMoreVowels which takes a word string as argument
    - define variable vowels containing all vowels
    - define variable count equal to 0
    - iterate over letters of word
      - if letter is a vowel
        - increment count
    - return count >= 2

  - create function findTripleWithVowels which takes a sentence string as
    argument
    - define variable finalArray equal to empty array
    - iterate over words in sentence up to third to last
      - iterate over next words in sentence up to second to last
        - iterate over next word in sentence up to last
          - if twoOrMoreVowels of all three words is true
            - push array of three words to finalArray
    - return finalArray
*/

function findTripleWithVowels(sentence) {
  let sentenceArray = sentence.split(" ");
  let finalArray = [];

  for (let idx = 0; idx < sentenceArray.length - 2; idx++) {
    for (let jdx = idx + 1; jdx < sentenceArray.length - 1; jdx++) {
      for (let kdx = jdx + 1; kdx < sentenceArray.length; kdx++) {
        if (twoOrMoreVowels(sentenceArray[kdx]) &&
          twoOrMoreVowels(sentenceArray[jdx]) &&
          twoOrMoreVowels(sentenceArray[idx])) {
          finalArray.push([sentenceArray[idx],
            sentenceArray[jdx], sentenceArray[kdx]]);
        }
      }
    }
  }
  return finalArray;
}

function twoOrMoreVowels(word) {
  let vowels = "AEIOUaeiou";
  let count = 0;
  word.split("").forEach(letter => {
    if (vowels.includes(letter)) {
      count++;
    }
  });
  return count >= 2;
}

console.log(findTripleWithVowels("This is a test sentence with some vowels"));
// [["sentence", "some", "vowels"]]
console.log(findTripleWithVowels("The quick brown fox jumps over the lazy dog"));
// []
console.log(
  findTripleWithVowels("Beautiful, bright, and sunnier days are lovely")
);

// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]