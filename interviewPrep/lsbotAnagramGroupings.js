/*
Given an array of strings
write a function that groups anagrams together
return an array of arrays, where each subarray contains words that
are anagrams of each other.

eat tea tan ate nat bat

create function isAnagram which takes two string arguments
  split str1 into array
  while str1Array has length
    iterate over elements of string 2
      if string2 element is included in string 1 array
        splice element from string1Array
      else
        return false
  return true;

create function groupAnagrams which takes an array of strings as argument
create variable workingArray equal to empty array
iterate over elements of array argument
  iterate over remaining elements of array argument
    if element1 and element2 are anagrams
      push to workingArray
  push to finalArray

return finalArray
*/

function groupAnagrams(arrayOfStrings) {
  let workingArray = [];
  let finalArray = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    for (let j = i + i; j < arrayOfStrings.length; j++) {
      if (isAnagram(arrayOfStrings[i], arrayOfStrings[j])) {
        if (!workingArray.includes(arrayOfStrings[j])) {
          workingArray.push(arrayOfStrings[j]);
        }
      }
    }
    finalArray.push(workingArray);
    workingArray = [];
  }
  return finalArray;
}

function isAnagram(str1, str2) {
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

// console.log(groupAnagrams(['listen', 'silent', 'enlist']));
// // [['listen', 'silent', 'enlist']]