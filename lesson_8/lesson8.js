function sortStringsByConsonants(strings) {
  let stringsCopy = strings.slice();

  let sortedStrings = stringsCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) -
           countMaxAdjacentConsonants(a);
  });

  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  string = string.split(" ").join("");

  let count = 0;
  let adjacentConsonantsString = "";

  for (let index = 0; index < string.length; index++) {
    if ('bcdfghjklmnpqrstvwxyz'.includes(string[index])) {
      adjacentConsonantsString += string[index];
      
      if (adjacentConsonantsString.length > 1 && adjacentConsonantsString.length > count) {
      count = adjacentConsonantsString.length;
    }
    } else {
    adjacentConsonantsString = "";
  }
}
  return count;
}



let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']