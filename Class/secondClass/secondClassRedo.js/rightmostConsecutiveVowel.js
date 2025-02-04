/*
Problem
  - Given a sentence, write a function that finds the starting index
    of the rightmost occurrence of any consecutive vowel
    sequence in the sentence.

    The function should be case-insensitive and should only consider vowel
    sequences within individual words (not spanning multiple words).

  Input: sentence string
  Output: Number representing index of the rightmost
          occurence of any consecutive vowel sequence


// Test Cases
console.log(
  rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
);
// Output: 37
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore"));
// Output: 29
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs"));
// Output: 15
console.log(
  rightmostConsecutiveVowel("This sentence has no consecutive vowels")
);
// Output: null
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool"));
// Output: 23

algorithm
  - create function rightmostConescutiveVowel which takes a sentence as argument
    - define variable vowels
    - iterate over elements of sentence
      - if element and preceding element is vowel
        return index of preceding element;
    - return null
*/
function rightmostConsecutiveVowel(sentence) {
  let vowels = "AEIOUaeiou";
  for (let idx = sentence.length; idx >= 0; idx--) {
    if (vowels.includes(sentence[idx]) && vowels.includes(sentence[idx - 1])) {
      return idx - 1;
    }
  }
  return null;
}
console.log(
  rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
);
// Output: 37

console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore"));
// Output: 29
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs"));
// Output: 15
console.log(
  rightmostConsecutiveVowel("This sentence has no consecutive vowels")
);
// Output: null
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool"));
// Output: 23