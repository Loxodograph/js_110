/*
Problem
  - Create a function called hiddenWordExtractor
    that extracts a hidden word from a sentence.

    The hidden word is formed by taking the nth word's nth character,
    where n ranges from 1 to the length of the sentence.
  - Input: sentence
  - Output: decoded word

  - Rules
    - Explicit:
      - If a word has fewer than `n` characters, skip that word.
      - If there are fewer than `n` words in the sentence return an empty string
      - Words in the sentence are separated by spaces

    - Implicit:

  - Questions

Examples and Test Cases

console.log(hiddenWordExtractor("She sells sea shells on the sea shore"));
// Output: "Slsleo"

console.log(hiddenWordExtractor("The quick brown fox jumps over the lazy dog"));
// Output: "Tqfoej"

console.log(hiddenWordExtractor("JavaScript makes coding fun and exciting"));
// Output: "Jmmft"

console.log(
hiddenWordExtractor("One small step for man one giant leap for mankind")
);
// Output: "Oslfg"

console.log(hiddenWordExtractor("Short sentence"));
// Output: "Se"

console.log(
hiddenWordExtractor("Decode the secret messages within sentences carefully")
);
// Output: "Dtewsc"

Data Structures

Algorithm
  - create function hiddenWordExtractor which accepts a sentence as argument
    - define variable hiddenWord equal to empty string
    - define variable wordArray equal to sentence split into words
    - iterate over elements of word array
      - if element index is less than or equal to word length
          - add letter at element index to hiddenWord
    - return hiddenWord

Code
*/

function hiddenWordExtractor(sentence) {
  let hiddenWord = "";
  let wordArray = sentence.split(" ");
  for (let idx = 0; idx < wordArray.length; idx++) {
    if (idx < wordArray[idx].length) hiddenWord += wordArray[idx][idx];
  }
  return hiddenWord;
}

console.log(hiddenWordExtractor("She sells sea shells on the sea shore"));
// Output: "Seal"

console.log(hiddenWordExtractor("The quick brown fox jumps over the lazy dog"));
// Output: "Tuos"

console.log(hiddenWordExtractor("JavaScript makes coding fun and exciting"));
// Output: "Jadi"

console.log(
  hiddenWordExtractor("One small step for man one giant leap for mankind")
);
// Output: "Ome"

console.log(hiddenWordExtractor("Short sentence"));
// Output: "Se"

console.log(
  hiddenWordExtractor("Decode the secret messages within sentences carefully")
);
// Output: "Dhcsinl"