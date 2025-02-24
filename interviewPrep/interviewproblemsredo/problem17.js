/*
Problem
  Create a function that takes an array of integers argument
  Determine minimum integer values that can be added to array
    so that sum of all elements equals closest prime number
    that is greater than the current sum of the numbers

  The array will always contain at least 2 integers
  All values in array are positive
  Can be multiple occurences of various numbers in array

  Examples
    [1, 2, 3] = sum 6. Closest prime number is 7. We can add 1.
    [5, 2] = sum 7. closest prime is 11, can add 4
    [1, 1, 1] = sum 3. closest prime is 5, can add 2

Algorithm
create function isPrime which takes number as argument
  create variable divisor equal to 2
  while divisor is less than square root of number
    if number is evenly divisible by divisor
      return false
    increment divisor
  return true

create function nearestPrimeSum which takes array argument
  define variable totalSum equal sum reduction of array
  define variable count equal to 1
  while totalSum is not prime
    add count to totalSum
    increment count
  return count
*/
function nearestPrimeSum(array) {
  let totalSum = array.reduce((total, element) => total + element, 0) + 1;
  let count = 1;
  while (!isPrime(totalSum)) {
    totalSum += 1;
    count++;
  }
  return count;
}

function isPrime(number) {
  let divisor = 2;
  while (divisor <= Math.sqrt(number)) {
    if (number % divisor === 0) {
      return false;
    }
    divisor++;
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