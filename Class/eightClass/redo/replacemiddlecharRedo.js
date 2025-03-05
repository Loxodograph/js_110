/*
Given a sentence, replace the middle character
of each word with length 3 or more with `*`.
If the word has an even length, replace the character
just before the midpoint.

Problem
  Create function which replaces middle character on every word
  that has more than 3 characters. Replace with *
  If word is even length, replace the character before the midpoint.
    Ex good becomes g*od NOT go*d

Examples
  See Below

Data Structures
Array to iterate over and modify elements

Algorithm
  Create function replaceMiddleChar which takes string argument
    split string into array of words
    iterate over array
      if word is longer than three characters
        determine midpoint of word
        if word length is even
          midpoint is one less
        iterate over letters
          if letters index is midpoint + 1
            replace letter with *
          else
            return letter
      else return letter
*/

function replaceMiddleChar(str) {
  return str.split(" ")
    .map((word) => {
      if (word.length >= 3) {
        let midpoint = Math.floor(word.length / 2);
        if (word.length % 2 === 0) {
          midpoint -= 1;
        }
        return word.split("").map((letter, index) => {
          if (index === midpoint) {
            return "*";
          } else {
            return letter;
          }
        }).join("");
      } else {
        return word;
      }
    }).join(" ");
}


// Test cases
console.log(replaceMiddleChar("The quick fox jumps")); // "T*e qu*ck f*x ju*ps"
console.log(replaceMiddleChar("A cat sits")); // "A c*t s*ts"
console.log(replaceMiddleChar("Apple pie is good")); // "Ap*le p*e is g*od"
console.log(replaceMiddleChar("Hi bye")); // "Hi b*e"