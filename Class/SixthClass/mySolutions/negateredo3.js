/*
Write a function, `negate`, that converts all `“yes”` words to `"no"`
and `"no"` words to `"yes"` in a sentence. The comparison for `"yes"`
and `"no"` should be case insensitive.`"yes"` and `"no"` should be negated
even if ending with `.`, `?`, `,`, or `!`.

Problem
  Create a function which turns no to yes and yes to no

  Rules
    Case insensitive
    Account for punctuation

  Input: String
  Output: Modified String

Examples
  See Below

Data Structure
  Array to separate words in sentence

Algorithm

  create function negateWord which takes string argument
    if word is no, word is yes
    if word is yes, word is no
    if word is No word is Yes
    if word is Yes word is No
    return word

  create function negate which take string argument
  create variable punctuation equal to '.?!,'
  split sentence into array of words
    iterate over words
      define variable lastChar equal last character of word
      if last character of word is punctuation
        return word sliced to second to last character negated
      else
        return word negated
  join array

*/

function negate(str) {
  let punctuation = ".?!,";
  return str.split(" ")
    .map(word => {
      let lastChar = word[word.length - 1];
      if (punctuation.includes(lastChar)) {
        return negateWord(word.slice(0, word.length - 1)) + lastChar;
      } else {
        return negateWord(word);
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
  }
  return word;
}

// Test cases
console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"