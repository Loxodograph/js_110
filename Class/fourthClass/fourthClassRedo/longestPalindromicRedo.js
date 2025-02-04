/*
Problem:
  Write a function that finds the longest palindromic
  substring in a given sentence.

  A palindromic substring reads the same forwards and backwards.
  The function should ignore spaces, punctuation, and case.

  If there are multiple palindromic substrings of the same length,
  return the first one found.

  Input: sentence string
  Output: longest palindrome string

  Rules
    -Explicit
      - case insensitive
      - ignore spaces
      - if more than one palindromic substring of same length, return first
    -Implicit
      - palindrome reads same forward and backwards.


// Test cases
console.log(longestPalindromicSubstring("Madam Arora teaches malayalam"));
// "malayalam"
console.log(longestPalindromicSubstring("Nurses Run"));
// "nursesrun"
console.log(longestPalindromicSubstring("ABC"));
// "a"

Algorithm
  - create function longestPalindromicSubstring which takes string as argument
    - define regex as all lowercase characters
    - define letter array using regex to match all characters in
      lowercase version of string
    - define longestPalindrome equal to firstElement of sentence
    - define currentPalindrome equal to empty String
    - iterate over elements letterArray
      - iterate over next element of letter array
        - define slice equal to first element to (second element + 1)
        - if slice equals slice reverse
          - currentPalindrome = joined slice
          if current palindrome length is greater than longestPalindrome
            - longestPalindrome equals currentPalindrome
        - else currentPalindrome = "";
    - return longestPalindrome
*/

function longestPalindromicSubstring(sentence) {
  let regex = /[a-z]/g;
  let letterArray = sentence.toLowerCase().match(regex);
  let longestPalindrome = sentence[0];
  let currentPalindrome = "";

  for (let start = 0; start < letterArray.length - 1; start++) {
    for (let end = start + 1; end < letterArray.length; end++) {
      let wordSlice = letterArray.slice(start, end + 1);
      if (wordSlice.join("") === wordSlice.reverse().join("")) {
        currentPalindrome = wordSlice.join("");
        if (currentPalindrome.length > longestPalindrome.length) {
          longestPalindrome = currentPalindrome;
        }
      } else {
        currentPalindrome = "";
      }
    }
  }
  return longestPalindrome;
}

console.log(longestPalindromicSubstring("Madam Arora teaches malayalam"));
// "malayalam"
console.log(longestPalindromicSubstring("Nurses Run"));
// "nursesrun"
console.log(longestPalindromicSubstring("ABC"));
// "a"
