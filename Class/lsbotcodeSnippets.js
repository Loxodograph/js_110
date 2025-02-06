//Consider the following code:

// javascript

// let arr = [1, 2, 3, 4, 5];
// let transformedArr = arr.map(num => {
//   if (num % 2 === 0) {
//     return num * 2;
//   }
// });

// console.log(transformedArr);

// What will be the output of this code?
// Explain in detail what's happening and what concepts are being demonstrated.

/*
 This code will return `[ undefined, 4, undefined, 8, undefined ]`.
 This code demonstrates higher order functions, callback Functions, the map
 method, and the importance of return values.
 This code iterates over each num of the arr array using the map method.
 For each element, it executes a callback Function. Because this method
 takes a function as an argument, it is considered a higher order function.
 The callback determines if the current num is evenly divisible by 2.
 If so, it returns the num multiplied by 2. If the number is not
 evenly divisible by 2, there is no explicit return statement defined.
 This means that it returns `undefined` for these elements. This is why
 the first, third, and fifth elements of the resulting array are undefined

 The return value of the callback of the map method is the value that gets
 added to the new array created by the map method

*/

// 2. Examine this code snippet:

// javascript

// let obj = { a: 1, b: 2, c: 3 };
// let arr = Object.entries(obj);

// arr.forEach(([key, value]) => {
//   console.log(key);
//   console.log(value * 2);
// });

//What will this code output? Describe the process step-by-step
// and identify the key concepts illustrated here.

/*
  This code will return
a
2
b
4
c
6
  In this code, we define an object variable containing 3 keys and values.
  We then define an array using Object.entries method. This method returns
  a nested array, containing subarrays where the first element is the key
  and the second element is the value. We then declare a forEach statement
  which iterates over the elements of the arr variable. We use array
  destructuring syntax to define the key and value parameters of the callback
  of the forEach statement. We then log to the console, the key and then the
  value, multiplied by two. The return value of this callback is undefined
  because forEach method always returns undefined

  The concepts demonstrated here are the forEach method, array destructuring
  syntax, callback Functions, the Object.entries method

*/
// 3. Analyze the following code:

// javascript

// let str = 'hello';
// let result = [...str].reduce((acc, char) => {
//   return acc + char.repeat(2);
// }, '');

// console.log(result);

//What will be logged to the console? Explain the transformation
// process and the JavaScript features being used.
/*
"hheelllloo" will be logged to the console. In this code we define a
variable str, initialized to "hello". We then define the variable result
We use spread syntax to spread the elements of the str variable to an array.
We then call the reduce method on the resulting array. This defines the params
acc, and char. The acc is the accumulator variable in the reduce method. This
is initialized to an empty string. We then have the char parameter which is
the current value. This represents the current value in our iteration through
the array. For each iteration of the reduce method, we append to the accumulator
the char repeated twice. We use the String.prototype.repeat() to accomplish this
*/

// 4. Consider this code:

// javascript

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(num => num > 2)
//                 .map(num => num * 2)
//                 .reduce((sum, num) => sum + num, 0);

// console.log(result);

//What will be the final output? Walk through each step of the chain and
// explain what's happening at each stage.
// What JavaScript concepts are being demonstrated?
/*
This is an example of method chaining. In this code we define a variable
arr which contains the numbers from 1 to 5. We then define the result variable
This variable is initialized to the arr variable after chained method selection
and transformation.
The first method called is filter. This method performs selection.
In this case, we select only elements that are greater than two.
This results in the array [3, 4, 5]. We then map the elements
of this array, returning a new array with each element multiplied by two.
This results in [6, 8, 10]
We then call the reduce method, which defines a sum and num parameter.
We initialize sum to zero, and execute the callback which adds the value
of num (the current value - the value currently
being iterated over by the reduce method).
This results in the total sum being 24. The value of the result variable
is 24, and this is logged to the console.
*/

// 5. Examine the following code:

// javascript

// let obj1 = { a: 'hi', b: 'hello' };
// let obj2 = { b: 'bye', c: 'goodbye' };

// let combined = { ...obj1, ...obj2, d: 'adios' };

// console.log(combined);

//What will be the contents of combined? Explain the process of
//how this object is created and what JavaScript feature is being utilized here.

/*
We use spread syntax in this example, which iterates over elements
and creates a shallow copy to an object.
In this case, we first spread obj1 to combined.
This results in the b property having the value "hello". We then spread obj2 to
combined. This overwrites the b property and results in it having
the value "bye". Then we add the d property which has the value "adios".
In the end, the combined array looks like
{ a: 'hi', b: 'bye', c: 'goodbye', d: 'adios' }

*/

/*
1.  Consider the following code:<!---->

// javascript
*/
// function transformArray(arr) {
//   return arr.map((num, idx) => {
//     if (idx % 2 === 0) return num * 2;
//     else return num + 1;
//   });
// }

// console.log(transformArray([1, 2, 3, 4, 5])); // [2, 3, 6, 5, 10]
/*
a) Explain what this function does and how it achieves its result.
b) Refactor this function to use a for loop instead of map.

How does this change affect the function's behavior and return value?

This function uses the  map method to create a new array. The method iterates
over the elements of an array, and multiplies by 2 all elements at even indexes.
It uses the second parameter to keep track of indexes.
If the element is at an odd index, it increments the element by 1.

The refactored code below, uses a imperative approach, telling the program what
to do at each step. The map method will always return the same number of
elements as the original array. The for loop allows us to use break statements
to exit the loop, or determine the amount of iterations we wish to loop for.
There is no pre defined way of returning an array using a for loop. We instead
have to declare a new array and push the elements to it. We then return this new
array in our function.

*/
// function transformArray(arr) {
//   let transformedArr = [];
//   for (let idx = 0; idx < arr.length; idx++) {
//     if (idx % 2 === 0) {
//       transformedArr.push(arr[idx] * 2);
//     } else {
//       transformedArr.push(arr[idx] + 1);
//     }
//   }
//   return transformedArr;
// }
/*


2.  Examine the following code:<!---->

// javascript
*/
// function findUnique(str) {
//   let chars = str.toLowerCase().split('');
//   return chars.filter((char, index) =>
//     chars.indexOf(char) === chars.lastIndexOf(char)
//   ).join('');
// }

