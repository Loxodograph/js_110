/*
Write a function robustSearch that takes two arguments:
an array of words and a query term.

The function should return an array of words
from the given array that match the query term.

The function should be case insensitive, it should consider partial matches,
and to account for keyboard typo should consider the that last two
letters of the query term may have been reversed.

Problem:
  Create function robustSearch that takes array and search term arguments

  The function should return an array of words, from the given array
  that match the query term

  Case insensitive. Consider partial matches
  to account for typo consider that last two letters may be reversed

  Input: Array of Words, string search term
  Output: Array of words that match search term

  Rules:
    Case insensitive
    Consider partial matches
    Consider last two letters may be reversed

Examples
["develop", "develpo", "deep", "dive", "devel"]
  devel
    develop
    develpo
    devel

["apple", "banana", "cherry"]
  naan
    banana

  testnig

Algorithm
Create function switchLastLetters which takes a string argument
  return string with last two letters switched

Create function robust search which takes array and search term arguments
  create finalArray variable set to empty array
  iterate over element of array
    if lowercase element includes lowercase search term
      add to finalArray
    if lowercase element with last letters switched includes lower search term
      add to finalArray
  return finalArray
*/

function robustSearch(arr, query) {
  return arr.filter(element => {
    return element.toLowerCase().includes(query.toLowerCase()) ||
      switchLastLetters(element).toLowerCase().includes(query.toLowerCase());
  });
}

function switchLastLetters(word) {
  return word.slice(0, word.length - 2) +
    word.slice(word.length - 1) +
    word.slice(word.length - 2, word.length - 1);
}

// Test Cases

console.log(
robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")
);

// // ["develop", "develpo", "devel"]

console.log(robustSearch(["apple", "banana", "cherry"], "naan"));

// // ["banana"]

console.log(robustSearch(["testing", "switch", "characters"], "testnig"));

// // []