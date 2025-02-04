// Explain what will return from on line 13 and why?

// Does the function below have any side effects? If so, refactor the
// function so it doesn't have any side effects.

// let students = ["Chris", "Pete", "Nick", "Jordan"];

// function passedStudents(list) {
//   let passed = list.splice(2, 2);
//   return passed;
// }

// passedStudents(students);
// console.log(students); // => ?

/*
This code logs ['Chris', 'Pete']
Yes, this function has side effects
When we call passedStudents(students) we are passing a reference to the students
array to the list parameter of the function passedStudents.
This array gets modified when we call the splice() method on the list parameter.
Because splice is destructive, it permanently modifies the array that it is
called on. Because a reference was passed to the students array,
this modification also affects the students array. If we wanted to refactor
the function so it does not have any side effects we could write it as

let students = ["Chris", "Pete", "Nick", "Jordan"];

function passedStudents(list) {
  let passed = list.slice().splice(2, 2);
  return passed;
}

passedStudents(students);
console.log(students); // => ?

*/
// Explain the following methods and logs on each section:

// const numbers = [1, 2, 3, 4];
// numbers.forEach(num => console.log(num));

/*
We call the forEach method which iterates over the elements of
an array, performs the code specified in the callback function,
and then returns undefined. In this code we iterate over the elements
of the array and log to the console each element.


*/
// //------------------------------------------------
// const isEven = numbers.every(num => num % 2 === 0);
// console.log(isEven);

/*
This code logs `false` to the console. This is because
the every method runs a callback and checks if the return
value of that callback is truthy. If the return value is
truthy for every iteration of the callback, the every
method returns `true.` Otherwise it returns false.
In this example, because we have some odd numbers, we see
the every method return false. This is then logged to the console.
*/

// //------------------------------------------------
// const hasOdd = numbers.some(num => num % 2 !== 0);
// console.log(hasOdd);

/*
This code is similar to every, except the some method returns
true if at least one of the return values of the callback
is truthy. In this case, the some method returns true
because there is at least one odd number in the numbers
array.
*/

// //------------------------------------------------
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.splice(1, 1, 'blueberry');
// console.log(fruits);

/*
This code calls the destructive method `splice` on the
fruits array. Splice is a method that takes many arguments. In this
case we supply it with three arguments. The first argument specifies
the index at which to start the splice method. The next argument specifies
how many items will be deleted by the splice method. The last argument
specifies which element will be added to the array, beginning at the
start index.

In the above example, we remove one element at index 1 (banana), and replace
it with the item 'blueberry'
*/
// //-----------------------------------------------
// const slicedFruits = fruits.slice(-2, 2);
// console.log(slicedFruits);
/*
The slice method is a non-destructive method which creates
a shallow copy of an array, or shallow copy of specified elements of
an array. In this case, we splice starting at -2. When using negative
numbers javascript interprets this as the length of the
array plus the negative number. In this case it winds up being
3 - 2, or index 1. The second argument in slice tells us which index
to end the slice. This is not inclusive, however, and the element at this
index will not be included in our final slice.
*/

// //-----------------------------------------------

// const fruits = ['apple', 'blueberry', 'cherry'];
// const hasCherry = fruits.includes('cherry');
// console.log(hasCherry);
/*
includes uses strict equality to check whether an element is included among
the array elements. This method returns a boolean. In the above example
the code returns true.
*/
// //-----------------------------------------------
// const index = fruits.findIndex(fruit => fruit === 'blueberry');
// // higher order function
// console.log(index);
/*
The findIndex method executes a callback function and returns the index
of the first element for which the callback returns true. if no element
is found, the function returns -1. This is an example of a higher order function
because it takes a function as an argument.
*/
// //---------------------------------------------
// const indexOfApple = fruits.indexOf('apple');
// console.log(indexOfApple);
/*
indexOf is similar to the above findIndex method except instead of
taking a callback argument, indexOf uses the strict equality operator
to determine if an element is included in the array. If the element
is included, the method returns the index of the first element that
satisfies the condition. Otherwise, it returns -1.
*/
// //---------------------------------------------
const str = 'Hello, world!';
const hasWorld = str.includes('world');
console.log(hasWorld);
/*
This code uses the strict equality operator to determine if a string
includes the substring provided as an argument to the method. If it
is included, the method returns true. otherwise it returns false.
*/

// //---------------------------------------------
// const position = str.indexOf('world');
// console.log(position);

/*
this code determines if a substring is included within the string,
if so it returns the index of that substring. If not it returns -1.
An optional second argument can also be applied, which will tell the method
which index to begin searching for the substring.
*/