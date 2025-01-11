/*

Problem
  - Implement the function/method, minimum shorten. The function shortens a
    sentence such that it will fit within the character limit set.

    It shortens by removing vowels in the sequence of a, e, i, o, and u.
    Start removing from the end of the sentence.
    If it can not be shortened to fit within character limit,
    return an empty string. Spaces don’t count for the limit. -- Nick

  - Input: string, number representing length of shortened string
  - Output: shortened string

  - Rules
    - Explicit:
      - remove vowels
      - begin removing at end of sentence
      - return empty string if cannot be shortened

    - Implicit:
      - spaces dont count


  - Questions


Examples and Test Cases

console.log(minimumShorten("This is a test sentence", 18));
// This is  test sentence

console.log(minimumShorten("Hello World", 8)); // Hllo Wrld

console.log(minimumShorten("Short", 10)); // Short

console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""

Data Structures

Algorithm
  create function minimumShorten which takes a string & number as arguments
    - determine length of string with noSpaces
    - split string into stringarray
    - if noSpaces length is shorter than number argument
      - return string
    - while stringarray length is longer than number argument
      - iterate over array backwards
        - if string length is greater than number argument
        -

Code
*/

function minimumShorten(string, maxLength) {
  let noSpaces = string.replaceAll(" ", "");

  let stringArray = string.split(" ");

  if (noSpaces.length < maxLength) {
    return string;
  }
}

console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("This is a test sentence", 18));
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld