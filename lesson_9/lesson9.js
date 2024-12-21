// let numbers = [1, 3, 9, 11, 1, 4, 1];
// let ones = [];

// for (let counter = 0; counter < numbers.length; counter++) {
//   let currentNum = numbers[counter];

//   if (currentNum === 1) ones.push(currentNum); // appends currentNum to the ones array
// }

// ones; // => [1, 1, 1]

// ------------------------------------------

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// function selectFruit(object) {
//   let objectKeys = Object.keys(object);
//   let fruitObject = {}
//   for (let i = 0; i < objectKeys.length; i++) {
//     if (object[objectKeys[i]] === "Fruit") {
//       fruitObject[objectKeys[i]] = "Fruit";
//     }
//   }
//   return fruitObject
// }

// --------------------------------------------
// function doubleNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     let currentNum = numbers[counter];
//     numbers[counter] *= 2;

//     counter += 1;
//   }
//   return numbers
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]


// ----------------------------------------
// function doubleOddNumbers(numbers) {
//   let doubledNums = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];

//     if (counter % 2 === 1) {
//       doubledNums.push(currentNumber * 2);
//     } else {
//       doubledNums.push(currentNumber);
//     }
//   }

//   return doubledNums;
// }

// --------------------------------------------------

// function selectType(produceList, selectionCriterion) {
//   let produceKeys = Object.keys(produceList);
//   let selectedItems = {};

//   for (let counter = 0; counter < produceKeys.length; counter++) {
//     let currentKey = produceKeys[counter];
//     let currentValue = produceList[currentKey];

//     // used to be (currentValue === 'Fruit')
//     if (currentValue === selectionCriterion) {
//       selectedItems[currentKey] = currentValue;
//     }
//   }

//   return selectedItems;
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// console.log(selectType(produce, 'Fruit'));     // => {apple: 'Fruit', pear: 'Fruit'}
// console.log(selectType(produce, 'Vegetable')); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
// console.log(selectType(produce, 'Meat'));      // => {}

  function multiply(array, multiplier) {
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
      finalArray.push(array[i] * multiplier);
    }
    return finalArray;
  }

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]