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
      - remove in order a, e, i, o, u

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
    - if noSpaces length is shorter than number argument
      - return string
    - create variable shortened equal to sentence
    - for each vowel,
      - while no space length is greater than max length,
        and shortened contains vowel
        - let index = last index of vowel
        - shortened = substring up to index, and after index, excluding index
        - decrease nospacelength by one
    - if no space is less than or equal to max length return shortened,
      else return empty string

Code
*/

function minimumShorten(sentence, maxLength) {
  let noSpaceCount = sentence.replaceAll(" ", "").length;
  if (noSpaceCount <= maxLength) return sentence;

  let shortened = sentence;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let vowel of vowels) {
    while (noSpaceCount > maxLength && shortened.includes(vowel)) {
      let index = shortened.lastIndexOf(vowel);
      shortened = shortened.slice(0, index) + shortened.slice(index + 1);
      noSpaceCount--;
    }
  }
  return noSpaceCount <= maxLength ? shortened : '';
}

// function minimumShorten(sentence, maxLength) {
//   let noSpaceLength = sentence.replaceAll(" ", "").length;
//   if (noSpaceLength <= maxLength) return sentence;

//   const VOWELS = ['a', 'e', 'i', 'o', 'u'];

//   let shortened = sentence;

//   for (let vowel of VOWELS) {
//     while (noSpaceLength > maxLength && shortened.includes(vowel)) {
//       let index = shortened.lastIndexOf(vowel);
//       shortened = shortened.slice(0, index) + shortened.slice(index + 1);
//       noSpaceLength--;
//     }
//   }
//   return shortened;
// }

console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""