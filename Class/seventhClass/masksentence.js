function maskSentence(string) {
  let words = string.split(" ");

  for (let idx = 1; idx < words.length; idx++) {
    if (+words[idx]) {
      words[idx] = "" + "#".repeat(words[idx].length);
    } else if (words[idx].startsWith(words[idx][0].toUpperCase())) {
      words[idx] = "" + "*".repeat(words[idx].length);
    }
  }

  return words.join(" ");
}
console.log(maskSentence("They bought 5 apples from John yesterday.")); // They bought # apples from **** yesterday.
console.log(maskSentence("Alice and Bob went to Paris in 2021 to have a vacation.")); // Alice and *** went to ***** in #### to have a vacation.