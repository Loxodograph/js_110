/*

Problem
  - Given an object with students and the grades that they 
    made on the tests that they took, determine which student 
    has the best Test Average

  - Input: object containing students as keys, array as test scores
  - Output: name of student with best average

  - Rules
    - Explicit:
      - All students in an object will have the same amount 
        of test scores.

    - Implicit:
      

  - Questions
    

Examples and Test Cases
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}) // "John"

// John's avg = 90
// Bob's avg = 83.33

getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}) // "Mike"

Data Structures
Objects and arrays


Algorithm
  create function getAverage which accepts array as argument
    - reduce array sum and divide by array length
  create function getBestStudent which accepts an object argument
    - define variable - bestAverage
    - define variable - bestStudent
    - for each student in the object 
      - set average to getAverage
      - if average is greater than bestAverage, best student is
        equal to student
    return best student


Code

*/

function getAverage(array) {
  return array.reduce((sum, element) => {
    return sum += element;
  }, 0) / array.length;
}

function getBestStudent(studentObject) {
  let bestAverage = 0;
  let bestStudent;
  for (let student in studentObject) {
    let average = getAverage(studentObject[student]);
    if (average > bestAverage) {
      bestAverage = average;
      bestStudent = student;
    }
  }
  return bestStudent;
}

console.log(getBestStudent({
  Susan: [67, 84, 75, 63],
  Mike: [87, 98, 64, 71],
  Jim: [90, 58, 73, 86]
}));

console.log(getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80]
}));