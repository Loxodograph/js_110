/*
Create function that takes string of digits as argument
return number of even-numbered substrings that can be formed

create function evenSubstrings which takes string as argument
  define variable count = 0;
  iterate over elements of string
    iterate over next elements of string
      let slice = string sliced from start to end elements
      if number version of slice is evenly divisible by 2
        increase count
  return count
*/

function evenSubstrings(digits) {
  let count = 0;
  for (let start = 0; start < digits.length; start++) {
    for (let end = start; end < digits.length; end++) {
      let slice = digits.slice(start, end + 1);
      if (Number(slice) % 2 === 0) {
        count++;
      }
    }
  }
  return count;
}
const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);