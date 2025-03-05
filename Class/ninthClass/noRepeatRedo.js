// Given a string, find all substrings of length 3 or more with
// no repeating characters. Return an empty array if none exist.
/*
Problem
  Create a function, which takes string argument
    Find all substrings with length three or more, and no repeating characters
    Return an empty array if no such substring exists

  Input: String
  Output: Array of Substrings

Examples - See Below

Data Structure
Array to store substrings

Algorithm
Create function substringsWithoutRepeats which takes string argument
define variable substringArray equal to empty array
iterate over elements of array
  iterate over next elements of array, starting at second next element
    create slice equal to at least 3 elements from start to end
      if every element in slice is unique
        push slice to substringArray
return substringArray

*/

function substringsWithoutRepeats(string) {
  let substringArray = [];
  for (let start = 0; start < string.length - 2; start++) {
    for (let end = start + 2; end < string.length; end++) {
      let slice = string.slice(start, end + 1).split("");
      if (slice.every(element => {
        return string.indexOf(element) === string.lastIndexOf(element);
      })) {
        substringArray.push(slice.join(""))
      }

    }
  }
  return substringArray;
}
// Test cases
console.log(substringsWithoutRepeats("abcde")); // ["abc", "abcd", "abcde", "bcd", "bcde", "cde"]
console.log(substringsWithoutRepeats("aabbcc")); // []
console.log(substringsWithoutRepeats("aaa")); // []
console.log(substringsWithoutRepeats("xyzabc")); // ["xyz", "xyza", "xyzab", "xyzabc", "yza", "yzab", "yzabc", "zab", "zabc", "abc"]