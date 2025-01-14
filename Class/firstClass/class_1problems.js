// Given 2 two arguments of an array of numbers and a number,
// find all the pairs that results in the forming a triangle with the number.

// Note: To determine if three numbers form a triangle you have to
// use the Triangle Inequality Theorem, which states that the sum of
// two side lengths of a triangle is always greater than the third side.
// If this is true for all three combinations of added side lengths,
// then you will have a triangle. -- Hamdi

console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []

console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]

console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]

console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]


// # Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is `2`. If there’s none return `[]`.

// Test cases
// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]

// Write a function that returns the longest consecutive numbers that are factors of the given target number.

// Test cases
// console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60));
// Expected: [12, 5, 4]

// console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12));
// Expected: [1, 2, 3, 4]

// console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150));
// Expected: [10, 15]

// console.log(longestConsecutiveFactors([1, 3, 7, 9], 21));
// Expected: [1, 3, 7]

// console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40));
// Expected: [2, 4]
