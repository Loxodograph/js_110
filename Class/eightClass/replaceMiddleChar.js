// Given a sentence, replace the middle character of each word with length 3 or more with `*`. If the word has an even length, replace the character just before the midpoint.

/*
for each word, with a length of 3 or more. replace the middle character with
"*"
if word has even length, replace just before midpoint

ex sits s*ts

input: string
output: modified string

algorithm
create function replaceMiddleChar which takes string argument
split string into wordArray variable
iterate over elements of wordArray
  if word has more than 3 characters
    split word into array
      splice * into array at midpoint
        join word together and replace word in wordArray
return modified string
*/

function replaceMiddleChar(str) {
  let wordArray = str.split(" ");

  for (let idx = 0; idx < wordArray.length; idx++) {
    if (wordArray[idx].length >= 3) {
      let letters = wordArray[idx].split("");
      let halfwayPoint = Math.floor(letters.length / 2);

      letters.splice(halfwayPoint, 1, "*");
      wordArray[idx] = letters.join("");
    }
  }
  return wordArray.join(" ");
}

// Test cases
console.log(replaceMiddleChar("The quick fox jumps")); // "T*e qu*ck f*x ju*ps"
console.log(replaceMiddleChar("A cat sits")); // "A c*t s*ts"
console.log(replaceMiddleChar("Apple pie is good")); // "Ap*le p*e is g*od"
console.log(replaceMiddleChar("Hi bye")); // "Hi b*e"