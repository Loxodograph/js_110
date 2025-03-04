/*
Create a function that takes a nonempty string as an argument
and returns an array consisting of a string and an integer.
If we call the string argument s, the string component of the
returned array t, and the integer component of the returned
array k, then s, t, and k must be related to each other
such that s === t * k. The values of t and k should be the
shortest possible substring and the largest possible repeat
count that satisfies this equation.

You may assume that the string argument consists entirely of
lowercase alphabetic letters.

Problem:
  Create function that returns an array consisting of integer and string
    string argument = substring * integer
  substring and integer should be shortest possible substr and longest
  possible integer that satisfies the equation

  Consists entirely of lowercase letters

  Input: String
  Output: subString, Integer

Examples
  See Below

Data Structure
  Strings

Algorithm
  create function repeatedSubstring which takes string argument
    iterate over elements of str
      create variable count equal to 0
      create slice from start to end
        while slice length is less than string length
          if slice repeated countTimes equals string
            return array containing slice and count
          slice equals slice repeated count times
          increment count
*/

function repeatedSubstring(str) {
  for (let idx = 0; idx < str.length; idx++) {
    let count = 1;
    let substr = str.slice(0, idx + 1);
    let slice = str.slice(0, idx + 1);
    while (slice.length <= str.length) {
      if (substr.repeat(count) === str) {
        return [substr, count];
      }
      slice = substr.repeat(count);
      count++;
    }
  }
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));