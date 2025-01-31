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

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));

/*
We call the forEach method which iterates over the elements of
an array, performs the code specified in the callback function,
and then returns undefined. In this code we iterate over the elements
of the array and log to the console each element.
*/
// //------------------------------------------------
// const isEven = numbers.every(num => num % 2 === 0);
// console.log(isEven);
// //------------------------------------------------
// const hasOdd = numbers.some(num => num % 2 !== 0);
// console.log(hasOdd);
// //------------------------------------------------
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.splice(1, 1, 'blueberry');
// console.log(fruits);
// //-----------------------------------------------
// const slicedFruits = fruits.slice(-2, 2);
// console.log(slicedFruits);
// //-----------------------------------------------
// const fruits = ['apple', 'blueberry', 'cherry'];
// const hasCherry = fruits.includes('cherry');
// console.log(hasCherry);
// //-----------------------------------------------
// const index = fruits.findIndex(fruit => fruit === 'blueberry');
// // higher order function
// console.log(index);
// //---------------------------------------------
// const indexOfApple = fruits.indexOf('apple');
// console.log(indexOfApple);
// //---------------------------------------------
// const str = 'Hello, world!';
// const hasWorld = str.includes('world');
// console.log(hasWorld);
// //---------------------------------------------
// const position = str.indexOf('world');
// console.log(position);