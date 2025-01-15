/*

Problem
  - Given a sentence, write a function that finds the starting
    index of the rightmost occurrence of any consecutive vowel
    sequence in the sentence and the word it belongs to.
    The function should be case-insensitive and should only consider
    vowel sequences within individual words (not spanning multiple words).

  - If a consecutive vowel sequence is found, return an array where
    the first element is the starting index of the sequence
    and the second element is the word containing that sequence.

  - If no consecutive vowels are found, return an empty array.

  - Input: String sentence
  - Output: array containing [number representing index of first element of
            consecutive vowel word, word containing most consecutive vowels]

  - Rules
    - Explicit:

    - Implicit:
      

  - Questions
    

Examples and Test Cases
console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]

Data Structures



Algorithm

Code
*/



// Test Cases
console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]