// Create a function called sumOfVowelPairs that takes a sentence and returns
// the total sum of the lengths of all word pairs where both words start with
// a vowel (a, e, i, o, u).
/*
Problem
  Create function that takes sentence, returns total sum of lengths
  of all words where both words start with a vowel

  Rules
    Explicit:
      both words must start with vowel to be considered a pair
      vowels are a,e,i,o,u

  AN APPLE 7
  AN A  3
  AN AWAY 6
  APPLE A 6
  APPLE AWAY 9
  A AWAY 5

  7 + 3 + 12 + 14 = 36

Data structure
array to iterate over words

Algorithm
create function sumofVowelPairs which takes sentence argument
create variable vowels containing all vowels
create variable totalSum equal to zero
create variable wordsArray equal to sentence split at spaces
iterate over words in wordsArray
  iterate over remaining words in wordsArray
    if first word starts with vowel and second word starts with vowel
      add lengths to totalSum
return totalSum
*/

function sumOfVowelPairs(str) {
  let vowels = "aeiouAEIOU";
  let totalSum = 0;
  let wordsArray = str.split(" ");

  for (let first = 0; first < wordsArray.length - 1; first++) {
    for (let last = first + 1; last < wordsArray.length; last++) {
      if (vowels.includes(wordsArray[first][0]) &&
        vowels.includes(wordsArray[last][0])) {
        totalSum += wordsArray[first].length + wordsArray[last].length;
      }
    }
  }
  return totalSum;
}

console.log(sumOfVowelPairs("An apple a day keeps the doctor away")); //36
console.log(sumOfVowelPairs("Every engineer enjoys innovative algorithms")); //156