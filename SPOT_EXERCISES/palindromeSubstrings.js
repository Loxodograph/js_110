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
    for (let j = idx + 1; j < string.length; j++) {
      resultArray.push(string.slice(idx, (j + 1)));
    }
  }
  return resultArray
}

function isPalindrome(string) {
  let stringArray = string.split("");
  if (string === stringArray.reverse().join("")) {
    return true
  }
  return false
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))

console.log(palindromeSubstrings("abcddcbA"))

console.log(palindromeSubstrings("palindrome"))

console.log(palindromeSubstrings(""))

