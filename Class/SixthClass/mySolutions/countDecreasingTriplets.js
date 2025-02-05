/*
Problem
  - Given an array of numbers, return the
    count of all combination of 3 numbers
    where the values are in decreasing order.

  - Input: Array of numbers
  - Output: number representing amount of numbers in decreasing order

  - Rules
    - Explicit:
      - Determine if values are decreasing order

    - Implicit:

  - Questions

Examples and Test Cases
console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
//543, 542, 541, 532, 531, 432, 431, 431, 421, 321
console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
console.log(countDecreasingTriplets([1, 2, 3, 4, 5]));
// Expected output: 0 (No combinations)

Data Structures

Algorithm

create function countDecreasingTriplets which defines parameter inputArray
  - define variable finalArray = to empty array
  - iterate over elements of input array until second to last element
    - iterate over next elements of input array
      - iterate over next elements of input array
        - if first element minus second element equals 1 and
          second element minus third element equals 1
          - push three elements to finalArray

  - return length of finalArray

Code
*/

function countDecreasingTriplets(inputArray) {
  let finalArray = [];

  for (let idx = 0; idx < inputArray.length - 2; idx++) {
    for (let jdx = idx + 1; jdx < inputArray.length - 1; jdx++) {
      for (let kdx = jdx + 1; kdx < inputArray.length; kdx++) {
        if (inputArray[idx] > inputArray[jdx] &&
          inputArray[jdx] > inputArray[kdx]) {
          finalArray.push([inputArray[idx], inputArray[jdx], inputArray[kdx]]);
        }
      }
    }
  }
  return finalArray.length;
}

// Test cases
console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)