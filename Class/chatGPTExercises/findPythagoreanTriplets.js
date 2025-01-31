/*
Problem
  - Write a function that, given an array of numbers,
    finds all unique triplets [a,b,c][a,b,c] where a2+b2=c2.

    The function should return an array of these
    triplets in ascending order of a,b,c.

    If no triplets are found, return an empty array.

  - Input: An array of numbers
  - Output: An array of unique triplets [a,b,c][a,b,c] such that a2+b2=c2,
            sorted in ascending order.

  - Rules
    - Explicit:
      - For each pair of numbers aa and bb, calculate c=SQRT(a2+b2)
      - Check if cc exists in the array and is an integer.
      - Ensure that each triplet is unique and in ascending order (a≤b≤c)(a≤b≤c)
    - Implicit:

  - Questions

Examples and Test Cases

console.log(findPythagoreanTriplets([3, 4, 5, 6, 8, 10]));
// Expected: [[3, 4, 5], [6, 8, 10]]

console.log(findPythagoreanTriplets([5, 12, 13, 9, 15, 7]));
// Expected: [[5, 12, 13], [9, 12, 15]]

console.log(findPythagoreanTriplets([1, 2, 3, 4, 6]));
// Expected: []

console.log(findPythagoreanTriplets([10, 24, 26, 7, 25, 24]));
// Expected: [[7, 24, 25], [10, 24, 26]]

Data Structures

Algorithm

  - create function findPythagoreanTriplets which takes an array of numbers
    - define variable finalArray equal to empty array
    - define variable workingArray equal to empty array
    - iterate over array of numbers from first element to third to last
      - iterate over array of numbers from second element to second to last
        - iterate over array of numbers from third element to last
          - working array is equal to array of three elements sorted
            in ascending order
          - if first element of working squared plus second element of
            working squared equals third element of working squared
              push all three elements as array to finalArray
    - return finalArray
Code
*/

function findPythagoreanTriplets(inputArray) {
  let finalArray = [];
  let seen = new Set();
  for (let i = 0; i < inputArray.length - 2; i++) {
    for (let j = i + 1; j < inputArray.length - 1; j++) {
      for (let k = j + 1; k < inputArray.length; k++) {
        let workingArray = [inputArray[i], inputArray[j],
          inputArray[k]].sort((a, b) => a - b);
        if ((workingArray[0] ** 2) + (workingArray[1] ** 2) ===
          (workingArray[2] ** 2)) {
          let key = workingArray.join(',');
          if (!seen.has(key)) {
            seen.add(key);
            finalArray.push(workingArray);
          }
        }
      }
    }
  }
  return finalArray.sort((a, b) => {
    return a.reduce((total, element) => total += element, 0) -
      b.reduce((total, element) => total += element, 0);
  });
}

console.log(findPythagoreanTriplets([3, 4, 5, 6, 8, 10]));
// Expected: [[3, 4, 5], [6, 8, 10]]

console.log(findPythagoreanTriplets([5, 12, 13, 9, 15, 7]));
// Expected: [[5, 12, 13], [9, 12, 15]]

console.log(findPythagoreanTriplets([1, 2, 3, 4, 6]));
// Expected: []

console.log(findPythagoreanTriplets([10, 24, 26, 7, 25, 24]));
// Expected: [[7, 24, 25], [10, 24, 26]]

// My solution

// function findPythagoreanTriplets(inputArray) {
//   let finalArray = [];
//   let workingArray = [];
//   for (let i = 0; i < inputArray.length - 2; i++) {
//     for (let j = i + 1; j < inputArray.length - 1; j++) {
//       for (let k = j + 1; k < inputArray.length; k++) {
//         workingArray = [inputArray[i], inputArray[j],
//           inputArray[k]].sort((a, b) => a - b);
//         if ((workingArray[0] ** 2) + (workingArray[1] ** 2) ===
//           (workingArray[2] ** 2)) {
//           finalArray.push(workingArray);
//         }
//       }
//     }
//   }
//   return finalArray.sort((a, b) => {
//     return a.reduce((total, element) => total += element, 0) -
//     b.reduce((total, element) => total += element, 0);
//   });
// }

// console.log(findPythagoreanTriplets([3, 4, 5, 6, 8, 10]));
// // Expected: [[3, 4, 5], [6, 8, 10]]

// console.log(findPythagoreanTriplets([5, 12, 13, 9, 15, 7]));
// // Expected: [[5, 12, 13], [9, 12, 15]]

// console.log(findPythagoreanTriplets([1, 2, 3, 4, 6]));
// // Expected: []

// console.log(findPythagoreanTriplets([10, 24, 26, 7, 25, 24]));
// // Expected: [[7, 24, 25], [10, 24, 26]]