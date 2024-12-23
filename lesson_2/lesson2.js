// order in descending numeric value

// let arr = ['10', '11', '9', '7', '8'];

// arr.sort((a, b)=> Number(b) - Number(a));
// console.log(arr)


//order objects based on year of publication earliest to latest

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// books.sort((a, b) => {
//   return Number(a["published"]) - Number(b["published"]);
// });

// console.log(books)


// For each of these collection objects, demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]; 
// // arr1[2][1][3];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// //arr2[1]["third"][0];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// // arr3[2]["third"][0][0]

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// //obj1.b[1]

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// // Object.keys(obj2.third)[0]


// change 3 to 4

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4


// Compute and display the total age of the male members of the family.

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let totalMaleAge = 0;

// Object.values(munsters).forEach(value => {
//   if (value["gender"] === "male") {
//     totalMaleAge += value["age"];
//   }
// });
// console.log(totalMaleAge);


// print the name, age, and gender of each family member:

// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// Object.keys(munsters).forEach(key => {
//   console.log(`${key} is a ${munsters[key].age}-year-old ${munsters[key].gender}`)
// })


// what will the final values of a and b be? 

// let a = 2;
// let b = [5, 8];
// let arr = [a, b];

// arr[0] += 2;
// arr[1][0] -= a;

// a = 2;
// b = 3. 8


// use forEach to output all vowels from strings in the arrays.

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };
// let vowels = ["a", "e", "i", "o", "u"];
// Object.values(obj).forEach(array => {
//   array.forEach(string => {
//     string.split("").forEach(letter => {
//       if (vowels.includes(letter)) {
//         console.log(letter);
//       }
//     })
//   })
// });

// return a new array with the same structure, but with the values in each subarray ordered 

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let newArr = arr.map(array => {
//   return array.slice().sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
//     return 0;
//   })
// });

// console.log(newArr);
// console.log(arr)

// use map to return a new array with each number incremented by 1

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(arr.map(subObject => {
//   let incrementedObj = {};
//   for (let key in subObject) {
//     incrementedObj[key] = subObject[key] + 1
//   }
//     return incrementedObj
// }));

// console.log(arr)

// create deep copy of following Array 

// const arr = [
//   ['b', 'c', 'a'],
//   ['blue', 'black', 'green'],
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];
// let newArr = JSON.parse(JSON.stringify(arr));

// console.log(newArr)


//create deep copy

// const truthiness = {
//   falsy: [ null, undefined, '', false, NaN, 0 ],
//   truthy: ['everything else...']
// };

// // const deepCopy = JSON.parse(JSON.stringify(truthiness));
// // doesn't work because JSON doesnt recognize undefined or NaN

// const deepCopy = {};

// for (let prop in truthiness) {
//   deepCopy[prop] = [...truthiness[prop]];
// }

// console.log(deepCopy);


// use methods including filter to return new array containing 
// multiples of 3

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let newArr = arr.map(subArray => {
//   return subArray.filter(number => number % 3 === 0)
// });

// console.log(newArr)
