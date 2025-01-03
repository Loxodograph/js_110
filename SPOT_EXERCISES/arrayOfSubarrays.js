/*

Problem
  - Write a function that takes three arguments (x, y, z) 
    and returns an array containing x subarrays (e.g. [[], [], []]), 
    each containing y number of item z.

  - Input: 3 elements of x y z numbers
  - Output: array containg x number of sub arrays each containing y number of element z


  - Rules
    - Explicit:
      - The first two arguments will always be integers.
      - The third argument is either a string or an integer.

    - Implicit:
      

  - Questions
    

Examples and Test Cases

matrix(3, 2, 3) // [[3, 3], [3, 3], [3, 3]]

matrix(2, 1, "edabit") // [["edabit"], ["edabit"]]

matrix(3, 2, 0) // [[0, 0], [0, 0], [0, 0]]

matrix(3, 4, 0) // [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

matrix(2, 3, "#") // [["#", "#", "#"], ["#", "#", "#"]]

Data Structures
arrays

Algorithm
  declare function matrix which takes x, y, z

  declare finalArray

  iterate x number of times
    declare yArray
    iterate y number of times
      add z, y number of times to yArray
    add yArray x number of times to finalArray
  return finalArray

Code
*/

function matrix(x, y, z) {
  let finalArray = [];

  for (let i = 0; i < x; i++) {
    let yArray = [];
    for (let j = 0; j < y; j++) {
      yArray.push(z)
    };
    finalArray.push(yArray);
  };
  return finalArray;
}

console.log(matrix(3, 2, 3)) // [[3, 3], [3, 3], [3, 3]]

console.log(matrix(2, 1, "edabit")) // [["edabit"], ["edabit"]]

console.log(matrix(3, 2, 0)) // [[0, 0], [0, 0], [0, 0]]

console.log(matrix(3, 4, 0)) // [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

console.log(matrix(2, 3, "#")) // [["#", "#", "#"], ["#", "#", "#"]]