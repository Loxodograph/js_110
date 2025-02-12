/*
 Create a function that takes a string and returns the longest
 palindrome substring. For instance, given "babad", the function
 should return "bab" or "aba".

create helperFunction isPalindrome
  return string forward equals string reverse

create function longestPalindromicSubstring
  define variable longestPalindrome equal to empty string
  define variable currentPalindrome equal to empty substring

  for each letter in string until second to last
    for each next letter in string until last
      define variable slice = string sliced from start to end + 1
      if slice isPalindrome
        currentPalindrome is slice
        if currentPalindrome length longer than longestPalindrome length
          longestPalindrome = currentPalindrome
          currentPalindrome = "";
  */

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function longestPalindromicSubstring(string) {
  let longestPalindrome = "";
  let currentPalindrome = "";

  for (let start = 0; start < string.length - 1; start++) {
    for (let end = start + 1; end < string.length; end++) {
      let slice = string.slice(start, end + 1);
      if (isPalindrome(slice)) {
        currentPalindrome = slice;
        if (currentPalindrome.length > longestPalindrome.length) {
          longestPalindrome = currentPalindrome;
        }
      }
    }
  }
  return longestPalindrome;
}

console.log(longestPalindromicSubstring("babad"));
console.log(longestPalindromicSubstring("malayam maddam"));