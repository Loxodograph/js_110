// Create a function called sumOfVowelPairs
// that takes a sentence and returns the total
// sum of the lengths of all word pairs where
// both words start with a vowel (a, e, i, o, u).

/*

Problem
  - Create a function called sumOfVowelPairs that takes a sentence
    and returns the total sum of lengths of all word pairs where
    both words start with a vowel

  - Input: Sentence
  - Output: Number representing length of all word pairs that start with vowels

  - Rules
    - Explicit:
      - vowel word pairs do not need to be adjacent
      - spaces count towards length

    - Implicit:
      - Word pairs are 2 words that both start with vowels

  - Questions

Examples and Test Cases

Test cases
console.log(sumOfVowelPairs("An apple a day keeps the doctor away"));

36

console.log(sumOfVowelPairs("Every engineer enjoys innovative
algorithms"));

156


Data Structures
Arrays

Algorithm

An apple a day keeps the doctor away"

An Apple // 8
An A // 4
An Away // 7
Apple A // 7
Apple Away // 10

//36

  - create function sumOfVowelPairs
    - define vowels variable containing uppercase and lowercase vowels
    - split sentence into array
    - define value sum - initialize to 0
    - Iterate over elements in array up to second to last
        - iterate over remaining elements in array up to last
          - if first element 0 index is vowel,
            AND second element 0 index is vowel
            - increment sum by first element length and second element length
    return sum

Code
*/

function sumOfVowelPairs(sentence) {
  let vowels = "aeiouAEIOU";
  let sentenceArray = sentence.split(" ");
  let sum = 0;

  for (let startIndex = 0; startIndex < sentenceArray.length - 1;
    startIndex++) {

    for (let secondIndex = startIndex + 1; secondIndex < sentenceArray.length;
      secondIndex++) {
      if (vowels.includes(sentenceArray[startIndex][0])
          && vowels.includes(sentenceArray[secondIndex][0])) {
        sum += sentenceArray[startIndex].length +
        sentenceArray[secondIndex].length;
      }
    }
  }
  return sum;
}
console.log(sumOfVowelPairs("An apple a day keeps the doctor away")); //36
console.log(sumOfVowelPairs("Every engineer enjoys innovative algorithms")); //156
