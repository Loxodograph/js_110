/*

Problem
  - Create a function that returns the frequency 
    distribution of an array.

  - Input: Array
  - Output: Object - keys are unique elements, values are
            frequency in which elements occur

  - Rules
    - Explicit:
      - If given an empty array, return an empty object
      - The object should be in the same order as 
        in the input array.

    - Implicit:
      

  - Questions:
    

Examples and Test Cases

getFrequencies(["A", "B", "A", "A", "A"]) // { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) // { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) // { true: 2, false: 3 }

getFrequencies([]) // {}


Data Structures

arrays and objects

Algorithm
  - create function getFrequencies which takes array as argument
    - create object initialized to empty object
    - iterate over elements of inputArray
      -if empty object contains element
        - increment value of object at element
      - else
        - create value 1 of object at element
    - return object

Code
*/

function getFrequencies(array) {
  let frequencyObject = {};

  for (let i = 0; i < array.length; i++) {
    if (frequencyObject[array[i]]) {
      frequencyObject[array[i]]++;
    } else {
      frequencyObject[array[i]] = 1;
    }
  }

  return frequencyObject;
}

console.log(getFrequencies(["A", "B", "A", "A", "A"])) // { A: 4, B: 1 }

console.log(getFrequencies([1, 2, 3, 3, 2])) // { "1": 1, "2": 2, "3": 2 }

console.log(getFrequencies([true, false, true, false, false])) // { true: 2, false: 3 }

console.log(getFrequencies([])) // {}