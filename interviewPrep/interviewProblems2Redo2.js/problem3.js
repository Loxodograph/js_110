/*
Create a function that takes a string argument and returns a copy of the
string with every second character in every third word converted to
uppercase. Other characters should remain the same.

Problem
Create a function that takes string argument
return copy of the string
with every second character in everyh third word converted to uppercase.

Input: String
Output: Modified String

algorithm
create function toWeirdCase which takes string argument
iterate over words of string
  if index +1 is divisible by three
    iterate over characters of string
      if index + 1 is divisible by two
        make character uppercase
return modified string
*/

function toWeirdCase(str) {
  return str.split(" ").map((word, index) => {
    if ((index + 1) % 3 === 0) {
      return word.split("").map((letter, index) => {
        if ((index + 1) % 2 === 0) {
          return letter.toUpperCase();
        } else {
          return letter;
        }
      }).join("");
    } else {
      return word;
    }
  }).join(" ");
}

const p = console.log;
let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
  "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
  "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);