/*

Given an array of strings
write a function that groups anagrams together
return an array of arrays, where each subarray contains words that
are anagrams of each other.

Problem:
  Create function which takes array of strings
    Group anagrams together, return array of arrays
      where each subarray contains words that are anagrams
        of each other
  Input: Array of strings
  Output: Nested Array of strings grouped by anagrams
  Rules
    Explicit:
      empty arrays are anagrams
      single letters are anagrams with themselves

Data Structures
Array containing strings
Nested array grouped by anagrams

algorithm
create function isAnagram which takes 2 string arguments
  if strings dont have equal length
    return false
  create variable string 1 array, which is an array of characters from string1
  else
    while str1Array has length
      iterate over elements of str2
        if str1 includes current element in str2
          remove element from string 1 array
        else
          return false
    return true;

create function groupAnagrams which defines an arrayOfStrings parameter
  define variable resultArr set to empty array
  define variable workingArr set to first element in array
  iterate over elements of input array
    if element and next element are anagrams & workingArr doesnt include element
      add to workingArr
    if resultArr does not include workingArr


*/

function groupAnagrams(arrayOfStrings) {
  let resultArr = [];
  let workingArr = [];
  for (let index = 0; index < arrayOfStrings.length; index++) {
    workingArr.push(arrayOfStrings.filter(element => isAnagram(element, arrayOfStrings[index])))
    if (workingArr.length &&
      !resultArr.flat(Infinity).includes(arrayOfStrings[index])) {
      resultArr.push(workingArr);
    }
    workingArr = [];
  }
  return resultArr.flat();
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str1Array = str1.split("");
  while (str1Array.length) {
    for (let idx = 0; idx < str2.length; idx++) {
      if (str1Array.includes(str2[idx])) {
        str1Array.splice(str1Array.indexOf(str2[idx]), 1);
      } else {
        return false;
      }
    }
  }
  return true;
}


console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

console.log(groupAnagrams(['']));
// [['']]

console.log(groupAnagrams(['a']));
// // [['a']]

console.log(groupAnagrams(['listen', 'silent', 'enlist']));
// // [['listen', 'silent', 'enlist']]