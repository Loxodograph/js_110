function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function substrings(string) {
  let result = [];
  for (let startingIndex = 0; startingIndex <= string.length - 2;
    startingIndex++) {
    for (let numChars = 2;
      numChars <= (string.length - startingIndex); numChars++) {
      let substring = string.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
    }
  }
  return result;
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}
console.log(palindromeSubstrings("racecar"));