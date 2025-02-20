// ^ Implement a function that finds substrings in a word that are pseudo-consonant blends. A pseudo-consonant blend is two or three consonants that are right next to each other.

// Test cases
console.log(findPseudoConsonantBlends("psychology")); // ["psy", "ch", "gy"]
console.log(findPseudoConsonantBlends("strengths")); // ["str", "ngt", "hs"]
console.log(findPseudoConsonantBlends("rhythms")); // ["rhy", "thm"]
console.log(findPseudoConsonantBlends("happy")); // ["ppy"]
console.log(findPseudoConsonantBlends("example")); // ["mpl"]

// ^ Write a function that masks proper nouns and numbers in a sentence. Use * to mask proper nouns and use # to mask numbers. You may assume that a sentence will not begin with a proper noun and will not end with a number or proper noun. Numbers can only be integers. -- Hamdi

// Test cases
console.log(maskSentence("They bought 5 apples from John yesterday.")); // They bought # apples from **** yesterday.
console.log(maskSentence("Alice and Bob went to Paris in 2021 to have a vacation.")); // Alice and *** went to ***** in #### to have a vacation.

// # Given an array of numbers, return true if at least 3 sets of 3 consecutive numbers are increasing order. -- Hamza

// Test cases
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false

/*
Staff Solution

// function threeIncreasingSets(arr) {
//   let count = 0;

//   for (let i = 0; i <= arr.length - 3; i++) {
//     // Check if the current set of three numbers is in increasing order
//     if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]) {
//       count += 1;
//       // Print the current set for visualization
//       console.log([arr[i], arr[i + 1], arr[i + 2]]);
//       // Return true early if we've found at least 3 sets
//       if (count >= 3) return true;
//     }
//   }

//   // Return false if less than 3 sets are found
//   return false;
// }



function maskSentence(sentence) {
  const words = sentence.split(' ');
  const maskedWords = words.map((word, index) => {
      // Check if the word is a proper noun (capitalized) and not the first word
      if (word[0] === word[0].toUpperCase() && word[0].match(/[A-Z]/i) && index !== 0) {
          return '*'.repeat(word.length);
      }
      // Check if the word is an integer
      else if (parseInt(word).toString() === word) {
          return '#'.repeat(word.length);
      }
      return word;
  });
  return maskedWords.join(' ');
}