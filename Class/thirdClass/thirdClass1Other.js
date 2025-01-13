// * Implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the sequence of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit. -- Nick

// Test cases
// console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""

// Create a function called sumOfVowelPairs that takes a sentence and returns the total sum of the lengths of all word pairs where both words start with a vowel (a, e, i, o, u). -- Hamdi

// Test cases
// console.log(sumOfVowelPairs("An apple a day keeps the doctor away")); 
/*
An apple
An a
An away
apple a
apple away
a away
36
*/
// console.log(sumOfVowelPairs("Every engineer enjoys innovative algorithms")); 
/*
Every engineer
Every enjoys
Every innovative
Every algorithms
engineer enjoys
engineer innovative
engineer algorithms
enjoys innovative
enjoys algorithms
innovative algorithms
156
*/

/*
P:Given a sentence, find all pairs of words whose first letter matches the last letter of its pair. Return an empty array if there’s no such pair. Only consider words that have at least length of 2 for the pairings. -- Generosa
input: array
output: array containing pairs of words whose first letter matches the last letter of its pair
Rules - case insensitive, words have at least length of 2
E:
D: string and array

A: 
- initialize a pairs array []
- Convert the string to an array of words
- Iterate over the array: Outer loop starting from index 0
  - create an inner loop starting from index 1
  - compare the first letter of word at index 0 with the last letter of word at index 1
  - if there is a match, append the words as a pair array to pairs
- return pairs
*/

// function findMatchingPairs(str) {
//   let pairs = [];
//   let strArray = str.split(" ");

//   for (let i = 0; i < strArray.length; i++) {
//     for (let j = i + 1; j < strArray.length; j++) {
//       if (strArray[i].length < 2) {
//         continue;
//       }
//       if (
//         strArray[i][0].toLowerCase() ===
//         strArray[j][strArray[j].length - 1].toLowerCase()
//       ) {
//         pairs.push([strArray[i], strArray[j]]);
//       }
//     }
//   }

//   return pairs;
// }


// function findMatchingPairs(sentence) {
//   const words = sentence.split(/\s+/);
//   const result = [];

//   for (let i = 0; i < words.length; i++) {
//       for (let j = i + 1; j < words.length; j++) {
//           if (words[i].length >= 2 && words[j].length >= 2) {
//               if (words[i][0].toLowerCase() === words[j][words[j].length - 1].toLowerCase()) {
//                   result.push([words[i], words[j]]);
//               }
//           }
//       }
//   }

//   return result;
// }


// // Test cases
// console.log(findMatchingPairs("The cat in the hat")); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
// console.log(findMatchingPairs("A man a plan a canal Panama")); // []
// console.log(findMatchingPairs("This sentence has no pairs")); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
// console.log(findMatchingPairs("Apple leads to leap")); // []




//Hamdi 
// Create a function called `sumOfVowelPairs` that takes a sentence and returns the total sum of the lengths of all word pairs where both words start with a vowel (a, e, i, o, u). -- Hamdi
/*
P:
Input: a string containing words
Output: a number (sum of the LENGTHS of all word pairs that start with a vowel)

--take two words a time to get a pair

// Test cases
console.log(sumOfVowelPairs("An apple a day keeps the doctor away")); 

pairs of words w/ vowels:
 - start with first word 'An' and get all pairs of words with that
 'An apple', 'An a', 'An day', etc. 

 And do that for all words
 'apple a', 'apple day', 

which is these pairs:
An apple
An a
An away
apple a
apple away
a away

--CREATE a `sum` variable 
---ITERATE over the `vowelWordPairs` array and add up the sum of the LENGTH of each pair of words 
--RETURN that `sum`

Data Structure:
--an array (of word pairs that start with vowels)

Algorithm:
--First, get all the pairs of words start with a vowel
----INITIALIZE an array `vowelWordPairs`
----CONVERT the string into an array of words `wordsArray` and ITERATE over the array starting at the first word
------SET the first word in the current pair to `firstWord`
------ITERATE from the next word onwards
--------IF `firstWord` and the next word BOTH start with a vowel, add `firstWord` and next word as a subarray to `vowelWordPairs`
---ITERATE over the `vowelWordPairs` array and add up the sum of the LENGTH of each pair of words 
--RETURN that `sum`
*/

// function sumOfVowelPairs(string) {
//   let vowelWordPairs = [];
//   let wordsArray = string.split(" ");

//   for (let idx = 0; idx < wordsArray.length - 1; idx++) {
//     let firstWord = wordsArray[idx];
//     for (let jdx = idx + 1; jdx < wordsArray.length; jdx++) {
//       if (
//         "AEIOUaeiou".includes(firstWord[0]) &&
//         "AEIOUaeiou".includes(wordsArray[jdx][0])
//       ) {
//         vowelWordPairs.push([firstWord, wordsArray[jdx]]);
//       }
//     }
//   }

//   return vowelWordPairs.reduce((sum, [firstWord, nextWord]) => {
//     sum += firstWord.length + nextWord.length;
//     return sum;
//   }, 0);
// }

// /*
// An apple
// An a
// An away
// apple a
// apple away
// a away
// 36
// */
// console.log(sumOfVowelPairs("Every engineer enjoys innovative algorithms"));
// /*
// Every engineer
// Every enjoys
// Every innovative
// Every algorithms
// engineer enjoys
// engineer innovative
// engineer algorithms
// enjoys innovative
// enjoys algorithms
// innovative algorithms
// 156
// */

// // Test cases
// console.log(sumOfVowelPairs("An apple a day keeps the doctor away")); 
/*
An apple
An a
An away
apple a
apple away
a away
36
*/

/* 
Problem
  - Implement the function/method, minimum shorten. The function shortens a
    sentence such that it will fit within the character limit set.

    It shortens by removing vowels in the sequence of a, e, i, o, and u.
    Start removing from the end of the sentence.
    If it can not be shortened to fit within character limit,
    return an empty string. Spaces don’t count for the limit. -- Nick

  - Input: string, number representing length of shortened string
  - Output: shortened string

// Algorithm
//   create function minimumShorten which takes a string & number as arguments
//     - determine length of string with noSpaces
//     - split string into stringarray
//     - if noSpaces length is shorter than number argument
//       - return string
//     - while stringarray length is longer than number argument
//       - iterate over array backwards
//         - if string length is greater than number argument
//         -

// Code
// */

// function minimumShorten(string, maxLength) {
//   let noSpaces = string.replaceAll(" ", "");

//   let stringArray = string.split(" ");

//   if (noSpaces.length < maxLength) {
//     return string;
//   }

// }

// console.log(minimumShorten("Short", 10)); // Short

// function minimumShorten(sentence, limit) {
//   let nonSpaceCount = sentence.replace(/\s/g, '').length;
//   if (nonSpaceCount <= limit) return sentence;

//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let shortened = sentence;

//   for (let vowel of vowels) {
//     while (nonSpaceCount > limit && shortened.includes(vowel)) {
//       const index = shortened.lastIndexOf(vowel);
//       shortened = shortened.substring(0, index) + shortened.substring(index + 1);
//       nonSpaceCount--;
//     }
//   }

//   return nonSpaceCount <= limit ? shortened : '';
// }

// // Test cases
// console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""

// Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

// If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence and the second element is the word containing that sequence.

// If no consecutive vowels are found, return an empty array.

// Test Cases
console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]