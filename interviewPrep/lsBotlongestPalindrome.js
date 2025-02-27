/*
Write a function that finds the longest palindrome substring
in a given string

A palindrome is a word, phrase, number, or other sequence of characters
that reads same forward and backwards

if multiple palindromes of same length exist
return first

examples

babad
bab, aba return bab

cbbd, return bb

racecar return racecar

abcde return a
Input: String
Output: String representing longest palindromic substring

datastructure
array to iterate and reverse

algorithm
create function longestPalindrome which accepts a string argument
create currentPalindrome variable set to first character in string
create longestPalindrome variable set to empty string
split string into an array
iterate over elements of string
  iterate over remaining elements of string
    if slice equals slice reversed
      currentPalindrome equals slice
      if currentPalindrome length is longer than longestPalindrome length
        longestPalindrome equals currentPalindrome
return longestPalindrome
*/

function longestPalindrome(str) {
  let currentPalindrome = str[0];
  let longestPalindrome = "";
  let strArray = str.split("");

  for (let start = 0; start < strArray.length; start++) {
    for (let end = start; end < strArray.length; end++) {
      let slice = strArray.slice(start, end + 1);
      if (slice.join("") === slice.reverse().join("")) {
        currentPalindrome = slice.join("");
        if (currentPalindrome.length > longestPalindrome.length) {
          longestPalindrome = currentPalindrome;
        }
      }
    }
  }
  return longestPalindrome;
}

console.log(longestPalindrome("babad") === "bab");
console.log(longestPalindrome("cbbd") === "bb");
console.log(longestPalindrome("a") === "a");
console.log(longestPalindrome("ac") === "a");
console.log(longestPalindrome("racecar") === "racecar");
console.log(longestPalindrome("abcde") === "a");