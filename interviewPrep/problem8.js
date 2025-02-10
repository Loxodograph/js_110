/*
Problem
  - Create function that takes non-empty string as argument
  - string consists of lowercase characters
  - return length of longest vowel substring

Examples:
  See Below

Data Structure
Array and Strings

Algorithm
Create function longestVowelSubstring which takes string as argument
  - create variable currentVowelSubstringLength equal to 0;
  - create variable longestVowelSubstringLength equal to 0;
  - create variable vowels equal to "aeiou"
  - Iterate over elements of string
    - if element is included in vowels
      - increase currentVowelSubstringLength
      - if currentVowelSubstringLength is greater than
        longestVowelSubstringLength
          - longestVowelSubstringLength equals currentVowelSubstringLength
    - else
      - currentVowelSubstringLength equals 0
  return longestVowelSubstringLength
*/

function longestVowelSubstring(str) {
  let currentVowelSubstringLength = 0;
  let longestVowelSubstringLength = 0;
  let vowels = "aeiou";

  for (let idx = 0; idx < str.length; idx++) {
    if (vowels.includes(str[idx])) {
      currentVowelSubstringLength++;
      if (currentVowelSubstringLength > longestVowelSubstringLength) {
        longestVowelSubstringLength = currentVowelSubstringLength;
      }
    } else {
      currentVowelSubstringLength = 0;
    }
  }
  return longestVowelSubstringLength;
}

const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);