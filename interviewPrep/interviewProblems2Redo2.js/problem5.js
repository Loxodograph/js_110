/*
Create a function that takes a string argument and returns the
character that occurs most often in the string.
If there are multiple characters with the same greatest
frequency, return the one that appears first in the string.
When counting characters, consider uppercase and lowercase
versions to be the same.

Problem:
  Create function that returns character that occurs most often
  in a string.
    Input: String
    Output: String - letter that occurs most often in string

    Rules:
      Explicit:
        If multiple characters have the same frequency, return first
        Upper and lowercase are the same
Examples
  See below

Data Structures
  Arrays of words for iteration purposes
  Strings

Algorithm
  Create function mostCommonChar which takes string argument
  Declare variable letterObj equal to empty object
  Split string into words
    iterate over elements of strings
      if letterObj contains key
        increment keys value by one
      else
        key in letterObj equals 1
  create variable array of key value pairs
    sort array based on value in descending order
  return first key of array

*/
function mostCommonChar(str) {
  let letterObj = {};
  let wordArray = str.split(" ");

  wordArray.forEach(word => {
    word.split("").forEach(letter => {
      if (letterObj[letter.toLowerCase()]) {
        letterObj[letter.toLowerCase()]++;
      } else {
        letterObj[letter.toLowerCase()] = 1;
      }
    });
  });
  let keyValues = Object.entries(letterObj);
  let mostCommonChar = keyValues[0][0];
  let occurences = keyValues[0][1];
  for (let subarray of keyValues) {
    if (subarray[1] > occurences) {
      occurences = subarray[1];
      mostCommonChar = subarray[0];
    }
  }
  return mostCommonChar;
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