/*
Problem
  - Write a function robustSearch that takes two arguments:
    an array of words and a query term.

    The function should return an array of words
    from the given array that match the query term.

    The function should be case insensitive, it should consider partial matches,
    and to account for keyboard typo should consider the that last two
    letters of the query term may have been reversed.

  - Input: an array of words and a query term

  - Output: an array of words that includes query term

  - Rules
    - Explicit:
      - Case insensitive
      - consider partial matches
      - last two characters may be swapped

    - Implicit:

  - Questions

Examples and Test Cases

console.log(
robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")
);
// ["develop", "develpo", "devel"]

console.log(robustSearch(["apple", "banana", "cherry"], "naan"));
// ["banana"]

console.log(robustSearch(["testing", "switch", "characters"], "testnig"));
 // []

Data Structures

Algorithm
  create function robustSearch which takes an inputArray of
  words and a query term
    - define finalArray = to empty array
    - iterate over elements of inputArray
      - if lowercase element includes to lowercase query term OR
        lastTwoLettersSwapped lowercase element includes lowercase query is true
        - push element to finalArray
    return finalArray

  create function lastTwoLettersSwapped which takes word as argument
    - return word with last two letters swapped

Code
*/

function lastTwoLettersSwapped(word1) {
  return word1.slice(0, word1.length - 2) +
    word1[word1.length - 1] + word1[word1.length - 2];
}

function robustSearch(inputArray, query) {
  let finalArray = [];
  for (let idx = 0; idx < inputArray.length; idx++) {
    if (inputArray[idx].toLowerCase().includes(query.toLowerCase()) ||
      lastTwoLettersSwapped(
        inputArray[idx].toLowerCase()).includes(query.toLowerCase())) {
      finalArray.push(inputArray[idx]);
    }
  }
  return finalArray;
}

console.log(
  robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")
);
// ["develop", "develpo", "devel"]

console.log(robustSearch(["apple", "banana", "cherry"], "naan"));
// ["banana"]

console.log(robustSearch(["testing", "switch", "characters"], "testnig"));
// []