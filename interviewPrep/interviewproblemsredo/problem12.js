/*
create function takes string argument
return true if is panagram
panagram contains every letter of alphabet at least once.

create variable alphabet equal to abcdefghijklmnopqrstuvwxyz
let normalizedSentence = sentence.toLowerCase();
for every character in sentence
  if alphabet includes character
    splice character from alphabet
return alphabet length equals 0
*/

function isPangram(sentence) {
  let alphabet =  "abcdefghijklmnopqrstuvwxyz";
  let normalizedSentence = sentence.toLowerCase();

  for (let idx = 0; idx < sentence.length; idx++) {
    if (alphabet.includes(sentence[idx])) {
      alphabet.splice(alphabet.indexOf(sentence[idx]), 1);
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