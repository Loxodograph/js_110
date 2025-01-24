/*
String.prototype Methods

```jsx
let text = "  The quick brown fox jumps over the lazy dog.  ";

// charAt and charCodeAt combined
for (let i = 0; i < text.trim().length; i++) {
  if (i % 5 === 0) {
    console.log(`Character at ${i}: ${text.charAt(i)} (${text.charCodeAt(i)})`);
  }
}
/* This code declares a variable 'text' which contains a sentence
   with whitespace on both ends. We then have a for loop which trims
   the whitespace from this sentence and determines it's length. It then
   begins the loop, iterating over the elements of the trimmed sentence
   If i % 5 is equal to zero it logs to the console. It determines
   charAt(i) - which prints the character in the trimmed string located at
   index i. Then it uses charAt(i) which determines the character code of
   the character at index i.
*/
/*
// concat with multiple calls
let part1 = "Hello";
let part2 = "JavaScript";
let part3 = "World";
let combined = part1.concat(", ", part2, " ", part3).toUpperCase();
console.log(combined); // "HELLO, JAVASCRIPT WORLD"

// This code declares three variables. It then uses concat to combine the
   variables, first with a ", " string and then with a " " string. It then calls
   the toUpperCase() method to turn the concatenated string into all
   uppercase characters. We then log console.log(combined) to the console
   to print the uppercase combined string to the console.
   This is an example of method chaining
*/
/*

// includes with case sensitivity
let keyword = "FOX";
if (text.trim().toUpperCase().includes(keyword)) {
  console.log(`The text contains the word "${keyword}"`);
}
  This code declares a keyword FOX. It then determines if the trimmed
  'text' string, when converted to UPPERCASE includes the keyword FOX
   If it does it logs to the console a string indicating that text
   contains the word declared in the keyword. In this code, text.trim() first
   trims the whitespace from the earlier declared text variable. Then
   .toUpperCase() turns the text variable into all uppercase letters. It then
   uses the .includes() method with the keyword variable as an argument
   to determine if the substring 'keyword' is included in the string 'text'
   This is an example of method chaining
*/

/*
// split with complex manipulation
let words = text.trim().split(/\s+/).filter(word => word.length > 3).map(word => word.toUpperCase());
console.log(words); // ["QUICK", "BROWN", "JUMPS", "OVER", "LAZY"]
  this code first trims the earlier declared text variable. It then splits it
  into an array at every " " character. It then uses the filter method to only
  select words that have a length of greater than 3. It then uses map to iterate
  over the selected elements and return a new array according to the
  transformation criteria. It then uses toUpperCase() to transform each element
  in the filtered array. We then log to the console the words array.
  This is an example of method chaining
*/

/*
// trim with chaining
let transformedText = text.trim().replace(/\./g, "!").toLowerCase();
console.log(transformedText); // "the quick brown fox jumps over the lazy dog!"
  This text first trims the earlier declared text varaible. It then replaces any
  "." characters with the "!" character. It then converts the whole sentence to
  lowercase using the toLowerCase() method. This is an example of method
  chaining
*/

