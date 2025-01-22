// // Write a function robustSsearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider the that last two letters of the query term may have been reversed. -- Rey

// // Test Cases
// console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
// console.log(robustSearch(["apple", "banana", "cherry"], "naan")); // ["banana"]
// console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []




// Write a function robustSsearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider that the last two letters of the query term may have been reversed. -- Rey

/*
In: array (strings), target string
Out: array (source strings)
Rules:
  - source strings in output:
    -- contain target string at least (iow, partial match is ok)
    -- last two characters of source string can be swapped and still match
    -- case insensitive
  - Default return: empty array

[D]
1. Iterate over source strings
2. Find strings or substrings that match target string
3. Return matched source strings in array

- create 'matchedStringsArray' array variable
- iterate over source strings array (can also use filter)
  -- checkMatch (helper)
  -- if (checkMatch)
    --- append current word to matchedStringsArray 
- Return 'matchedStringsArray'

(helper)
checkMatch
- iterate over each character of current word
  -- create substring from current character to last character
  -- create altSubstring from current character to last character (with last 2 characters swopped)
  -- if subtring OR altSubstring matches target string
    --- return true
- Return false
*/

// didnt check case sensitivity 
// didnt check keyboard typos

function robustSearch(source, target) {
  let matchedStringsArray = [];

  source.forEach(word => {
    if (checkMatch(word, target)) matchedStringsArray.push(word)
  })

  return matchedStringsArray;
}

function checkMatch(word, target) {
  let chars = word.split('');

  for (let idx = 0; idx < chars.length; idx++) {
    let substring = chars.slice(idx).join('');

    if (substring === target) return true;
  }

  return false;
}

// function robustSearch(words, query) {
//   if (query.length < 2) return [];
//   const normalizedQuery = query.toLowerCase();
//   const swappedQuery = swapLastTwoChars(normalizedQuery);

//   return words.filter(word => {
//     const normalizedWord = word.toLowerCase();
//     return normalizedWord.includes(normalizedQuery) || normalizedWord.includes(swappedQuery);
//   });
// }

// function swapLastTwoChars(str) {
//   return str.slice(0, -2) + str[str.length - 1] + str[str.length - 2];
// }

// Test Cases
console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
console.log(robustSearch(["apple", "banana", "cherry"], "nana")); // ["banana"]
console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []
