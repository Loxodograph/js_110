/*
Create function that takes two string arguments
return the number of times that the second string
occurs in the first string

create function countSubstrings which takes 2 string arguments
  define variable count = 0;
  while string1 length is greater than string2 length
    if string1 includes string2
      string1 sliced from index of string to + length of string2
      count plus one
  return count
*/

function countSubstrings(str1, str2) {
  let count = 0;
  while (str1.includes(str2)) {
    str1 = str1.slice(str1.indexOf(str2) + str2.length);
    count++;
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