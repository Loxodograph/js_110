/*

Problem
  - Create a function that returns an array that expands by 
    1 from 1 to the value of the input, and then reduces 
    back to 1

  - Input: Number
  - Output: Nested Array

  - Rules
    - Explicit:
      Items in the lists will be the same as the length of the lists

    - Implicit:
      

  - Questions
    - 

Examples and Test Cases
diamondArrays(1) // [[1]]

diamondArrays(2) // [[1], [2, 2], [1]]

diamondArrays(5) // [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]


Data Structures
Nested Arrays



Algorithm
  create function diamondArrays with parameter count
  create finalArray variable

  loop until count is reached
    let subArray = empty array
    loop until index is reached
      push index to subArray
    push subArray to final array
  loop from count until 0 is reached
    let subArray = empty array
    loop until index is reached
      push index to subArray
    push subArray to finalArray
  return finalArray

Code
*/

function diamondArrays(count) {
  let finalArray = [];

  for (let i = 1; i <= count; i++) {
    let subArray = [];
    for (let j = 1; j <= i; j++) {
      subArray.push(i);
    }
    finalArray.push(subArray);
  }
  for (let i = count - 1; i > 0; i--) {
    let subArray = [];
    for (let j = 1; j <= i; j++) {
      subArray.push(i);
    }
    finalArray.push(subArray);
  }
  console.log(finalArray);
}
diamondArrays(1);
diamondArrays(2);
diamondArrays(5);