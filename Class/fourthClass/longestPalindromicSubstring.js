/*

Problem
  - Write a function that finds longest palindromic substring in given sentence.
    A palindromic substring reads the same forwards and backwards.
    The function should ignore spaces, punctuation, and case.
    If there are multiple palindromic substrings of the same length,
    return the first one found.


  - Input: string sentence
  - Output: word that is longest palindrome

  - Rules
    - Explicit:
      - palindrome is word that reads same forward as backwards
      - ignore spaces punctuation and case
      - if there are multiple palindromic substrings of same length,
        return only the first
    - Implicit:

  - Questions

Examples and Test Cases

console.log(longestPalindromicSubstring("Madam Arora teaches malayalam"));
  // "malayalam"
console.log(longestPalindromicSubstring("Nurses Run"));
  // "nursesrun"
console.log(longestPalindromicSubstring("ABC"));
  // "a"

Data Structures
Arrays

Algorithm
  - create function isPalindrome which takes a string argument
    - return string === string reversed

  - create function longestPalindromicSubstring which takes
    a sentence as an argument
    - define regex variable which is all lowercase alpha characters
    - define lettersArray which is equal to all alpha characters from sentence
    - define longestPalindrome which is equal to empty string

    - for each letter in letters array until next to last letter
      - for each next letter
        - slice array between first letter and next letter
          - if slice is a palindrome
            - if joined slice length is longer than longestPalindrome length
              - longestPalindrome equals joined slice
    - return longestPalindrome


Code
*/

function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

function longestPalindromicSubstring(sentence) {
  let regex = /[a-z]/g;
  let lettersArray = sentence.toLowerCase().match(regex);
  let longestPalindrome = "";

  for (let idx = 0; idx <= lettersArray.length; idx++) {
    for (let jdx = idx + 1; jdx <= lettersArray.length; jdx++) {
      let slice = lettersArray.slice(idx, jdx).join("");
      if (isPalindrome(slice)) {
        if (slice.length > longestPalindrome.length) {
          longestPalindrome = slice;
        }
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
