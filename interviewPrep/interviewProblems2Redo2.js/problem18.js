/*
Create a function that takes an array of integers as an argument.
Determine and return the index N for which all numbers with an
index less than N sum to the same value as the numbers with an
index greater than N. If there is no index that would make this
happen, return -1.

If you are given an array with multiple answers,
return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0.
Likewise, the sum of the numbers to the right of the last
element is 0.

problem
  Create function that returns the index for which all numbers
  on the left of the index, sum to the value of all numbers on
  the right of the index
  If no index exists, return -1

  If there are multiple answers, return smallest index

Examples
 1, 2, 4, 4, 2, 3, 2 index 3
 0, 1, 2, 3, 4, 5, 6
 left sum 7 right sum 7

 7, 99, 51, -48, 0, 4 index 1
 0, 1, 2, 3, 4, 5
 left sum 7 right sum 7

data structure
arrays

algorithm
create function equalSumIndex which takes array
*/


const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);