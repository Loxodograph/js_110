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

Data Structures
  - Strings

Algorithm
  - create function negate which defines sentence parameter
    - return split sentence at each space mapped and joined
      - map sentence, iterating over each word element
        - determine last character of word
        - define variable containing all punctuation marks
        - define variable punctuation which is either the punctuation of
          the last character or an empty string
        - define variable wordWithoutPunctuation which slices to the second to
          last character of the string if theres puncuation exists. Return word
          if no punctuation exists
        - define variable negatedWord
        - Create switch statement which checks wordWithoutPunctuation lowerCase
          - if word is yes, and first character is capital, negatedWord is No.
            else negatedWord is no
          - if word is no and first character is capital negatedWord is Yes.
            else negatedWord is yes
          - default case, negatedWord is word
          - return negatedWord plus any punctuation


Code
*/
function negate(sentence) {
  return sentence.split(" ").map(word => {

    const lastChar = word[word.length - 1];
    const punctuationMarks = ".?!,";
    const punctuation = punctuationMarks.includes(lastChar) ? lastChar : "";

    const wordWithoutPunctuation = punctuation ? word.slice(0, -1) : word;

    let negatedWord;
    switch (wordWithoutPunctuation.toLowerCase()) {
      case "yes":
        negatedWord = wordWithoutPunctuation[0] === "Y" ? "No" : "no";
        break;
      case "no":
        negatedWord = wordWithoutPunctuation[0] === "N" ? "Yes" : "yes";
        break;
      default:
        negatedWord = wordWithoutPunctuation;
        break;
    }
    return negatedWord + punctuation;
  }).join(" ");
}

console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"