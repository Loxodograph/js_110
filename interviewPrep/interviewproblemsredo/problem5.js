/*
Create function that takes string argument
return the character that occurs most in the string

if there are multiple characters with same frequency, return
the one that appears first in the string

case insensitive

create function mostCommonChar which takes string argument
define variable normalizedStringArray equal to string, lowercased,
  split at each character
define object resultObj equal to empty object

for each letter in normalizedStringArray
  if letter exists as key in result object
    increment value by one
  else
    create key with value of one

sort the entries of the resultObj object according to value descending
  return key of first result object element after sorted
*/

function mostCommonChar(string) {
  let normalizedStringArray = string.toLowerCase().split("");
  let resultObj = {};

  normalizedStringArray.forEach(element => {
    if (resultObj[element]) {
      resultObj[element]++;
    } else {
      resultObj[element] = 1;
    }
  });
  return Object.entries(resultObj).sort((a, b) => b[1] - a[1])[0][0];
}

const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');