// FIRST PROBLEM

// Write a function that calculates the sum of all numbers in a nested array. The array may contain integers, nested arrays of integers, or a mix of both. (for ruby and JS don’t use flatten) -- Hamdi

// Test cases
// console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
// console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150

/*
P:
Input: a nested array (containing integers, nested arrays, or both)
Output: a number (sum of all numbers in nested array)

Rules:
--The array is never empty

// Test cases
console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21


console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150

Data Structure:
-a nested array (input)

Algorithm:
--INITIALIZE a variable `totalSum` to 0
--the sum of all numbers is 21
-ITERATE through the input array
--check if current element is an array
----IF it is, iterate over the array and get the sum of all elements in the array
------IF the array element is a number, ADD number to `totalSum`
------IF it's an array, ITERATE over the array and add the numbers to `totalSum`
-------ADD that sum to `totalSum`
---If it's a number, ADD that number to `totalSum`
--RETURN `totalSum`


function sumOfNestedArray(array) {
  let totalSum = 0;

  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      elem.forEach((elem2) => {
        if (typeof elem2 === "number") {
          totalSum += elem2;
        } else if (Array.isArray(elem2)) {
          elem2.forEach((elem3) => {
            totalSum += elem3;
          });
        }
      });
    } else if (typeof elem === "number") {
      totalSum += elem;
    }
  });

  return totalSum;
}

console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150
*/


/// STAFF SOLUTION


// function sumOfNestedArray(arr) {
//   let stack = [...arr];
//   let total = 0;

//   while (stack.length) {
//       let current = stack.pop();
//       // 2
// // [3, 4, 5, [1, 2]]
//       if (Array.isArray(current)) { // 2
//           stack.push(...current); // [3, 4, 5, 1, 2]
//       } else {
//           total += current;
//       }
//   }

//   return total;
// }


// SECOND PROBLEM

/* Write a function that finds the longest palindromic substring in a given sentence. A palindromic substring reads the same forwards and backwards. The function should ignore spaces, punctuation, and case. If there are multiple palindromic substrings of the same length, return the first one found. -- Generosa
input: string
output: string representing the longest palindromic substring
Rules:
- case insensitive
- ignore punctuation and spaces
- if there are multiple palindromic substrings, return the first one found
E:
D: string and arrays
A: 
- convert input string to an array and join to form one string without spaces
- initialize vars substring, longestPalindromeSubString
- iterate over the string using nested loop
  - compare element at index 0 with the next elements
  - create substring using slice 
  - check if it is a Palindrome (using helper)
  
  HELPER: isPalindrome 
  - compare original string with converted string to array of letters, reversed and joined

- compare substring length with longestPalindromeSubstring
- return longestPalindromicSubstring

*/

/*

function longestPalindromicSubstring(str) {
  let subString = "";
  let longestPalindromeSubString = "";
  let cleanedString = str.toLowerCase().split(" ").join("");

  for (let i = 0; i <= cleanedString.length; i++) {
    for (let j = i + 1; j <= cleanedString.length; j++) {
      subString = cleanedString.slice(i, j);
      if (isPalindrome(subString)) {
        if (subString.length > longestPalindromeSubString.length) {
          longestPalindromeSubString = subString;
        }
      }
    }
  }
  return longestPalindromeSubString;
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

*/

// Test cases
// console.log(longestPalindromicSubstring("Madam Arora teaches malayalam")); // "malayalam"
// console.log(longestPalindromicSubstring("Nurses Run")); // "nursesrun"
// console.log(longestPalindromicSubstring("ABC")); // "a"