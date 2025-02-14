/*
Create function that takes string argument
returns copy of the string
with every second character in every third word
converted to uppercase. All other characters remain the same

algorithm

create function toWeirdCase which takes string as argument;

define variable WordArray = to string split at each word

iterate over elements of wordArray
  if idx + 1 is evenly divisible by 3
    split word array into letterArray
      for each cahracter in letter array
        if index + 1 is evenly divisible by 2
          element at index+1 is to uppercase
    join letterArray
return joined wordArray
*/

function toWeirdCase(string) {
  let wordArray = string.split(" ");

  wordArray.forEach((element, idx) => {
    if ((idx + 1) % 3 === 0) {
      let letterArray = element.split("");
      letterArray.forEach((letter, jdx) => {
        if ((jdx + 1) % 2 === 0) {
          letterArray[jdx] = letter.toUpperCase();
        }
        wordArray[idx] = letterArray.join("");
      });
    }
  });
  return wordArray.join(" ");
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
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);