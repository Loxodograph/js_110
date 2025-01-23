// Find all triple of words in the sentence that have at least 2 vowels in them.
/*

Problem
  -

  - Input: Sentence containing multiple words
  - Output: Nested Array containing 3 words that have 2 or more vowels

  - Rules
    - Explicit:


    - Implicit:

  - Questions

Examples and Test cases
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

Data Structures

Algorithm
  Create function vowelCount that takes a word argument
    define vowels variable
    define count variable
    split word into array

    iterate over letters of word array
      if vowels includes letter
        increment count
    return count

  create function findTripleWithVowels which takes a sentence argument
    define resultArray equal to empty array
    split sentence into word elements
    iterate over elements of sentence array
      iterate over next element of sentence array
        iterate over next element of sentence array
          if all three elements vowelCount >= 2
            push all three elements as array to finalArray
    return finalArray

Code
*/

function vowelCount(word) {
  let vowels = "AEIOUaeiou";
  let count = 0;
  word.split("").forEach(letter => {
    if (vowels.includes(letter)) return count++;
  });
  return count;
}

function findTripleWithVowels(sentence) {
  let resultArray = [];
  let sentenceArray = sentence.split(" ");
  for (let i = 0; i < sentenceArray.length - 2; i++) {
    for (let j = i + 1; j < sentenceArray.length - 1; j++) {
      for (let k = j + 1; k < sentenceArray.length; k++) {
        if (vowelCount(sentenceArray[i]) >= 2 &&
          vowelCount(sentenceArray[j]) >= 2 &&
          vowelCount(sentenceArray[k]) >= 2) {
          resultArray.push([sentenceArray[i], sentenceArray[j], sentenceArray[k]]);
        }
      }
    }
  }
  return resultArray;
}

console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
console.log(findTripleWithVowels("The quick brown fox jumps over the lazy dog")); // []
console.log(findTripleWithVowels("Beautiful, bright, and sunnier days are lovely"));
// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]