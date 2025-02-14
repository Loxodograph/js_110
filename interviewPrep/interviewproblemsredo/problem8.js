/*
Create function that takes non-empty string as an argument
string is lowercase
return length of longest vowel substring

create function longestVowelSubstring which takes string argument
  define variable vowel = aeiou
  define variable longestSubstring = to empty string
  define variable currentSubstring = to empty string
  iterate over elements of string
    if element is included in vowels
      add element to current substring
        if current substring is longer than longestSubstring
          longestSubstring = currentSubstring
    else
      currentSubstring equal to empty string
  return longestSubstring length
*/

function longestVowelSubstring(str) {
  let vowels = "aeiou";
  let longestSubstring = "";
  let currentSubstring = "";

  for (let idx = 0; idx < str.length; idx++) {
    if (vowels.includes(str[idx])) {
      currentSubstring += str[idx];
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }
    } else {
      currentSubstring = "";
    }
  }
  return longestSubstring.length;
}
const p = console.log;
p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);