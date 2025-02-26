// Given an array of numbers and a segment length k, reverse every consecutive segment of k elements. If the last segment is shorter than k, leave it unchanged. -- Nick

// Test cases
console.log(reverseSegments([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4]
console.log(reverseSegments([1, 2, 3, 4, 5], 2)); // [2, 1, 4, 3, 5]
console.log(reverseSegments([7, 8, 9], 4)); // [7, 8, 9]
console.log(reverseSegments([1, 2, 3, 4], 2)); // [2, 1, 4, 3]

// Given an array of numbers, return all pairs whose sum is odd. Return an empty array if no such pairs exist. -- Generosa

// Test cases
console.log(oddSumPairs([1, 2, 3, 4])); // [[1, 2], [1, 4], [2, 3], [3, 4]]
console.log(oddSumPairs([2, 4, 6, 8])); // []
console.log(oddSumPairs([1, 3, 5])); // [] 
console.log(oddSumPairs([10, 11])); // [[10, 11]]


// Given a sentence, replace the middle character of each word with length 3 or more with `*`. If the word has an even length, replace the character just before the midpoint. -- Hamdi

// Test cases
console.log(replaceMiddleChar("The quick fox jumps")); // "T*e qu*ck f*x ju*ps"
console.log(replaceMiddleChar("A cat sits")); // "A c*t s*ts"
console.log(replaceMiddleChar("Apple pie is good")); // "Ap*le p*e is g*od"
console.log(replaceMiddleChar("Hi bye")); // "Hi b*e"