// console.log(findUnique("aAbBcC")); // ""
// console.log(findUnique("abcdef")); // "abcdef"

/*
a) What does this function do? Explain its logic step-by-step.
This function finds all the characters in a string that appear only once.
It does this by first splitting the string into an array comprised of all
the characters in the string normalized to lowercase.
`str.toLowerCase().split('')`
It then calls the filter method on this array which executes a callback to
select only the unique elements in the chars array. It defines two parameters
char and index. Index is unused in this code and does not need to be defined.
The code then checks if the first index of the char is equal to the last index
of this char. This checks if the character only appears once in the array.
The code then joins these characters together in a string. It then returns
this string.

b) Modify the function to return an array of unique characters
   instead of a string.
   How would this change the function's implementation?

To modify this function to return an array all we have to do is remove the
`join('')` method at the end of the function. This changes the functions
implementation by returning an array instead of a string, it does not
fundamentally change the core logic of the function.

*/
/*


3.  Consider this function:<!---->

// javascript
*/

// function groupAnagrams(words) {
//   let result = {};
//   words.forEach(word => {
//     let sorted = word.split('').sort().join('');
//     if (result[sorted]) {
//       result[sorted].push(word);
//     } else {
//       result[sorted] = [word];
//     }
//   });
//   return Object.values(result);
// }

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'tan', 'ate', 'nat', 'bat']))
// [["eat","tea","ate"],["tan","nat"],["bat"]]

/*
a) Explain how this function groups anagrams together.
This code splits each word into an array, sorts it alphabetically,
and joins it back into a string. This normalizes the strings alphabetically.
This normalized version of the string is then checked against the object
`result`. If the normalized version of the string is present as a key in the
result object, the word is added as a value. Otherwise, the key is created and
then the word is added as a value. We then return the values of the result
object which returns a nested array containing the values of each key in the
result object.

b) What would be the result if the input array contained duplicate words?
   How might you modify the function to handle this case?
  Currently, the function would include duplicate values if the array
  includes duplicate words. We can refactor the function to handle this
  case as follows:

  function groupAnagrams(words) {
  let result = {};
  words.forEach(word => {
    let sorted = word.split('').sort().join('');
    if (result[sorted] && !result[sorted].includes(word)) {
      result[sorted].push(word);
    } else {
      result[sorted] = [word];
    }
  });
  return Object.values(result);
}

c) Refactor the function to use reduce instead of forEach.
   How does this change the readability of the code?

function groupAnagrams(words) {
  return Object.values(
    words.reduce((result, word) => {
      let sorted = word.split('').sort().join('');
      result[sorted] = result[sorted] || [];
      result[sorted].push(word);
      return result;
    }, {})
  );
}
Makes code harder to read.


4.
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

This code finds the longest palindrome in a given string. it does this by
defining the helper function isPalindrome which determines if a string is
strictly equal to that string in reverse.
The function findLongestPalindrome defines a variable longest equal to an
empty string.
It then iterates over the elements of the string, capturing each substring
contained within the string. It defines the substring using the slice method.
It determines if the substring returns true when passed as an argument
to isPalindrome, and if the current substring is longer than the variable
longest, then longest is assigned the value of substr.

After every substring in the str has been checked, the code returns longest.

b) How would you modify this function to return all longest palindromes
   if there are multiple of the same length?
*/
// function findLongestPalindrome(str) {
//   let longest = [];
//   let longestString = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       let substr = str.slice(i, j);
//       if (isPalindrome(substr) && substr.length > longestString.length) {
//         longest = [substr];
//         longestString = substr;
//       } else if (isPalindrome(substr) && substr.length === longestString.length) {
//         longest.push(substr);
//       }
//     }
//   }
//   return longest;
// }

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(findLongestPalindrome("babad")); // [ 'bab', 'aba' ]
// console.log(findLongestPalindrome("cbbd")); // [ 'bb' ]
/*

5.  Examine the following code:<!---->

// javascript

function flattenAndSort(array) {
  return array
    .reduce((flat, current) => flat.concat(current), [])
    .sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

a) Explain what this function does and how it achieves its result.
  This function flattens and sorts a nested array. It does this by first using
  the reduce method to flatten the array. The reduce method creates an empty
  array as an accumulator, named flat. it then concatenates to the flat parameter
  the current element being iterated over in the reduce method.
  Then the function sorts the array in numerical order using the sort method.
  The code used is a shorthand way of sorting an array in numerical order.
  This code determines whether
  one element is  greater than, less than, or equal to another. It then sorts
  them based on the code declared in the callback.

b) What assumptions does this function make about its input?

This function assumes that the nested array is only one level deep.

c) How might you modify it to handle nested arrays of arbitrary depth?
*/
// function flattenAndSort(array) {
//   return array
//     .flat(Infinity)
//     .sort((a, b) => a - b);
// }

// console.log(flattenAndSort([[3, 2, 1], [4, [6, 5]], [], [9, 7, 8]]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
/*

d) Refactor this function to maintain the original order of elements
   within each subarray while still flattening and sorting the overall array.
   How would this change the implementation?
*/
function flattenAndSort(array) {
  return array
    .sort((a, b) => a - b)
    .reduce((flat, current) => flat.concat(current), []);
}
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]