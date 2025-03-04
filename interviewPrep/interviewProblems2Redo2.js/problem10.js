/*
Create a function that takes a string of digits as an argument
and returns the number of even-numbered substrings that can be
formed. For example, in the case of '1432', the even-numbered substrings
are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.

If a substring occurs more than once, you should count each occurrence
as a separate substring.

Problem:
  Create function that returns number of even-numbered substrings in a string
  Count each occurence seperately

  Input: String
  Output: Number representing even numbered substrings

Examples:
  See Below

Data structures
  Strings and numbers

Algorithm

create variable count equal to zero
iterate over elements of string
  iterate over remaining elements of string
    create slice from start to end
      if slice is evenly divisible by 2
        increment count
return count
*/

function evenSubstrings(str) {
  let count = 0;

  for (let start = 0; start < str.length; start++) {
    for (let end = start; end < str.length; end++) {
      if (str.slice(start, end + 1) % 2 === 0) {
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