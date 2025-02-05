//Consider the following code:

// javascript

let arr = [1, 2, 3, 4, 5];
let transformedArr = arr.map(num => {
  if (num % 2 === 0) {
    return num * 2;
  }
});

console.log(transformedArr);

// What will be the output of this code? Explain in detail what's happening and what concepts are being demonstrated.

// 2. Examine this code snippet:

// javascript

// let obj = { a: 1, b: 2, c: 3 };
// let arr = Object.entries(obj);

// arr.forEach(([key, value]) => {
//   console.log(key);
//   console.log(value * 2);
// });

//What will this code output? Describe the process step-by-step and identify the key concepts illustrated here.
// 3. Analyze the following code:

// javascript

// let str = 'hello';
// let result = [...str].reduce((acc, char) => {
//   return acc + char.repeat(2);
// }, '');

// console.log(result);

//What will be logged to the console? Explain the transformation process and the JavaScript features being used.
// 4. Consider this code:

// javascript

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(num => num > 2)
//                 .map(num => num * 2)
//                 .reduce((sum, num) => sum + num, 0);

// console.log(result);

//What will be the final output? Walk through each step of the chain and explain what's happening at each stage. What JavaScript concepts are being demonstrated?
// 5. Examine the following code:

// javascript

// let obj1 = { a: 'hi', b: 'hello' };
// let obj2 = { b: 'bye', c: 'goodbye' };

// let combined = { ...obj1, ...obj2, d: 'adios' };

// console.log(combined);

//What will be the contents of combined? Explain the process of how this object is created and what JavaScript feature is being utilized here.



/*
1.  Consider the following code:<!---->

// javascript

function transformArray(arr) {
  return arr.map((num, idx) => {
    if (idx % 2 === 0) return num * 2;
    else return num + 1;
  });
}

console.log(transformArray([1, 2, 3, 4, 5])); // [2, 3, 6, 5, 10]

a) Explain what this function does and how it achieves its result.
b) Refactor this function to use a for loop instead of map. How does this change affect the function's behavior and return value?2.  Examine the following code:<!---->

// javascript

function findUnique(str) {
  let chars = str.toLowerCase().split('');
  return chars.filter((char, index) => 
    chars.indexOf(char) === chars.lastIndexOf(char)
  ).join('');
}

console.log(findUnique("aAbBcC")); // ""
console.log(findUnique("abcdef")); // "abcdef"

a) What does this function do? Explain its logic step-by-step.
b) What is the time complexity of this function? Can you suggest a way to optimize it?
c) Modify the function to return an array of unique characters instead of a string. How would this change the function's implementation?3.  Consider this function:<!---->

// javascript

function groupAnagrams(words) {
  let result = {};
  words.forEach(word => {
    let sorted = word.split('').sort().join('');
    if (result[sorted]) {
      result[sorted].push(word);
    } else {
      result[sorted] = [word];
    }
  });
  return Object.values(result);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["eat","tea","ate"],["tan","nat"],["bat"]]

a) Explain how this function groups anagrams together.
b) What would be the result if the input array contained duplicate words? How might you modify the function to handle this case?
c) Refactor the function to use reduce instead of forEach. How does this change the readability of the code?4.
12:32
Analyze the following code:<!---->

// javascript

function findLongestPalindrome(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = str.slice(i, j);
      if (isPalindrome(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }
  return longest;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(findLongestPalindrome("babad")); // "bab"
console.log(findLongestPalindrome("cbbd")); // "bb"

a) Describe what this function does and how it achieves its result.
b) What is the time complexity of this function? Explain your reasoning.
c) How would you modify this function to return all longest palindromes if there are multiple of the same length?5.  Examine the following code:<!---->

// javascript

function flattenAndSort(array) {
  return array
    .reduce((flat, current) => flat.concat(current), [])
    .sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

a) Explain what this function does and how it achieves its result.
b) What assumptions does this function make about its input? How might you modify it to handle nested arrays of arbitrary depth?
c) Refactor this function to maintain the original order of elements within each subarray while still flattening and sorting the overall array. How would this change the implementation?
*/