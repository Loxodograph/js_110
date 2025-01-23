/*
Problem
  - Write a function that returns the maximum possible consecutive
    subarray where the elements form an arithmetic progression (the
    difference between consecutive numbers is constant).

    The minimum possible length of the subarray is 2.
    If there’s none, return [].
  - Input: An array of numbers.
  - Output: The longest consecutive subarray where all elements form an arithmetic progression. 

  - Rules
    - Explicit:
      - An arithmetic progression (AP) is a sequence of numbers where the
        difference between consecutive terms is constant.
      - The function should return the longest subarray where this condition is met

    - Implicit:

  - Questions
    
Examples and Test Cases

console.log(longestArithmeticSubarray([1, 3, 5, 7, 9, 11])); 
// Expected: [1, 3, 5, 7, 9, 11]

console.log(longestArithmeticSubarray([10, 7, 4, 1, -2, 0, -3, -6]));
// Expected: [10, 7, 4, 1, -2]

console.log(longestArithmeticSubarray([1, 2, 4, 6, 10, 12]));
// Expected: [4, 6, 10, 12]

console.log(longestArithmeticSubarray([5, 5, 5, 5, 5]));
// Expected: [5, 5, 5, 5, 5]

console.log(longestArithmeticSubarray([1, 2, 3, 5, 8, 11]));
// Expected: [1, 2, 3]


Data Structures

Algorithm

Code
*/