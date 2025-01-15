// Create a function called decoder that decodes a secret message from a sentence. The secret message is formed by retrieving every n**-th character** from every n**-th word** of the sentence.

// •  If the word has fewer than n characters, skip that word.
// •  If there are fewer than n words in the sentence, return an empty string.
// •  Words in the sentence are separated by spaces. -- Nick

// Test cases
console.log(decoder("She sells sea shells on the sea shore", 2));  // Output: "elhlshhr"
console.log(decoder("The quick brown fox jumps over the lazy dog", 3));  // Output: "oeg"
console.log(decoder("I love programming in JavaScript", 3));  // Output: "oai"
console.log(decoder("Just a simple test sentence to decode", 4));  // Output: "t"
console.log(decoder("This will not work well", 5));  // Output: ""
console.log(decoder("Send every code to find secrets hidden", 2));  // Output: "vroert"

// Write a function that finds the longest palindromic substring in a given sentence. A palindromic substring reads the same forwards and backwards. The function should ignore spaces, punctuation, and case. If there are multiple palindromic substrings of the same length, return the first one found. -- Generosa

// Test cases
console.log(longestPalindromicSubstring("Madam Arora teaches malayalam")); // "malayalam"
console.log(longestPalindromicSubstring("Nurses Run")); // "nursesrun"
console.log(longestPalindromicSubstring("ABC")); // "a"

// Write a function that calculates the sum of all numbers in a nested array. The array may contain integers, nested arrays of integers, or a mix of both. (for ruby and JS don’t use flatten) -- Hamdi

// Test cases
console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150