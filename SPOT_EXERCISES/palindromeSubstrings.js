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

function substrings(string) {
  let resultArray = [];
  for (let idx = 0; idx < string.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < string.length; jdx++) {
      resultArray.push(string.slice(idx, (jdx + 1)));
    }
  }
  return resultArray;
}

function isPalindrome(string) {
  return (string === string.split("").reverse().join(""));
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));

console.log(palindromeSubstrings("abcddcbA"));

console.log(palindromeSubstrings("palindrome"));

console.log(palindromeSubstrings(""));

console.log(palindromeSubstrings('racecar'));

