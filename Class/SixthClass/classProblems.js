// # & Write a function, `negate`, that converts all `“yes”` words to `"no"` and `"no"` words to `"yes"` in a sentence. The comparison for `"yes"` and `"no"` should be case insensitive.`"yes"` and `"no"` should be negated even if ending with `.`, `?`, `,`, or `!`. -- Nick

// Test cases
console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"


// # & Given an array of numbers, return the count of all combination of 3 numbers where the values are in decreasing order. -- Generosa

// Test cases
console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)

// function countDecreasingTriplets(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         let threeNumbers = [arr[i], arr[j], arr[k]];
//         if (arr[i] > arr[j] && arr[j] > arr[k]) {
//           result.push(threeNumbers);
//         }
//       }
//     }
//   }
//   return result.length;
// }

// // Test cases
// console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
// console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
// console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)