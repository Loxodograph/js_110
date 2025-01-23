/*
Problem
  - Write a function that finds all triples of words in a sentence
    that have at least one word with more than 5 characters.
  - Input: sentence
  - Output: array containing triples

  - Rules
    - Explicit:
      - identify triples of consecutive words in the sentence.
      - At least one word in the triple must have more than 5 characters
    - Implicit:


  - Questions

Examples and Test Cases
console.log(findTripleWithLongWord("This is a test sentence
            with some long words"));
// [["sentence", "with", "some"], ["sentence", "with", "long"],
// ["with", "some", "long"]]

console.log(findTripleWithLongWord("A quick brown fox jumps
            over the lazy dog"));
// [["quick", "brown", "jumps"], ["brown", "fox", "jumps"]]

console.log(findTripleWithLongWord("He studied well and
performed greatly in school"));
// [["studied", "well", "and"], ["studied", "well", "performed"],
// ["studied", "well", "greatly"], ["studied", "and", "performed"],
// ["well", "and", "performed"], ["well", "and", "greatly"],
// ["and", "performed", "greatly"]]

Data Structures

Algorithm
create function isLongerThanFive which takes a word as an argument
  if word length is longer than five return true
  else return false

create function findTripleWithLongWord which takes sentence as argument
  define variable finalArray
  split sentence into words
    iterate over words in sentence starting at index 2
      if element or any of the two preceding elements
      isLongerThanFive
        append to finalArray all three elements as an array
  return finalArray

Code
*/
function isLongerThanFive(word) {
  return word.length > 5;
}

function findTripleWithLongWord(sentence) {
  let finalArray = [];
  let sentenceArray = sentence.split(" ");
  for (let i = 0; i < sentenceArray.length - 2; i++) {
    if (isLongerThanFive(sentenceArray[i]) ||
        isLongerThanFive(sentenceArray[i + 1]) ||
        isLongerThanFive(sentenceArray[i + 2])) {
          finalArray.push([sentenceArray[i], sentenceArray[i + 1],
          sentenceArray[i + 2]])
        }
  }
  return finalArray
}

console.log(findTripleWithLongWord("This is a test sentence with some long words"));
// [["sentence", "with", "some"], ["sentence", "with", "long"],
// ["with", "some", "long"]]

console.log(findTripleWithLongWord("A quick brown fox jumps over the lazy dog"));
// [["quick", "brown", "jumps"], ["brown", "fox", "jumps"]]

console.log(findTripleWithLongWord("He studied well and performed greatly in school"));

console.log(findTripleWithLongWord("Beautiful, bright, and sunnier days are lovely"));
// Expected output: [
//   ['beautiful,', 'bright', 'and'],
//   ['bright', 'and', 'sunnier'],
//   ['and', 'sunnier', 'days'],
//   ['sunnier', 'days', 'are'],
//   ['days', 'are', 'lovely']
// ]