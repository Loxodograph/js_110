/*
Create a function that takes a non-empty string as an argument.
The string consists entirely of lowercase alphabetic characters.
The function should return the length of the longest vowel substring.
The vowels of interest are "a", "e", "i", "o", and "u".

Problem
  Create function, returns length of longest vowel substring

  Rules
    Explicit:
      string will contain only lowercase letters
      string will never be empty
      vowels are aeiou

  Input: string
  output: Number representing length of longest vowel substring

Examples:
see below

Data Structures
  Strings, loops

Algorithm
create function longestVowelSubstring which takes string argument
  define variable longestSubstring equal to empty string
  define variable currentSubstring equal to empty string
  define variable vowels equal to 'aeiou'
  iterate over elements of string
    if vowels includes element
      add vowel to current substring
      if currentSubstring length is longest than longestSubstring length
        longestSubstring equals currentSubstring
    else
      currentSubstring equals empty string
  return longestSubstring.length
*/

function longestVowelSubstring(str) {
  let longestSubstring = "";
  let currentSubstring = "";
  let vowels = "aeiou";

  for (let idx = 0; idx < str.length; idx++) {
    if (vowels.includes(str[idx])) {
      currentSubstring += str[idx];
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }
    } else {
      currentSubstring = "";
    }
  }
  return longestSubstring.length;
}


const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);