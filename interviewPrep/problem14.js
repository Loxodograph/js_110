/*
Problem
  - create function that takes integer argument
  - return sum of all multiples of 7 and 11 that are less than argument
  - if a number is both multiple of 7 & 11 count only once

create function sevenEleven takes integer as argument
if argument is less than or equal to 0 return 0
  define variable count = number -1
  define variable totalSum = 0;
  while count > 0
    if count % 7 or count % 11 equals 0
      add count to total sum
    decrement count
  return totalSum
*/
function sevenEleven(integer) {
  let count = integer - 1;
  let totalSum = 0;
  while (count > 0) {
    if (count % 7 === 0 || count % 11 === 0) {
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