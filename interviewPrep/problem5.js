/*
P
Create a function that takes a string argument and returns the
character that occurs most often in the string.
If there are multiple characters with the same greatest frequency,
return the one that appears first in the string.
When counting characters, consider uppercase and
lowercase versions to be the same.

Input: String
Output: String - Letter

Rules
  - Explicit:
    - Return the character that occurs most often in string
    - if there are multiple characters with same frequency, return
      the one that occurs first in the string
    - case insensitive
E
  p(mostCommonChar('Hello World') === 'l');

D
Objects and Strings

A

Create function, mostCommonChar which accepts string argument
  define variable resultObj equal to empty obj

  iterate over characters in string
    if resultObj[character.toLowerCase()]
      resultObj[character.toLowerCase()]++
    else
      resultObj[character.toLowerCase()] = 1;

*/

function mostCommonChar(str) {
  let resultObj = {};

  for (let idx = 0; idx < str.length; idx++) {
    if (resultObj[str[idx].toLowerCase()]) {
      resultObj[str[idx].toLowerCase()]++;
    } else {
      resultObj[str[idx].toLowerCase()] = 1;
    }
  }

  let entries = Object.entries(resultObj);
  let mostCommon = "";
  let currentAppearances = 0;

  for (let idx = 0; idx < entries.length; idx++) {
    if (entries[idx][1] > currentAppearances) {
      mostCommon = entries[idx][0];
      currentAppearances = entries[idx][1];
    }
  }
  return mostCommon;
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