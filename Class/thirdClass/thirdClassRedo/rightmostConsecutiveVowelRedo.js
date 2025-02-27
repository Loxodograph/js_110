/*
Given a sentence, write a function that finds the starting index of the
rightmost occurrence of any consecutive vowel sequence in the sentence and
the word it belongs to. The function should be case-insensitive and should
only consider vowel sequences within individual words (not spanning multiple
words).

If a consecutive vowel sequence is found, return an array where the first
element is the starting index of the sequence and the second element
is the word containing that sequence.

Problem
  Create function that finds starting index
  of the rightmost occurence of any consecutive vowel sequence
  in the sentence and the word it belongs to

  the function should be case-insensitive
  should only consider vowel sequences within individual words

  if a consecutive vowel sequence is found
    return an array where first element is starting index of the sequence
      and second element is the word containing that sequence

  Input: String
  Output: Array containing starting index of vowel sequence, and word
    from which vowel sequence originates
  rules
    implicit:
      vowel sequence is any two vowels next to each other

data structure
array to keep track of words

algorithm
create variable vowels containing all vowels
split string into wordsArray
iterate over elements of words array going backwards
  iterate over letters in word going backwards
    if letter, and preceding letter are both vowels
      return array containing index of vowel sequence and
        word from which it originates
return empty array

*/

function rightmostConsecutiveVowel(str) {
  let vowels = "AEIOUaeiou";
  let wordsArray = str.split(" ");
  for (let idx = wordsArray.length - 1; idx >= 0; idx--) {
    let letters = wordsArray[idx].split("");
    for (let idx2 = letters.length - 1; idx2 >= 0; idx2--) {
      if (vowels.includes(letters[idx2]) && vowels.includes(letters[idx2 - 1])) {
        let vowelSequence = (letters[idx2 - 1]) + letters[idx2];
        return [str.lastIndexOf(vowelSequence), wordsArray[idx]];
      }
    }
  }
  return [];
}

// If no consecutive vowels are found, return an empty array.

// Test Cases
console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]