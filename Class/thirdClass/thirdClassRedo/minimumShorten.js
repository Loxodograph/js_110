/* Implement the function/method, minimum shorten.
The function shortens a sentence such that it will fit within the
character limit set.
It shortens by removing vowels in the sequence of a, e, i, o, and u.
Start removing from the end of the sentence. If it can not be
shortened to fit within character limit, return an empty string.
Spaces don’t count for the limit.

Problem:
  Create a function which shortens a sentence to fit in character limit
  Function will take string and character limit number argument

  First remove vowels in sequence of a,e,i,o,u
  remove from end of sentence first
  if string can not be shortened to character limit, return empty string
  spaces do not count

  Input: String, character limit number
  Output: Shortened string

  Rules
    Vowels are removed in order
    end of sentence is modified first
    return empty string if string is longer than character limit
    spaces do not count towards string total

Data structures
Strings. Perhaps arrays

Algorithm

create function minimumShorten which takes string and characterLimit num arg
normalize string to string without spaces
determine length of string without spaces
create variable vowels containing array of all vowels
if str length is less than or equal to character limit
  return string
iterate over elements of vowels
  if str contains vowel
    remove last index of vowel
    shorten length of string

*/
function minimumShorten(str, characterLimit) {
  let normalizedString = str.replaceAll(" ", "");
  let strLength = normalizedString.length;
  let vowels = "aeiou".split("");
  if (strLength <= characterLimit) return str;

  for (let idx = 0; idx < vowels.length; idx++) {
    while (str.includes(vowels[idx])) {

      if (str.lastIndexOf(vowels[idx])) {
        str = str.slice(0, str.lastIndexOf(vowels[idx])) + str.slice((str.lastIndexOf(vowels[idx]) + 1));
        strLength -= 1;
      }
      if (strLength <= characterLimit) return str;
    }
  }
  return "";
}


// Test cases
console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
console.log(minimumShorten("Short", 10)); // Short
console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""