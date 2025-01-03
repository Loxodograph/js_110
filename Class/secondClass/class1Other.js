// Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words). -- Nick

// Test Cases
// console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: 37
// console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
// console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
// console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: null
// console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23

// Implement function that finds all fibonacci slices in a given array of integers. A Fibonacci slice is a sequence where every number after the first two is the sum of the two preceding ones. The minimum length is 3. -- Hamdi

// Test cases
console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3], [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]
console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ], [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]
console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ], [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]
console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16]));  // [[2, 4, 6], [2, 4, 6, 10], [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, lon16], [6, 10, 16]]
console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []

// Function to check if a slice is a Fibonacci sequence
function isFibonacci(slice) {
  for (let i = 2; i < slice.length; i++) {
    if (slice[i - 1] + slice[i - 2] !== slice[i]) {
      return false;
    }
  }
  return true;
}

function findFibonacciSlices(arr) {
  const result = [];

  // Iterate through the array to find all possible slices
  for (let start = 0; start < arr.length - 2; start++) {
    for (let end = start + 3; end <= arr.length; end++) {
      let slice = arr.slice(start, end);
      if (isFibonacci(slice)) {
        result.push(slice);
      }
    }
  }

  return result;
}

/// Implement a function that finds all pairs of numbers from an array, where:
// The first number in each pair is located at an even index in the original array and has a value less than 5.
// The second number in each pair is located at an odd index in the original array and has a value greater than 5.

// // Test cases
// console.log(findSpecialPairs([2, 6, 1, 7, 4, 10])); // [ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]
// console.log(findSpecialPairs([4, 9, 2, 6, 3, 11, 4])); // [ [ 4, 9 ], [ 4, 6 ], [ 4, 11 ], [ 2, 6 ], [ 2, 11 ], [ 3, 11 ] ]
// console.log(findSpecialPairs([5, 12, 3, 8])); // [ [ 3, 8 ] ]
// console.log(findSpecialPairs([7, 4, 6, 5])); // []
// console.log(findSpecialPairs([1, 7, 2, 8, 3, 9])); // [ [ 1, 7 ], [ 1, 8 ], [ 1, 9 ], [ 2, 8 ], [ 2, 9 ], [ 3, 9 ] ]

function findSpecialPairs(arr) {
  let result = [];


  for (let i = 0; i < arr.length; i += 2) {
    for (let j = i + 1; j < arr.length; j += 2) {
      if ((arr[i] < 5) && (arr[j] > 5)) {
        result.push([arr[i], arr[j]]);
        // console.log("p0", pairs);
      }
    }
  }

  return result;
}

// Test cases
console.log(findSpecialPairs([2, 6, 1, 7, 4, 10])); // [ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]
console.log(findSpecialPairs([4, 9, 2, 6, 3, 11, 4])); // [ [ 4, 9 ], [ 4, 6 ], [ 4, 11 ], [ 2, 6 ], [ 2, 11 ], [ 3, 11 ] ]
console.log(findSpecialPairs([5, 12, 3, 8])); // [ [ 3, 8 ] ]
console.log(findSpecialPairs([7, 4, 6, 5])); // []
console.log(findSpecialPairs([1, 7, 2, 8, 3, 9])); // [ [ 1, 7 ], [ 1, 8 ], [ 1, 9 ], [ 2, 8 ], [ 2, 9 ], [ 3, 9 ] ]



