// Given a string, find all substrings of length 3 or more with no repeating characters. Return an empty array if none exist. -- Nick

// Test cases
console.log(substringsWithoutRepeats("abcde")); // ["abc", "abcd", "abcde", "bcd", "bcde", "cde"]
console.log(substringsWithoutRepeats("aabbcc")); // []
console.log(substringsWithoutRepeats("aaa")); // []
console.log(substringsWithoutRepeats("xyzabc")); // ["xyz", "xyza", "xyzab", "xyzabc", "yza", "yzab", "yzabc", "zab", "zabc", "abc"]

// Given an array of integers, find the longest consecutive slice where all elements are equal. Return an empty array if no such slice exists (minimum length 2). -- Hamza

// Test cases
console.log(longestEqualSlice([1, 1, 1, 2, 3, 3])); // [1, 1, 1]
console.log(longestEqualSlice([2, 3, 4, 4, 5])); // [4, 4]
console.log(longestEqualSlice([1, 2, 3, 4])); // []
console.log(longestEqualSlice([5, 5, 5, 5])); // [5, 5, 5, 5]