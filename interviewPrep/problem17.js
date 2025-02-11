/*
P
  - create function takes array of integers as arguments
  - function determines minimum integer value that can be
    appended to array so sum of all elements equals closest
    prime number that is greater than
    the current sum of the numbers.

create function is prime which takes number argument
  define count = number - 1
  while count > 1
    if number is evenly divisible by count
      return false
  return true

create function nearestPrimeSum which takes array of numbers
  define sum as reduction of array + 1;
  define numUntilPrime as 1;

  while sum is not prime
    sum += 1;
    numUntilPrime +=1
  return numUntilPrime
*/
function nearestPrimeSum(array) {
  let sum = array.reduce((total, count) => {
    return total += count;
  }, 1);
  let numUntilPrime = 1;

  while (!isPrime(sum)) {
    sum += 1;
    numUntilPrime += 1;
  }
  return numUntilPrime;
}

function isPrime(number) {
  let count = number - 1;
  while (count > 1) {
    if (number % count === 0) {
      return false;
    }
    count--;
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