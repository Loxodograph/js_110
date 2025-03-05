/*
// Given a string, find all substrings of length 3 or more with no repeating
// characters. Return an empty array if none exist. -- Nick

Problem
  Create a function which finds all substrings, length 3 or more
  which have no repeating characters
  Return empty array if none exist

  Input: string
  Output: array containing substrings

  Rules:
    explicit:
      If no possible substrings return empty array

Data structures

Array to store substrings

Algorithm
Create function substringsWithoutRepeats which takes string argument
define variable resultArr equal to empty array
iterate over elements of string
  iterate over remaining elements of string, start from second next element
    create slice containing at least 3 elements
    split slice into array
    if every character in array is unique
      push joined slice to resultArr
return resultArr
*/

function substringsWithoutRepeats(str) {
  let resultArr = [];

  for (let start = 0; start < str.length; start++) {
    for (let end = start + 2; end < str.length; end++) {
      let slice = str.slice(start, end + 1).split("");
      if (slice.every(letter => {
        //determine if character appears only once
        return slice.indexOf(letter) === slice.lastIndexOf(letter);
      })) {
        resultArr.push(slice.join(""));
      }
    }
  }
  return resultArr;
}

console.log(substringsWithoutRepeats("abcde")); // ["abc", "abcd", "abcde", "bcd", "bcde", "cde"]
console.log(substringsWithoutRepeats("aabbcc")); // []
console.log(substringsWithoutRepeats("aaa")); // []
console.log(substringsWithoutRepeats("xyzabc")); // ["xyz", "xyza", "xyzab", "xyzabc", "yza", "yzab", "yzabc", "zab", "zabc", "abc"]