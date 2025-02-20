/*
// ^ Write a function that masks proper nouns and numbers in a sentence.
// Use * to mask proper nouns and use # to mask numbers.
// You may assume that a sentence will not begin with a proper noun and will
// not end with a number or proper noun. Numbers can only be integers.

Problem
  Create function that converts proper nouns and numbers to * and # respectively
  First word can't be proper noun
  ignore last word
  Numbers are integers only
  Proper Nouns always start with capital letter

Data Structure
  array

Algorithm

Create function maskSentence which takes string as argument
  split sentence into array
    iterate over elements of array
      if element isNumber
        element equals # repeated for length of original element
      else if element is ProperNoun && index is not 0
        element = * repeated for length of original element
  join array
  return joined array.

define function isProperNoun which takes a string argument, word
  if first letter of word is capital
    return true
  else return false

Create function isNumber which takes string argument, number
  if number is number
    return true
  else return false
*/
function maskSentence(string) {
  return string.split(" ").map((element, index) => {
    if (isNumber(element)) {
      return "#".repeat(element.length);
    } else if (isProperNoun(element) && index !== 0) {
      return "*".repeat(element.length);
    } else {
      return element;
    }
  }).join(" ");
}

function isProperNoun(word) {
  return word[0] === word[0].toUpperCase();
}

function isNumber(number) {
  if (Number(number) || Number(number) <= 0) return true;
  return false;
}


console.log(maskSentence("They bought 5 apples from John yesterday.")); // They bought # apples from **** yesterday.
console.log(maskSentence("Alice and Bob went to Paris in 2021 to have a vacation.")); // Alice and *** went to ***** in #### to have a vacation.