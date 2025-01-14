/*

Problem
  - Implement the function/method, minimum shorten. The function shortens a
    sentence such that it will fit within the character limit set.

    It shortens by removing vowels in the sequence of a, e, i, o, and u.
    Start removing from the end of the sentence.
    If it can not be shortened to fit within character limit,
    return an empty string. Spaces don’t count for the limit. -- Nick


  - Input: String, number represeneting max length
  - Output: new string, shortened to max length through elimination of vowels

  - Rules
    - Explicit:
      - Vowels are A E I O and U
      - vowels are removed in the above order
      - Start by removing from the end of the sentence
      - empty string is returned if it can not be shortened
      - spaces don't count towards character limit

    - Implicit:
      - if string is already shorter than limit, return original string


  - Questions


Examples and Test Cases
console.log(minimumShorten("This is a test sentence", 18));
// This is  test sentence

console.log(minimumShorten("Hello World", 8)); // Hllo Wrld

console.log(minimumShorten("Short", 10)); // Short

console.log(minimumShorten("A very long sentence with many vowels", 10));
// ""


Data Structures
arrays

Algorithm
  - create function minimumShorten, which takes a string sentence an a
    maxlength number as argument
    - create noSpaceCount which is equal to the length of the string
      with spaces removed
    - if noSpaceCount is less than maxLength, return sentence
    - define shortened variable initialized to the sentence
    - define vowels variable, an array with a e i o u as elements
    - for each vowel in vowels
      -if shortened includes vowel
        - define vowelIndex which is last index of vowel in shortened
        - shortened is equal to substring up to vowelIndex concatenated with
          substring after vowel index. vowel index not included
        - noSpaceCount is decremented by 1
    - return noSpaceCount if shortened length is less than max length,
      otherwise return empty string

Code
*/

function minimumShorten(sentence, maxLength) {
  let noSpaceCount = sentence.split(" ").join("").length;
  let vowels = ["a", "e", "i", "o", "u"];
  let shortened = sentence;

  if (noSpaceCount <= maxLength) return sentence;

  for (let vowel of vowels) {
    while (noSpaceCount > maxLength && shortened.includes(vowel)) {
      let vowelIndex = shortened.lastIndexOf(vowel);
      shortened = shortened.slice(0, vowelIndex) +
          shortened.slice(vowelIndex + 1);
      noSpaceCount--;
    }
  }
  return noSpaceCount <= maxLength ? shortened : "";
}

console.log(minimumShorten("This is a test sentence", 18));
// This is  test sentence

console.log(minimumShorten("Hello World", 8)); // Hllo Wrld

console.log(minimumShorten("Short", 10)); // Short

console.log(minimumShorten("A very long sentence with many vowels", 10));
// ""