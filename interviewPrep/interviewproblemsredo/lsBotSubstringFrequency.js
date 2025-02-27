/*
Write a function that takes two strings as arguments:
a word and a text. The function should return an object
where the keys are all the unique substrings of the
word (including the word itself), and the values are
the number of times each substring appears in the text.
The function should be case-insensitive.

Rules:
1.  Substrings should include the word itself and
    all possible contiguous substrings.
2.  The count should be case-insensitive.
3.  Overlapping substrings should be counted separately.
4.  If a substring doesn't appear in the text,
    it should still be included in the result with a count of 0.

count is case insensitive, toLowerCase()

algorithm
create function substringFrequency which takes two string arguments
create variable resultObj set to empty object

iterate over elements of first string
  iterate over remaining elements of first string
    create slice from first element to second
      add slice as key to resultObj with the value 0

iterate over elements of second string
  iterate over remaining elements
    create slice from first element to second element
    if element is included as key in resultObj
      increment value of key

return resultObj
*/

function substringFrequency(substring, str) {
  let resultObj = {};

  for (let i = 0; i < substring.length; i++) {
    for (let j = i + 1; j <= substring.length; j++) {
      let slice = substring.slice(i, j).toLowerCase();
      resultObj[slice] = 0;
    }
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let slice = str.slice(i, j).toLowerCase();
      if (resultObj[slice] >= 0) {
        resultObj[slice]++;
      }
    }
  }
  return resultObj;
}
console.log(substringFrequency('ab', 'ababa'));
// Expected Output: { a: 3, b: 2, ab: 2 }

console.log(substringFrequency('aab', 'aabaabaab'));
// Expected Output: { a: 6, aa: 3, aab: 3, ab: 3, b: 3 }

console.log(substringFrequency('abc', 'ABC abc Abc'));
// // Expected Output: { a: 3, ab: 3, abc: 3, b: 3, bc: 3, c: 3 }

console.log(substringFrequency('hello', 'hello world'));
// // Expected Output: { h: 1, he: 1, hel: 1, hell: 1, hello: 1, e: 1, el: 1, ell: 1, ello: 1, l: 3, ll: 1, lo: 1, o: 2 }

console.log(substringFrequency('x', 'abc'));
// // Expected Output: { x: 0 }