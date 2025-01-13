function sortStringsByConsonants(wordArray) {
  let wordArrayCopy = wordArray.slice();

  let sortedWords = wordArrayCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) -
           countMaxAdjacentConsonants(a);
  });
  return sortedWords;
}

function countMaxAdjacentConsonants(word) {
  let wordArray = word.split(" ").join("").split("");
  let count = 0;
  let tempString = "";

  for (let char of wordArray) {
    if (!"aeiou".includes(char)) {
      tempString += char;
    } else {
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
      }
      tempString = "";
    }
  }
  return count;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
