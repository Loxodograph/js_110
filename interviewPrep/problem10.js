/*
Problem
  - Create function, takes string of numbers as argument
  - return number of even number substrings which can be formed
  - string will always contain only numbers
  - count every substring, even duplicates

  Input: string
  Output: Number

Example
  - See Below

Data structure
strings and numbers

Algorithm
create function evenSubstrings which takes a string of digits as argument
  define variable totalCount = 0;
  iterate over elements of string
    - iterate over next elements of string
      - create slice of string from first element to second element + 1
      - if Number(slice) is even
        - increase totalCount
  return totalCount
*/
function evenSubstrings(strOfDigits) {
  let totalCount = 0;
  for (let i = 0; i < strOfDigits.length; i++) {
    for (let j = i; j < strOfDigits.length; j++) {
      let slice = strOfDigits.slice(i, j + 1);
      if (Number(slice) % 2 === 0) {
        totalCount++;
      }
    }
  }
  return totalCount;
}

const p = console.log;
p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);