// Implement a function that finds substrings in a word that
// are pseudo-consonant blends.
// A pseudo-consonant blend is two or three consonants
// that are right next to each other.

/*

Problem
  find pseudo consonants substrings in a string
    pseudo consonants are 2 or 3 consonants next to each other

algorithm

create function findPseudoConsonantBlends which takes string argument
  create resultArray variable
  while str has length greater than one
    create regex variable set to vowels
    create 3 character long slice of elements
    check if slice contains no vowels
      add slice to finalArray
      string = remaining characters
    else check if first 2 characters of slice contains no vowels
      add 2 character slice to final array
      string = remaining characters
    else
      string = skip character
  return resultArray

// Test cases
console.log(findPseudoConsonantBlends("psychology")); // ["psy", "ch", "gy"]
console.log(findPseudoConsonantBlends("strengths")); // ["str", "ngt", "hs"]
console.log(findPseudoConsonantBlends("rhythms")); // ["rhy", "thm"]
console.log(findPseudoConsonantBlends("happy")); // ["ppy"]
console.log(findPseudoConsonantBlends("example")); // ["mpl"]

*/
function findPseudoConsonantBlends(str) {
  let resultArray = [];

  while (str.length > 1) {
    let regex = /[aeiou]/;

    // create 3 letter slice
    let slice = str.slice(0, 3);

    //if no vowels detected
    if (!slice.match(regex)) {
      resultArray.push(slice);
      str = str.slice(3);

    // check if 2 character pseudo-consonant
    } else if (!slice.slice(0, 2).match(regex)) {
      resultArray.push(slice.slice(0, 2));
      str = str.slice(2);

    // skip current character
    } else {
      str = str.slice(1);
    }
  }
  return resultArray;
}

/*

Staff solutions

function findPseudoConsonantBlends(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let blends = [];
  let currentBlend = '';

  for (let i = 0; i < word.length; i++) {
    if (!vowels.includes(word[i].toLowerCase())) {
      currentBlend += word[i];
      if (currentBlend.length === 3) {
        blends.push(currentBlend);
        currentBlend = '';
      }
    } else {
      if (currentBlend.length >= 2) {
        blends.push(currentBlend);
      }
      currentBlend = '';
    }
  }

  // To handle the case where the word ends with a blend
  if (currentBlend.length >= 2) {
    blends.push(currentBlend);
  }

  return blends;
}

*/

// Staff Solution

// function findPseudoConsonantBlends(word) {
//   const consonantBlendPattern = /[^aeiou]{2,3}/gi;
//   let matches = word.match(consonantBlendPattern);
//   return matches || [];
// }

console.log(findPseudoConsonantBlends("psychology")); // ["psy", "ch", "gy"]
console.log(findPseudoConsonantBlends("strengths")); // ["str", "ngt", "hs"]
console.log(findPseudoConsonantBlends("rhythms")); // ["rhy", "thm"]
console.log(findPseudoConsonantBlends("happy")); // ["ppy"]
console.log(findPseudoConsonantBlends("example")); // ["mpl"]