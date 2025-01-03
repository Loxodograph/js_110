/*
- Problem

  Given a sentence, write a function that finds the starting index of the rightmost occurrence of any 
  consecutive vowel sequence in the sentence. The function should be case-insensitive and should only consider 
  vowel sequences within individual words (not spanning multiple words). -- Nick

  If no consecutive vowels are found, return nil (for Ruby) or null (for JavaScript).

  Input: string
  Output: number representing index of rightmost consecutive vowel sequence

  - Rules
    -Explicit:
      - find rightmost consecutive vowel
      - case insensitive
      - should only consider vowel sequences within individual words
    -Implicit:
      - If no consecutive vowels are found return null


- Examples

console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: 37
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: null
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23

- Data Structures
  array to iterate over elements of string

algorithm
  create function called rightmostConsecutiveVowel with the argument String
    - split string into array ""
    - create longestConsecutiveVowels = [];
    - create currentConsecutiveVowels = [];
    - create consecutiveVowelsIndex = 0;

    - for each element in stringArray
      - if ("aeiouAEIOU" includes element)
        -push element to currentConsecutiveVowels
        - if currentConsecutiveVowels is longer than 1
          - consecutiveVowelsIndex = i - 1
          - longestConsecutiveVowels = currentConsecutiveVowels
        - else
          - currentConsecutiveVowels equals empty array
    
    if length of longestConsecutiveVowels is <= 1, return null

    return consecutiveVowelsIndex

      

*/

function rightmostConsecutiveVowel(string) {
  let stringArray = string.split("");
  let longestConsecutiveVowels = [];
  let currentConsecutiveVowels = [];
  let consecutiveVowelsIndex = 0;

  for (let i = 0; i < stringArray.length; i++) {
    if ("aeiouAEIOU".includes(stringArray[i])) {
      currentConsecutiveVowels.push(stringArray[i]);

      if (currentConsecutiveVowels.length > 1) {
        consecutiveVowelsIndex = i - 1;
        longestConsecutiveVowels = currentConsecutiveVowels;
      }

    } else {
      currentConsecutiveVowels = [];
    }
  };

  if (longestConsecutiveVowels.length <= 1) {
    return null
  }

  return consecutiveVowelsIndex;
}

console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: 37
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: null
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23