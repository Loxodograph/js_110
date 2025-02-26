// Given an array of numbers and a segment length k, reverse every consecutive segment of k elements. If the last segment is shorter than k, leave it unchanged. -- Nick

// Test cases
// console.log(reverseSegments([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4]
// console.log(reverseSegments([1, 2, 3, 4, 5], 2)); // [2, 1, 4, 3, 5]
// console.log(reverseSegments([7, 8, 9], 4)); // [7, 8, 9]
// console.log(reverseSegments([1, 2, 3, 4], 2)); // [2, 1, 4, 3]

// Given an array of numbers, return all pairs whose sum is odd. Return an empty array if no such pairs exist. -- Generosa

// Test cases
// console.log(oddSumPairs([1, 2, 3, 4])); // [[1, 2], [1, 4], [2, 3], [3, 4]]
// console.log(oddSumPairs([2, 4, 6, 8])); // []
// console.log(oddSumPairs([1, 3, 5])); // [] 
// console.log(oddSumPairs([10, 11])); // [[10, 11]]


// Given a sentence, replace the middle character of each word with length 3 or more with `*`. If the word has an even length, replace the character just before the midpoint. -- Hamdi

// Test cases
// console.log(replaceMiddleChar("The quick fox jumps")); // "T*e qu*ck f*x ju*ps"
// console.log(replaceMiddleChar("A cat sits")); // "A c*t s*ts"
// console.log(replaceMiddleChar("Apple pie is good")); // "Ap*le p*e is g*od"
// console.log(replaceMiddleChar("Hi bye")); // "Hi b*e" 


/*
Given an array of numbers, and a segment length k
reverse every consecutive segment of k elements
if last segment is shorter than k leave it unchanged

input: Array, and number k representing consecutive segment
output: array with some elements reversed

[1,2,3,4,5,6] 3 [3,2,1,6,5,4]
[1,2,3,4,5] 2 [2,1,4,3,5]

data structures
arrays to iterate over

algorithm

create function reverseSegments which takes an array and number k as argument
create finalArray variable set to empty array
iterate over elements of input array, increasing by k
  if index + k is greater than the length of the array
    make slice of k length starting at index
    add slice to final array
  else make reversed slice of k length starting at index
    add slice to final array
return finalArray
*/
// function reverseSegments(array, k) {
//   let finalArray = [];
//   for (let idx = 0; idx < array.length; idx += k) {
//     if (idx + k > array.length) {
//       let slice = array.slice(idx, idx + k);
//       finalArray.push(...slice);
//     } else {
//       let slice = array.slice(idx, idx + k).reverse();
//       finalArray.push(...slice);
//     }
//   }
//   return finalArray;
// }

// console.log(reverseSegments([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4]
// console.log(reverseSegments([1, 2, 3, 4, 5], 2)); // [2, 1, 4, 3, 5]
// console.log(reverseSegments([7, 8, 9], 4)); // [7, 8, 9]
// console.log(reverseSegments([1, 2, 3, 4], 2)); // [2, 1, 4, 3]


/* 
P: Given an array of numbers, return all pairs whose sum is odd. Return an empty array if no such pairs exist. -- Generosa
input: array
output: array of arrays containing odd pairs
rules:
- if no odd pair exists, return an empty array

E:

D: arrays

A: 
Initialize a result empty array
Iterate over the input array using a nested loop to get pairs
  - check if the pairs sum is odd
  - append pair to result
return result  
 */

// function oddSumPairs(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if ((arr[i] + arr[j]) % 2 === 1) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return result;
// }
// // Test cases
// console.log(oddSumPairs([1, 2, 3, 4])); // [[1, 2], [1, 4], [2, 3], [3, 4]]
// console.log(oddSumPairs([2, 4, 6, 8])); // []
// console.log(oddSumPairs([1, 3, 5])); // []
// console.log(oddSumPairs([10, 11])); // [[10, 11]]


/*
P:
Input: a string
Output: a string (middle character replaced in words w/ length > 3)

Rules:
-N/A

Examples:
console.log(replaceMiddleChar("The quick fox jumps")); // "T*e qu*ck f*x ju*ps"
console.log(replaceMiddleChar("A cat sits")); // "A c*t s*ts"
console.log(replaceMiddleChar("Apple pie is good")); // "Ap*le p*e is g*od"
console.log(replaceMiddleChar("Hi bye")); // "Hi b*e"

Data Structure:
-an array (intermediate)
(convert the input string to an array of words)

Algorithm:
-CONVERT input string to array of words, `words`
-INITIALIZE `result` to a new array 
-ITERATE over each word in `words` 
--ITERATE over each character in current word
--IF length of current word is GREATER THAN 3, REPLACE the middle character with an asterisk (`*`) and APPEND the new word onto `result` 
--ELSE IF length of current word is EVEN, REPLACE the character just before the midpoint with an asterisk
--ELSE, APPEND the current word to `result` 
-RETURN `result` (as a string)
*/
// function replaceMiddleChar(string) {
//   let words = string.split(" ");

//   let result = words.map((word) => {
//     if (word.length > 3) {
//       return word.split('').map((char) => {
//         if (word.indexOf(char) === Math.floor(word.length / 2)) {
//           return (char = "*");
//         } else {
//           return char;
//         }
//       });
//     } else if (word.length % 2 === 0) {
//       return word.split('').map((char) => {
//         if (word.indexOf(char) === Math.floor(word.length / 2) - 1) {
//           return (char = "*");
//         } else {
//           return char;
//         }
//       });
//     }
//   });

//   console.log(result);
// }

// Test cases
console.log(replaceMiddleChar("The quick fox jumps")); // "T*e qu*ck f*x ju*ps"
console.log(replaceMiddleChar("A cat sits")); // "A c*t s*ts"
console.log(replaceMiddleChar("Apple pie is good")); // "Ap*le p*e is g*od"
console.log(replaceMiddleChar("Hi bye")); // "Hi b*e"

// function replaceMiddleChar(str) {
//   let wordArray = str.split(" ");

//   for (let idx = 0; idx < wordArray.length; idx++) {
//     if (wordArray[idx].length >= 3) {
//       let letters = wordArray[idx].split("");
//       let halfwayPoint = Math.floor(letters.length / 2);
//       if (letters.length % 2 === 0) halfwayPoint -= 1;
//       letters.splice(halfwayPoint, 1, "*");
//       wordArray[idx] = letters.join("");
//     }
//   }
//   return wordArray.join(" ");
// }

function replaceMiddleChar(sentence) {
  return sentence.split(' ').map(word => {
      if (word.length < 3) return word;
      let mid = Math.floor(word.length / 2);
      if (word.length % 2 === 0) mid--;
      return word.slice(0, mid) + '*' + word.slice(mid + 1);
  }).join(' ');
}
