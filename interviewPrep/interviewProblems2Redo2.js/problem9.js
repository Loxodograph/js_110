/*
Create a function that takes two string arguments and returns the
number of times that the second string occurs in the first string.
Note that overlapping strings don't count: 'babab' contains 1 instance
of 'bab', not 2.

You may assume that the second argument is never an empty string.

Problem:
  Create function that returns number of times substring occurs in string

  Rules:
    explicit:
      Overlapping strings do not count
      Second argument is never an empty string
  Input:  String, Substring
  Output: Number of occurences of substring in string

Examples
  See Below

Data Structures
  String

Algorithm

  while string includes substring
    increment count
    remove substring from string
return count
*/
function countSubstrings(str, substr) {
  let count = 0;

  while (str.includes(substr)) {
    count++;
    str = str.slice((str.indexOf(substr) + substr.length));
  }
  return count;
}

const p = console.log;
p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);