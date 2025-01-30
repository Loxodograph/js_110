/*
Problem: Longest Repeated Substring

Write a function that finds the longest repeated substring in a given sentence.
The function should ignore spaces, punctuation, and case.
If there are multiple repeated substrings of the same length,
return the first one found.

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

Explanation:

    Input: A string with possible repeated substrings.
    Output: The longest substring that appears more than once in the string.
    Rules:
        Ignore spaces, punctuation, and case.
        If no repeated substring exists, return an empty string.
        Return the first substring found if there are ties in length.


*/