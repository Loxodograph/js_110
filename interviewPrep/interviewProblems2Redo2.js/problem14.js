/*
Create a function that takes a single integer argument and returns
the sum of all the multiples of 7 or 11 that are less than the argument.
If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11,
14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.

Problem:
  Create function that returns sum of integers that are multiples of 7 & 11
  and less than argument

  Input: Number
  Output: Sum of multiples of 7 & 11 less than argument

Examples:
See below

Data Structures
Loops

Algorithm
create function sevenEleven which defines num parameter
  create variable totalSum equal to 0;
  create variable count equal to num - 1
  while count is greater than 0
    if count is multiple of 7 or 11
      add count to totalSum
    decrement count
  return totalSum
*/
function sevenEleven(num) {
  let totalSum = 0;
  let count = num - 1;

  while (count > 0) {
    if ((count % 7 === 0) || (count % 11 === 0)) {
      totalSum += count;
    }
    count--;
  }
  return totalSum;
}
const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);