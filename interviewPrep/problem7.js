/*
Problem:
  - Create function that takes array of integers as argument
  - return the number of identical pairs of integers in that array

  Input: Array
  Output: number of identical pairs

  Rules:
    - explicit
      - Return 0 if array is empty or contains only 1 value;
Examples
  See Below

Data Structure
Arrays

Algorithm
create function pairs which takes array as argument
  - define variable totalPairs equal to 0
  - define variable stack equal to first element of array
  - While array contains elements
    - if array includes stack
      - eliminate element from array
      - increase totalSum by 1
    - stack equals first element of array
  - return totalPairs
*/

function pairs(array) {
  let totalPairs = 0;
  let stack = array.shift();
  while (array.length) {
    if (array.includes(stack)) {
      array.splice(array.indexOf(stack), 1);
      totalPairs++;
    }
    stack = array.shift();
  }
  return totalPairs;
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);