// Write a function that returns the maximum possible consecutive
// alternating odd and even (or even and odd) numbers.
// Minimum possible length is 2. If there’s none return [].

// Test cases
// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6]));
// // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5]));
// // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17]));
// // Expected: [6, 7, 12, 11]

// Write a function robustSsearch that takes two arguments:
// an array of words and a query term.
// The function should return an array of words
// from the given array that match the query term.
// The function should be case insensitive, it should consider partial matches,
// and to account for keyboard typo should consider the that last two
// letters of the query term may have been reversed.

// Test Cases

// console.log(
// robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")
// );

// // ["develop", "develpo", "devel"]

// console.log(robustSearch(["apple", "banana", "cherry"], "naan"));

// // ["banana"]

// console.log(robustSearch(["testing", "switch", "characters"], "testnig"));

//  // []