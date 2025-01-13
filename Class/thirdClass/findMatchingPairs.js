/*

Problem
  - Given a sentence, find all pairs of words whose
    first letter matches the last letter of its pair.
    Return an empty array if there’s no such pair.
    Only consider words that have at least length of 2 for the pairings.

  - Input: String sentence
  - Output: A nested array containing pairs of words

  - Rules
    - Explicit:
      - return empty array if no matching pairs

    - Implicit:
      - a pair is any two words that is longer than two characters
      - a match is valid if first letter of pair matches last letter of pair

  - Questions

Examples and Test Cases

console.log(findMatchingPairs("The cat in the hat"));
      // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
console.log(findMatchingPairs("A man a plan a canal Panama")); // []
console.log(findMatchingPairs("This sentence has no pairs"));
            // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
console.log(findMatchingPairs("Apple leads to leap")); // []

Data Structures

nested array containing matching pairs

Algorithm
  - create function findMatchingPairs which takes sentence as parameter
    - split sentence into array
    - create variable resultArray
    - iterate over elements of array until second to last element
      - inner loop iterates over next elements of array until last element
        - if either elements length is less than or equal to 2, continue;
        - else, if first letter of first element is equal to last letter
          of last element
            - add both elements to resultArray
    - return resultArray

Code
*/
function findMatchingPairs(sentence) {
  let sentenceArray = sentence.split(" ");
  let resultArray = [];

  for (let startIndex = 0; startIndex < sentenceArray.length - 1;
    startIndex++) {
    for (let secondIndex = startIndex + 1; secondIndex < sentenceArray.length;
      secondIndex++) {
      if (sentenceArray[startIndex].length <= 2 ||
           sentenceArray[secondIndex].length <= 2) {
        continue;
      }
      if (sentenceArray[startIndex][0].toLowerCase() ===
        sentenceArray[secondIndex][sentenceArray[secondIndex].length - 1]
          .toLowerCase()) {
        resultArray.push(
          [sentenceArray[startIndex], sentenceArray[secondIndex]]
        );
      }
    }
  }
  return resultArray;
}


console.log(findMatchingPairs("The cat in the hat")); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
console.log(findMatchingPairs("A man a plan a canal Panama")); // []
console.log(findMatchingPairs("This sentence has no pairs")); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
console.log(findMatchingPairs("Apple leads to leap")); // []
