/*

Problem
  - Create a function that takes a number discs as an
    argument and returns the minimum amount of steps
    needed to complete the game.


  - Input: Number (representing number of disks)
  - Output: Number (representing minimum amount of steps
            needed to complete game)

  - Rules
    - Explicit:
      - The amount of discs is always a positive integer.
      - 1 disc can be changed per move.

    - Implicit:
      - ( 2 ** n )- 1


  - Questions


Examples and Test Cases
towerHanoi(3) // 7

towerHanoi(5) // 31

towerHanoi(0) // 0


Data Structures


Algorithm
  - CREATE function towerHanoi which takes number of disks as parameter
    - use this forumla to determine number of steps
      - return ( 2 ** n )- 1

Code
*/

function towerHanoi(number) {
  return (2 ** number) - 1;
}

console.log(towerHanoi(3)); // 7

console.log(towerHanoi(5)); // 31

console.log(towerHanoi(0)); // 0