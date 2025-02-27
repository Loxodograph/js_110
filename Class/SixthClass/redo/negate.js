/*
Write a function, `negate`, that converts all `“yes”` words to `"no"`
and `"no"` words to `"yes"` in a sentence. The comparison for `"yes"` and
`"no"` should be case insensitive.`"yes"` and `"no"` should be negated even
if ending with `.`, `?`, `,`, or `!`.

Problem
  write a function that converts all yes words to no and all no words to yes
    should be case insensitive
  words should negate even if they have punctuation

  input: String containing yes and no
  output: String with yes and no switched/negated


data structure
array to iterate over words of string

algorithm
create function negateWord which takes word string argument
  create switch in case of word
    if word is yes make word no
    if word is Yes make word No
    if word is No make word Yes
    if word is no make word yes
  return word

create function negate which takes string argument
create variable punctuation equal to '.?,!'
split string into wordArray
iterate over elements of WordArray
  if lastCharacter of word is punctuation
    save last character to variable lastChar
    element = negateWord(element) + lastChar
  else
    element = negateWord(element);
return wordArray joined with spaces
*/

function negate(str) {
  let punctuation = ".?,!";
  let wordArray = str.split(" ");

  return wordArray.map(element => {
    if (punctuation.includes(element.slice(element.length - 1))) {
      let lastChar = element.slice(element.length - 1);
      return negateWord(element.slice(0, element.length - 1)) + lastChar;
    } else {
      return negateWord(element);
    }
  }).join(" ");
}

function negateWord(word) {
  switch (word) {
    case "yes":
      word = "no";
      break;
    case "no":
      word = "yes";
      break;
    case "Yes":
      word = "No";
      break;
    case "No":
      word = "Yes";
      break;
    default:
      break;
  }
  return word;
}

// Test cases
console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"