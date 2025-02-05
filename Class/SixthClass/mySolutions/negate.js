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

console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"

Data Structures
  - Strings

Algorithm
  - create function negate which defines sentence parameter
    - define variable wordArray equal to sentence split at spaces
    - iterate over elements of wordArray
      - if lowercase element is equal to yes
        - else - element is equal to no
      - if lowercase element is equal to no
        - element is equal to yes

Code
*/


function negate(sentence) {
  return sentence.split(' ').map(word => {
    // Extract punctuation if present (., ?, !, or ,)
    const lastChar = word[word.length - 1];
    const punctuationMarks = ".?!,"; // List of punctuation marks
    const punctuation = punctuationMarks.includes(lastChar) ? lastChar : '';

    // Remove punctuation for comparison
    const wordWithoutPunctuation = punctuation ? word.slice(0, -1) : word;

    // Negate 'yes' and 'no', preserving case and punctuation
    let negatedWord;
    switch (wordWithoutPunctuation.toLowerCase()) {
      case 'yes':
        negatedWord = wordWithoutPunctuation[0] === 'Y' ? 'No' : 'no';
        break;
      case 'no':
        negatedWord = wordWithoutPunctuation[0] === 'N' ? 'Yes' : 'yes';
        break;
      default:
        negatedWord = wordWithoutPunctuation;
    }

    // Append the punctuation back to the negated word
    return negatedWord + punctuation;
  }).join(' ');
}

console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"