/*
Problem
  - create program that takes string argument
  - return true if string is pangram
  - otherwise return false

  input: string
  output: boolean

  Explicit
    - pangram is sentence that contains every letter at least once.

Data structure
array and string

algorithm
  create function isPangram which takes string argument
    define constant alphabet equal to all letters
    iterate over letter of string
      - if alphabet includes letter
        - splice letter from alphabet
    if alphabet length is 0, return true else return false
*/

function isPangram(string) {
  let alphabet = ["a", 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let idx = 0; idx < string.length; idx++) {
    if (alphabet.includes(string[idx])) {
      alphabet.splice(alphabet.indexOf(string[idx]), 1);
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