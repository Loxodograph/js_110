/*

Problem
  - Create a function called decoder that decodes a secret
    message from a sentence.

    The secret message is formed by retrieving every n**-th character**
    from every n**-th word** of the sentence.


  - Input: String, and number representing n'th value
  - Output: decoded string

  - Rules
    - Explicit:
      - If the word has fewer than n characters, skip that word.
      - If there are fewer than n words in the sentence, return an empty string.
      - Words in the sentence are separated by spaces.

    - Implicit:


  - Questions


Examples and Test Cases

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

Data Structures
array


Algorithm
  - create function decoder which takes a string and number argument
    - define result variable
    - split string into words array
      - iterate over elements of words array
        - if element index + 1 is evenly divisible by number argument
          - split word into letters
            - iterate over elements of wordArray
              - if element at index + 1 is divisible by number argument
                 - add to result letter at index one less than number argument
    - return result

Code
*/

// function decoder(sentence, count) {
//   let result = "";
//   let wordArray = sentence.split(" ");


//   for (let idx = 0; idx < wordArray.length; idx++) {
//     if ((idx + 1) % count === 0) {
//       let letterArray = wordArray[idx];
//       for (let j = 0; j < letterArray.length; j++ ) {
//         if ((j + 1) % count === 0 ) {
//           result += letterArray[j];
//         }
//       }
//     }
//   }

//   return result;
// }

function decoder(sentence, count) {
  let result = "";
  let wordArray = sentence.split(" ");

  wordArray.forEach((word, idx) => {
    if ((idx + 1) % count === 0) {
      let letterArray = word.split("");
      letterArray.forEach((letter, index) => {
        if ((index + 1) % count === 0) {
          result += letter;
        }
      });
    }
  });
  return result;
}


// Test cases
console.log(decoder("She sells sea shells on the sea shore", 2));  // Output: "elhlshhr"
console.log(decoder("The quick brown fox jumps over the lazy dog", 3));  // Output: "oeg"
console.log(decoder("I love programming in JavaScript", 3));  // Output: "oai"
console.log(decoder("Just a simple test sentence to decode", 4));  // Output: "t"
console.log(decoder("This will not work well", 5));  // Output: ""
console.log(decoder("Send every code to find secrets hidden", 2));  // Output: "vroert"