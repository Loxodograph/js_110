/*
Create a function that takes an array of integers as an argument.
The function should determine the minimum integer value that can
be appended to the array so the sum of all the elements equal the
closest prime number that is greater than the current sum of the
numbers. For example, the numbers in [1, 2, 3] sum to 6.
The nearest prime number greater than 6 is 7.
Thus, we can add 1 to the array to sum to 7.

Notes:

The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.

Problem
  create a function that returns the minimum integer value
  that can be appended to the array so that the sum of all values
  is equal to the closest prime number greater than current sum of
  numbers
    Example 1, 2, 3 sum is 6. add 1 more, sum 7, the nearest prime number

  Rules
    Explicit
      Array will always contain at least 2 numbers
      All values in array must be positive
      Can be multiple occurences of each number

Data structures
Array to be inputted into function
Helper function to determine if prime

Algorithm
create function isPrime which takes number argument
  create variable count equal to 2
  while count is less or equal to square root of number
    check if number is evenly divisibile by count
    if so, return false
    increment count
  return true
create function nearestPrimeSum which takes array of numbers as argument

reduce array to calculate sum variable
create variable count equal to 0
while sum is not prime
  add 1 to number
  increment count
return count
*/
function nearestPrimeSum(arrayOfNums) {
  let sum = arrayOfNums.reduce((total, element) => total + element, 1);
  let count = 1;
  while (!isPrime(sum)) {
    sum += 1;
    count++;
  }
  return count;
}

function isPrime(num) {
  let count = 2;
  while (count <= Math.sqrt(num)) {
    if (num % count === 0) {
      return false;
    }
    count++;
  }
  return true;
}

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
