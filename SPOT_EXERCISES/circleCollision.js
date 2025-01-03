/*

Problem
  - Create a function that returns true if the given 
    circular areas are intersecting, otherwise return false

  - Input: array containing radius of circle, x position, y position
  - Output: true or false

  - Rules
    - Explicit:
      - expect useable input and positive radii
      - given coordinates are the centers of the circles.

    - Implicit:
      - looking for intersecting areas, not intersection outlines.

      

  - Questions
    - how to determine if circles intersect
      - taking the center points of the two circles and ensuring 
        the distance between the center points are less than the two 
        radii added together.
    - distance between center is calculated as
      -sqrt((x1 - x2) ** 2) + ((y1 - y2) **2)

Examples and Test Cases

  isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true

  isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false


Data Structures
  - array

Algorithm
  - declare function isCircleCollision which accepts two arrays as argument

    - let firstCircleX = second array element of first array
    - let secondCircleX = second array element of second array
    - let firstCircleY = third array element of first array
    - let secondCircleY = third array element of second array
    - let firstCircleRadius = first aray element of first array
    - let secondCircleRadius = first array element of second array
    - let radiusCombined = firstCircleRadius + secondCircleRadius

    - let distance = square root of (firstCircleX- secondCircleX) squared + (firstCircleY - secondCircleY) squared

    - determine if distance is < radius combined
      - if so return true
        - else return false

Code
*/

function isCircleCollision(array1, array2) {
  let firstCircleX = array1[1];
  let secondCircleX = array2[1];
  let firstCircleY = array1[2];
  let secondCircleY = array2[2];
  let firstCircleRadius = array1[0];
  let secondCircleRadius = array2[0];

  let radiusCombined = firstCircleRadius + secondCircleRadius;

  let distance = Math.sqrt(((firstCircleX - secondCircleX) ** 2) + ((firstCircleY - secondCircleY) ** 2));

  if (distance < radiusCombined) {
    return true;
  }
  return false;
}

console.log(isCircleCollision([10, 0, 0], [10, 10, 10])) // true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10])) // false
console.log(isCircleCollision([10, 0, 0], [5, 0, 0])) // true
console.log(isCircleCollision([1, 0, 0], [1, 0, 0])) // true
console.log(isCircleCollision([5, 0, 0], [5, 10, 10])) // false
console.log(isCircleCollision([1, 0, 0], [1, 10, 10])) // false