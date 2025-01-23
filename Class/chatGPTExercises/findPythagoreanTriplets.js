/*
Problem
  - Write a function that, given an array of numbers,
    finds all unique triplets [a,b,c][a,b,c] where a2+b2=c2a2+b2=c2.
    The function should return an array of these
    triplets in ascending order of a,b,ca,b,c.
    If no triplets are found, return an empty array.

  - Input: An array of numbers
  - Output: An array of unique triplets [a,b,c][a,b,c] such that a2+b2=c2a2+b2=c2,
            sorted in ascending order.

  - Rules
    - Explicit:
      - For each pair of numbers aa and bb, calculate c=a2+b2c=a2+b2
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

Code
*/