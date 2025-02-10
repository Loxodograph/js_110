/*
Problem :
  - Create function takes 2 string arguments
  - Return number of times string2 occurs in string1
  - Overlapping Strings don't count
  - Second argument is never empty

Examples
See Below

Data Structure
Strings

Algorithm
  - Create function countSubstrings which takes 2 string arguments
    - define variable totalCount = 0
    - define variable substringLength = string2.length
    - iterate over elements of string
      - if string1 includes string2
        - string1 = string1.slice(substringLength)
        - increment totalCount
    - return totalCount
*/
function countSubstrings(str1, str2) {
  let totalCount = 0;
  let substringLength = str2.length;

  while (str1.length >= substringLength) {
    if (str1.includes(str2) && substringLength === 2) {
      str1 = str1.slice(substringLength);
      totalCount++;
    } else if (str1.includes(str2)) {
      str1 = str1.slice(substringLength + 1);
      totalCount++;
    } else {
      break;
    }
  }
  return totalCount;
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