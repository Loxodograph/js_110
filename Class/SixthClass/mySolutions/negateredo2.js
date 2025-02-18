/*
Problem
  - Write a function, `negate`, that converts all `“yes”` words to
    `"no"` and `"no"` words to `"yes"` in a sentence.
    The comparison for `"yes"` and `"no"` should be case insensitive.
    `"yes"` and `"no"` should be negated even if ending with
    `.`, `?`, `,`, or `!`.

  - Input: Sentence
  - Output: sentence with yes and No words switched

  - Rules
    - Explicit:
      - case insensitive
      - even if word ends with punctuation, should be negated.

    - Implicit:

Examples and Test Cases

console.log(negate("Yes, I said no but now I say yes."));
// "No, I said yes but now I say no."
console.log(negate("no way, yes way!"));
// "yes way, no way!"
console.log(negate("Yesterday is not today?"));
// "Yesterday is not today?"
console.log(negate("No, I do not know!"));
// "Yes, I do not know!"

first split sentence up into array at each space
iterate over elements of array
  if element includes punctuation
    punctuation variable = punctuation
    element variable = element without punctuation
    word = negater(word)
    element = word + punctuation

*/

function negate(sentence) {
  let wordArray = sentence.split(" ");
  for (let idx = 0; idx < wordArray.length; idx++) {
    if ("!,.?".includes(wordArray[idx].slice(-1))) {
      let punctuation = wordArray[idx].slice(-1);
      let element = wordArray[idx].slice(0, wordArray[idx].length - 1);
      let word = negater(element);
      wordArray[idx] = word + punctuation;
    } else {
      wordArray[idx] = negater(wordArray[idx]);
    }
  }
  return wordArray.join(" ");
}

function negater(word) {
  switch (word) {
    case 'No':
      return 'Yes';
    case "no":
      return "yes";
    case 'Yes':
      return 'No';
    case "yes":
      return "no";
    default:
      return word;
  }
}

console.log(negate("Yes, I said no but now I say yes."));
// "No, I said yes but now I say no."
console.log(negate("no way, yes way!"));
// "yes way, no way!"
console.log(negate("Yesterday is not today?"));
// "Yesterday is not today?"
console.log(negate("No, I do not know!"));
// "Yes, I do not know!"