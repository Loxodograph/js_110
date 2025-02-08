/*
Problem: Longest Repeated Substring

Write a function that finds the longest repeated substring in a given sentence.
The function should ignore spaces, punctuation, and case.
If there are multiple repeated substrings of the same length,
return the first one found.

Explanation:

    Input: A string with possible repeated substrings.
    Output: The longest substring that appears more than once in the string.
    Rules:
        Ignore spaces, punctuation, and case.
        If no repeated substring exists, return an empty string.
        Return the first substring found if there are ties in length.
Test Cases
console.log(longestRepeatedSubstring("abcabcbb"));
// Expected: "abc"
console.log(longestRepeatedSubstring("Banana banana"));
// Expected: "banana"
console.log(longestRepeatedSubstring("abcd"));
// Expected: ""
console.log(longestRepeatedSubstring("Hello, hello, world!"));
// Expected: "hello"
console.log(longestRepeatedSubstring("aabbccddeeff"));
// Expected: "aa"

Algorithm
create function longestRepeatedSubstring which takes string as argument
  - define variable longestSubstring equal to empty string
  - define currentSubstring = to empty string
  - iterate over elements of string - to second to last
    - iterate over remaining elements of string - to last
      - create substring variable from first element to second element
        - create slice of string starting from second element onward
          - if slice of string includes substring
            - current substring equals substring
            - if current substring longer than longest
              - longest equals current
  - return longest
*/

function longestRepeatedSubstring(sentence) {
  let longestSubstring = "";
  let currentSubstring = "";
  let sentenceNoPunctuation = sentence.toLowerCase().match(/[a-z]/g).join("");

  for (let start = 0; start < sentenceNoPunctuation.length - 1; start++) {
    for (let end = start + 1; end <= sentenceNoPunctuation.length; end++) {
      let substring = sentenceNoPunctuation.slice(start, end);
      if (sentenceNoPunctuation.slice(end).includes(substring)) {
        currentSubstring = substring;
        if (currentSubstring.length > longestSubstring.length) {
          longestSubstring = currentSubstring;
        }
      }
    }
  }
  return longestSubstring;
}

console.log(longestRepeatedSubstring("abcabcbb"));
// Expected: "abc"
console.log(longestRepeatedSubstring("Banana banana"));
// Expected: "banana"
console.log(longestRepeatedSubstring("abcd"));
// Expected: ""
console.log(longestRepeatedSubstring("Hello, hello, world!"));
// Expected: "hello"
console.log(longestRepeatedSubstring("aabbccddeeff"));
// Expected: "aa"