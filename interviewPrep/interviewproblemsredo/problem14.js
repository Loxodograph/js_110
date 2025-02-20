/*
problem
  create function that takes integer argument
  return sum of all multiples of 7 or 11
  that are less than the argument

  count multiples of both 7 & 11 as just once

  if argument is negative return 0;

datastructures
variable totalSum which will calculate sum of multiples of 7 and 11;

algorithm
create function sevenEleven which takes integer argument
create count variable, equal to 7
create totalSum variable equal to 0
while count is less than argument
  if count is divisible by either 7 or 11
    add count to totalSum
  increase count by one
return total Count
*/

function sevenEleven(integer) {
  let count = 7;
  let totalSum = 0;

  while (count < integer) {
    if (count % 7 === 0 || count % 11 === 0) {
      totalSum += count;
    }
    count++;
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