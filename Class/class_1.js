/*
problem
// # Write a function that returns the maximum possible 
// consecutive alternating odd and even (or even and odd) 
// numbers. Minimum possible length is `2`. 
// If there’s none return `[]`. -- Nick




  - input: array

  - output: array

  - explicit rules
    - will be given array of numbers
    - must return array containing maximum possible length of
      consecutive odd and even or even and odd integers

  - implicit rules
    - if there is none, return []
    - minimum possible length is 2

examples

// Test cases
console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]


data structure
array of numbers


algorithm
  - declare variable known as longest sub array
  - declare variable known as consecutive array
  - initialize longest subarray to first element of array
  - iterate over array with for loop
  - if array[i] % 2 !== array[i - 1] % 2, add to consecutive array
    - if consecutive array is longer than longest sub array, make longest
      - sub array = to consecutive array.
  -else consecutivesubarray = array[i]
  - if longest sub array is > 2, return longest sub array
  - else return empty array
*/

function longestAlternatingSubarray(array) {
  let longestSubarray = [];
  let consecutiveSubArray = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if ((array[i] % 2 !== array[i - 1] % 2)) {
      consecutiveSubArray.push(array[i]);
      if (consecutiveSubArray.length > longestSubarray.length) {
        longestSubarray = [...consecutiveSubArray];
      }
    } else {
      consecutiveSubArray = [array[i]];
    };
  }
  return longestSubarray.length >= 2 ? longestSubarray : []
}

// function longestAlternatingSubarray(array) {
//   let finalArray = [];

//   array.forEach((element1, index) => {
//     let element2 = array[index + 1];

//     if (element1 % 2 !== element2 % 2) {
//       if (!finalArray.includes(element1)) {
//         finalArray.push(element1);
//       };
//       if (!finalArray.includes(element2)) {
//         finalArray.push(element2);
//       };
//     } 
//     });
//   return finalArray;
// }

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]

// function longestAlternatingSubarray(arr) {
//   let longestSubarray = [];
//   let consecutiveSubArray = [arr[0]];

//   for (let i = 1; i < arr.length; i++) {
//       if ((arr[i] % 2 !== arr[i - 1] % 2)) {
//           consecutiveSubArray.push(arr[i]);
//           if (consecutiveSubArray.length > longestSubarray.length) {
//               longestSubarray = [...consecutiveSubArray];
//           }
//       } else {
//           consecutiveSubArray = [arr[i]];
//       }
//   }

//   return longestSubarray.length >= 2 ? longestSubarray : [];
// }