/*
Create a function that takes an array of integers as an argument
and returns the number of identical pairs of integers in that
array.
For instance, the number of identical pairs in [1, 2, 3, 2, 1]
is 2: there are two occurrences each of both 2 and 1.

If the array is empty or contains exactly one value, return 0.

If a certain number occurs more than twice, count each complete
pair once. For instance, for [1, 1, 1, 1] and [2, 2, 2, 2, 2],
the function should return 2. The first array contains two
complete pairs while the second has an extra 2 that isn't part
of the other two pairs.

Problem:
  Create function that returns number of identical pairs of integers
  in input array

  Rules:
    Explicit:
      If array is empty or contains exactly one value, return 0
      If a number occures more than twice, count each complete pair exactly once
Example
  See Below

Data Structures
  Arrays & Numbers

Algorithm
  create function pairs which takes array of numbers as argument
  create variable countOfPairs equal to 0
  create variable workingArray equal to copy of array
  iterate over array
    create slice of array starting from next index from element
      if slice contains element
        increment count
        remove both element, and matching element from array

return count
*/

function pairs(arr) {
  let countOfPairs = 0;
  let workingArray = [...arr];

  for (let idx = 0; idx < arr.length; idx++) {
    let slice = workingArray.slice(idx + 1);
    if (slice.includes(arr[idx])) {
      workingArray.splice(workingArray.indexOf(arr[idx]), 1);
      countOfPairs++;
    }
  }
  return countOfPairs;
}
const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);