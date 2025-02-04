/*
Problem
  Create a function called decoder that decodes a secret message
  from a sentence.
  The secret message is formed by retrieving every n**-th character** from
  every n**-th word** of the sentence.

  •  If the word has fewer than n characters, skip that word.
  •  If there are fewer than n words in the sentence, return an empty string.
  •  Words in the sentence are separated by spaces.

  Input: sentence string, number
  Output: Secret message string

  Rules
    - Explicit:
      - If word has fewer than number characters, skip word
      - if there are fewer words than number, return empty string
      - words are separated by spaces
      - return every number characters of every number words
    - Implicit:

// Test cases

console.log(decoder("She sells sea shells on the sea shore", 2));
// Output: "elhlshhr"

console.log(decoder("The quick brown fox jumps over the lazy dog", 3));
// Output: "oeg"

console.log(decoder("I love programming in JavaScript", 3));
// Output: "oai"

console.log(decoder("Just a simple test sentence to decode", 4));
// Output: "t"

console.log(decoder("This will not work well", 5));  // Output: ""

console.log(decoder("Send every code to find secrets hidden", 2));
// Output: "vroert"

Algorithm
  - create function decoder which defines a sentence and number parameter
    - define variabled decodedMessage
    - split sentence into wordsArray variable
    - iterate over elements of wordsarray starting at number - 1
      (index of number element)
      - iterate over letters of word starting at number - 1
        (index of number element)
          - add letter to decodedMessage
    - return decodedMessage
*/

function decoder(sentence, num) {
  let decodedMessage = "";
  let wordArray = sentence.split(" ");
  for (let idx = num - 1; idx < wordArray.length; idx += num) {
    for (let ltrIdx = num - 1; ltrIdx < wordArray[idx].length; ltrIdx += num) {
      decodedMessage += wordArray[idx][ltrIdx];
    }
  }
  return decodedMessage;
}

console.log(decoder("She sells sea shells on the sea shore", 2));
// Output: "elhlshhr"

console.log(decoder("The quick brown fox jumps over the lazy dog", 3));
// Output: "oeg"

console.log(decoder("I love programming in JavaScript", 3));
// Output: "oai"

console.log(decoder("Just a simple test sentence to decode", 4));
// Output: "t"

console.log(decoder("This will not work well", 5));  // Output: ""

console.log(decoder("Send every code to find secrets hidden", 2));
// Output: "vroert"