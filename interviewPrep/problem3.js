/*
Problem
  - Create a function that takes a string argument and returns a copy of the
    stringwith everysecond character in every third word converted to
    uppercase. Other characters should remain the same.

  - Input: String
  - Output: String with second character of third word converted to uppercase

  - Rules
    - Explicit:
      - only second character of third word should be changed
        - other characters remain the same

    - Implicit:

  - Questions

Examples and Test Cases

Data Structures
Strings and Arrays

Algorithm
Create function toWeirdCase which takes a string argument
  Convert string to array.
  iterate over elements of string
    if index + 1 is evenly divisible by 3
      - split word into wordArray
        - iterate over letters of WordArray
          - if index + 1 is evenly divisible by 2
            - letter is uppercase
  join string.

Code
*/

function toWeirdCase(string) {
  let stringArray = string.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    if ((i + 1) % 3 === 0) {
      let wordArray = stringArray[i].split("");
      for (let j = 0; j < wordArray.length; j++) {
        if ((j + 1) % 2 === 0) {
          wordArray[j] = wordArray[j].toUpperCase();
        }
      }
      stringArray[i] = wordArray.join("");
    }
  }
  return stringArray.join(" ");
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