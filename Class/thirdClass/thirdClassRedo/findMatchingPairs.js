/*

Problem
  - Given a sentence, find all pairs of words whose
    first letter matches the last letter of its pair.
    Return an empty array if there’s no such pair.
    Only consider words that have at least length of 2 for the pairings.

  - Input: string
  - Output: nested array containing pairs

  - Rules
    - Explicit:
      - A pair is a word where first latter of one word
        matches last letter or another word
      - if there is no such pair, return empty array
      - only consider words that are at least length of 2

    - Implicit:

  - Questions

Examples and Test Cases

console.log(findMatchingPairs("The cat in the hat"));
      // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
console.log(findMatchingPairs("A man a plan a canal Panama")); // []
console.log(findMatchingPairs("This sentence has no pairs"));
            // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
console.log(findMatchingPairs("Apple leads to leap")); // []

Data Structures
Arrays for iteration purposes
nested array to return

algorithm

create function findMatchinPairs which takes string argument
create variable finalArray equal to empty array
split string into word elements
iterate over elements of word array
  iterate over remaining elements of word array
    if first letter of first element equals
      last letter of second element
      push elements as array to finalArray
return finalArray
*/

function findMatchingPairs(str) {
  let wordArray = str.split(" ");
  let finalArray = [];

  for (let i = 0; i < wordArray.length - 1; i++) {
    for (let j = i + 1; j < wordArray.length; j++) {
      if (wordArray[i].length <= 2) continue;

      if (wordArray[i][0].toLowerCase() ===
        wordArray[j][wordArray[j].length - 1].toLowerCase()) {
        finalArray.push([wordArray[i], wordArray[j]]);
      }
    }
  }
  return finalArray;
}

console.log(findMatchingPairs("The cat in the hat"));
// [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]

console.log(findMatchingPairs("A man a plan a canal Panama")); // []

console.log(findMatchingPairs("This sentence has no pairs"));
// [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]

console.log(findMatchingPairs("Apple leads to leap")); // []