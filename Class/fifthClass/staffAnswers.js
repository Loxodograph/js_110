// Write a function robustSsearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider the that last two letters of the query term may have been reversed. -- Rey


function robustSearch(words, query) {
  if (query.length < 2) return [];
  const normalizedQuery = query.toLowerCase();
  const swappedQuery = swapLastTwoChars(normalizedQuery);

  return words.filter(word => {
    const normalizedWord = word.toLowerCase();
    return normalizedWord.includes(normalizedQuery) || normalizedWord.includes(swappedQuery);
  });
}

function swapLastTwoChars(str) {
  return str.slice(0, -2) + str[str.length - 1] + str[str.length - 2];
}

// Test Cases
console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
console.log(robustSearch(["apple", "banana", "cherry"], "naan")); // ["banana"]
console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []
