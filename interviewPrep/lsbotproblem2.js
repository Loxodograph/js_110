/*
Write a function that takes a string and returns a new
string with every word capitalized, except for the words
"the", "a", "an", "and", "but", "or", "for", "nor",
"on", "at", "to", "from", "by", "in"
(unless they're the first word in the string).

*/

function titleCase(str) {
  let forbiddenWords = ["the", "a", "an", "and", "but", "or", "for", "nor",
    "on", "at", "to", "from", "by", "in"];
  let wordArray = str.split(" ").map(element => {
    if (!forbiddenWords.includes(element) ||
      forbiddenWords.indexOf(element) === 0) {
      return element[0].toUpperCase() + element.slice(1);
    }
    return element;
  });
  return wordArray.join(" ");
}

console.log(titleCase('the quick brown fox'));
// 'The Quick Brown Fox'
console.log(titleCase('a tale of two cities'));
// 'A Tale of Two Cities'
console.log(titleCase('to be or not to be'));
// 'To Be or Not to Be'