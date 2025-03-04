/*
Create a function that takes a string as an argument and returns
true if the string is a pangram, false if it is not.

Pangrams are sentences that contain every letter of the alphabet
at least once. For example, the sentence "Five quacking zephyrs
jolt my wax bed." is a pangram since it uses every letter at
least once. Note that case is irrelevant.

Problem :
  Create function that returns true, if string argument is
  pangram
  Rules
    Explicit:
      Pangram is a sentence that contains every letter of alphabet
      at least once

      Case insensitive
  Input - String
  Output - Boolean

Examples
  See below

Data Structures
  Strings and Array, containing all alphabetic characters

Algorithm
  create variable alphabet equal to array containing all alpha lowercase
  iterate over elements of string
    if alphabet includes element
      remove element from alphabet
  return if length of alphabet equals 0
*/
function isPangram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let idx = 0; idx < str.length; idx++) {
    if (alphabet.includes(str[idx])) {
      alphabet.splice(alphabet.indexOf(str[idx]), 1);
    }
  }
  return alphabet.length === 0;
}

const p = console.log;
p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);