/*
```

Array methods

```jsx
let numbers = [3, 7, 12, 5, 20, 30, 2, 10, 50];

// Complex filter and map
let filteredMapped = numbers
  .filter(num => num % 2 === 0 && num > 10)
  .map(num => num * 2);
console.log(filteredMapped); // [24, 40, 60, 100]

This coder filters the numbers array according to the selection criteria
if the number % 2 === 0 and the number is greater than 10. It then
performs the map method, iterating over each num element of the number
array and returns the result of num multiplied by two. This is an example
of method chaining. It then logs the resulting filterMapped variable to
the console.

// Reduce with slice and sort
let sortedSubArray = numbers.slice(2, 6).sort((a, b) => b - a);
console.log(sortedSubArray); // [30, 20, 12, 5]

This piece of code is an example of method chaining. The first method called
is the slice method. It begins at index 2 and ends at index 6. Index 6 is not
included in the resulting array slice. Then it calls the sort method and sorts
the array in descending order.

// Reverse with chaining
let reversedConcatenated = numbers.reverse().concat([100, 200]);
console.log(reversedConcatenated); // Reversed array with additional elements

this piece of code is another example of method chaining. The first method call
is the reverse method which reverses the numbers array. It then concatenates the
values 100 and 200 to the end of the reversed numbers array. Then the
final array is logged to the console.

// Splice with dynamic operations
let dynamicArr = [1, 2, 3, 4, 5, 6, 7];
dynamicArr.splice(2, 2, ...[9, 8, 7]);
console.log(dynamicArr); // [1, 2, 9, 8, 7, 5, 6, 7]

The main feature of this code is the splice method call on the second
line. This method takes 3 arguments. In this case it starts at index 2, removes
2 elements (3 and 4) and then inserts the elements 9, 8, 7 using spread syntax.
[1, 2, 9, 8, 7, 5, 6, 7] is the resulting array

// Sorting complex objects
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];
users.sort((a, b) => b.age - a.age);
console.log(users); // Sorted by age descending

 This code sorts the users object in descending order based on
 the values of the age property.
```

Object Methods

```jsx
let user = {
  id: 1,
  name: "Alice",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Freeze deeply nested object
let frozenUser = Object.freeze({
  ...user,
  preferences: Object.freeze({ ...user.preferences }),
});
frozenUser.preferences.theme = "light"; // Will not modify due to freeze
console.log(frozenUser.preferences.theme); // "dark"

This code provides an example of freezing nested objects. First,
the code freezes the shallowCopy of the main object, user. This does
not, however, freeze the nested objects contained within user. To combat this,
the code freezes the shallow copy of the user.preferences object as well. This
results in a completed frozen nested object JavaScript will not allow the object
to be modified.


// Object.entries with reduce
let objToSum = { a: 5, b: 10, c: 15 };
let sum = Object.entries(objToSum).reduce((acc, [key, value]) => acc + value, 0)
console.log(sum); // 30

this code first creates a nested array, using Object.entries. it then calls
the reduce method on this nested array. It assigns the first and second element
of each subArray to the variables key and value respectively. Then the code
returns the sum of all values in the Object.entries array.

// Object.keys for dynamic property access
Object.keys(user).forEach(key => console.log(`${key}: ${user[key]}`));

This code creates an array using Object.keys which provides all the
keys for the user object. It then iterates over the elements using forEach
for each key in the array, this code console logs the name of the key and the
value stored in the key which is accessed using bracket notation.

// Merge multiple objects
let defaultSettings = { theme: "light", notifications: true };
let userSettings = { theme: "dark" };
let mergedSettings = Object.assign({}, defaultSettings, userSettings);
console.log(mergedSettings); // { theme: "dark", notifications: true }

This code uses assign to merge multiple objects. Assign takes many arguments.
The first argument is the object which will be assigned. In this case, it is
an empty object. The next arguments are the objects which will be appended
to the assigned object.

```

Arrays and Variations

```jsx
// Sparse array iteration
let sparseArr = [1, , , 4, 5];
console.log("Sparse length:", sparseArr.length); // 5
sparseArr.forEach((val, index) => console.log(`Index ${index}: ${val}`));
// Only logs defined indices

When we use forEach with a sparse array, it only iterates over the defined
indices of the array. This means that index 1, 2 will not be iterated over, even
though the array has a length property of 5. These empty, sparse elements, do
not really exist in the array.

// Empty array manipulation
let emptyArr = [];
emptyArr[3] = "new value";
console.log(emptyArr); // [ <3 empty items>, "new value" ]

When we assign a value to an index that is out of range of the original
array, JavaScript creates empty elements in the array. In this case
we assigned new value to the 3rd index of an empty array. Javascript inserted
3 empty elements at index 0, 1, and 2. This is an example of a sparse array.
These elements do not really exist in the array, will return
undefined if accessed, and can not be iterated over using forEach
or map methods.

// Arrays as objects
let customArray = [1, 2, 3];
customArray["customProp"] = "hello";
for (let key in customArray) {
  console.log(`Key: ${key}, Value: ${customArray[key]}`);
}
Arrays are objects. Because of this, we can assign custom properties
to the arrays. These custom properties will not appear in the array
length property.

```

Iteration, Break, and Continue

```jsx
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers
  if (i > 7) break; // Stop at 7
  console.log(i); // Logs only 1, 3, 5, 7
}

we can use break an continue when looping. Break will end the loop
completely. In this case, when i is greater than 7 the loop will break
and stop running. Continue, on the other hand, tells the code to skip
the rest of the code contained in the loop and begin again at the new iteration.

let objToIterate = { x: 10, y: 20, z: 30 };
for (let key in objToIterate) {
  console.log(`${key}: ${objToIterate[key]}`);
}
We can use a for in loop to iterate over the keys of an object.

```

Filtering and Transformation

```jsx
let products = [
  { name: "Phone", price: 699 },
  { name: "Tablet", price: 499 },
  { name: "Laptop", price: 999 },
];

// Filter and map chaining
let affordableProducts = products
  .filter(product => product.price < 800)
  .map(product => product.name);
console.log(affordableProducts); // ["Phone", "Tablet"]

this code is an example of method chaining with the filter and map methods.
first the code iterates over the products array using filter. If the elements
price property is less than 800, it is selected by the filter method.
It then calls the map method, which returns a new
array based on the transformation criteria.
In this case, the new array is one that contains all the name properties
of the products selected by filter.
We then log the result to the console.
```

Nested Data Structures and Iteration

```jsx
let complexData = {
  users: [
    { id: 1, name: "Alice", scores: [80, 85, 90] },
    { id: 2, name: "Bob", scores: [70, 75, 80] },
  ],
};

complexData.users.forEach(user => {
  console.log(`${user.name}'s Scores:`);
  user.scores.forEach(score => console.log(`- ${score}`));
});

This code provides an example of accessing information in nested
data structures. In this case we have the object complexData.
This object contains the user property, which itself contains an array
of objects. For the scores property of each user object, we have another array.
By nesting forEach methods we are able to iterate first over the elements of
the complexData.users array. And then we can iterate over the elements of the
users.scores array and log each score to the console.

```

Shallow and Deep Copy

```jsx
let original = { a: 1, b: { c: 2 } };

// Shallow copy
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c); // 3

// Deep copy with structuredClone (or JSON methods)
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 4;
console.log(original.b.c); // 3

This code demonstrates the difference between shallow copy and deep copy
with the first portion, we create a shallow copy of the original object
using the spread syntax. Because it is a shallow copy, nested objects present in
the original objects are not copied. Instead the nested object
in both the shallow copy and the original object both reference
the same place in memory.
Therefore, when we modify the shallowCopy.b.c property, we also modify the
original.b.c property.

Deep copy, on the other hand, makes a complete copy of the original object, with
nested objects being copied and not referenced. Therefore when we modify
the deepCopy.b.c property, it does not result in a modified original object.
```

First-Class and Higher-Order Functions

```jsx
// Higher-order function with multiple callbacks
function processNumbers(numbers, operation) {
  return operation(numbers);
}

let addAll = nums => nums.reduce((acc, num) => acc + num, 0);
let squareAll = nums => nums.map(num => num ** 2);

console.log(processNumbers([1, 2, 3], addAll)); // 6
console.log(processNumbers([1, 2, 3], squareAll)); // [1, 4, 9]

This code defines a function processNumbers which has the parameters
numbers and operation. It expects operation to be a function, because
the return value of the processNumbers function calls the operation function
with numbers as an argument.

The code then defines two more functions using function expressions. First
is addAll which takes a nums array argument and reduces it, adding up all the
elements of the nums array.
The second is square all which takes a nums array argument and returns a new
array using the map method with each element in the nums array squared.

It then calls processNumbers with the argument [1, 2, 3] and the operation
addAll, which results in the addAll function being called with [1, 2, 3] as the
argument, resulting in 6.

It then calls processNumbers with the argument [1, 2, 3] and the operation
squareAll, which results in the squareAll function being called with [1, 2, 3]
as the argument, resulting in the array [1, 4, 9]
```

Method Chaining

```jsx
let sentence = "   The quick brown fox   ";
let transformed = sentence
  .trim()
  .replace("quick", "slow")
  .toUpperCase()
  .split(" ")
  .filter(word => word !== "FOX")
  .join("-");
console.log(transformed); // "THE-SLOW-BROWN"

```

This example of method chaining takes the sentence variable,
trims the whitespace from both ends
replaces the word quick with the word slow
turns the whole sentence to uppercase
splits it into an array at every " " character
uses the filter method to select all words that are not "FOX"
and then joins the array back into a string using "-"
The resulting string is "THE-SLOW-BROWN"
*/