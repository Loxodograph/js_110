/*
Given a sentence, write a function that finds the starting index of the
rightmost occurrence of any consecutive vowel sequence in the sentence
and the word it belongs to. The function should be case-insensitive and
should only consider vowel sequences within individual words (not spanning
multiple words).

If a consecutive vowel sequence is found, return an array where the
first element is the starting index of the sequence and the second
element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.

Problem
  Create a function that returns starting index of rightmost occurrence of
  any consecutive vowel sequence and the word it belongs to

  Rules
    Explicit
      case insensitive
      only consider vowel sequences within individual words
      return as array where first element is starting index
        second element is the word
    Implicit
      consecutive vowel sequence is any sequence of consecutive vowels
      not longest sequence
Examples
  See Below

Data Structures
Array to split sentence into words and iterate

Algorithm
define variable vowels equal to every vowel
iterate over words in array backwards
  iterate over letters of word
    if letter and preceding are both vowels
      return array of index - 1 and word
return empty array
*/
function rightmostConsecutiveVowel(str) {
  let vowels = "aeiouAEIOU";
  let wordArray = str.split(" ")
  for (let idx = wordArray.length - 1; idx >= 0; idx--) {
    let lettersArray = wordArray[idx].split("");
    for (let jdx = lettersArray.length - 1; jdx >= 0; jdx--) {
      if (vowels.includes(lettersArray[jdx]) &&
        vowels.includes(lettersArray[jdx - 1])) {
        let vowelSequence = lettersArray[jdx - 1] + lettersArray[jdx];
        return [str.lastIndexOf(vowelSequence), wordArray[idx]];
      }
    }
  }
  return [];
}
// Test Cases
console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]