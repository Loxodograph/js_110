/*
Problem: Longest Consecutive Prime Factors of a Target Number

Write a function that returns the longest consecutive prime numbers
in the given array that are factors of the target number.

Test Cases

console.log(longestConsecutivePrimeFactors([2, 3, 5, 7, 11, 13], 30));
// Expected: [2, 3, 5]

console.log(longestConsecutivePrimeFactors([2, 4, 6, 7, 11, 13], 77));
// Expected: [7, 11, 13]

console.log(longestConsecutivePrimeFactors([5, 7, 11, 12, 13, 15], 105));
// Expected: [5, 7, 11]

console.log(longestConsecutivePrimeFactors([2, 3, 8, 9, 10], 12));
// Expected: [2, 3]

console.log(longestConsecutivePrimeFactors([17, 19, 23, 29], 37));
// Expected: []

Explanation:

    Input:
        An array of numbers.
        A target number.

    Output:

        The longest consecutive sequence of prime numbers in the array
        that are factors of the target number.

        Return an empty array if no such sequence exists.

    Logic:

        Identify prime numbers in the array.
        Check if each prime number is a factor of the target number.
        Find the longest sequence of consecutive primes meeting the criteria.


    Steps to Determine if a Number is Prime:

    Eliminate obvious cases:
        If the number is less than or equal to 1, it is not prime.
        If the number is 2 or 3, it is prime.
        If the number is divisible by 2 or 3, it is not prime.

    Check divisibility up to the square root of the number:
      A number nn is prime if it is not divisible by any integer from 5 up to nn

    , testing only 6k±16k±1 values (this skips multiples of 2 and 3).
    Example:
      For n=37n=37, check divisibility by 5,7,11,…5,7,11,… (all 6k±16k±1 values)

Stop early:

    If you find a divisor, nn is not prime.
    If no divisor is found up to nn

, nn is prime.

algorithm
  create function isPrime() which takes a number as an argument
    if number is 2 or 3, return true
    if number is divisible by 2 or 3 return false
    define variable count = 4
    else
      while count is less than square root of number
        if number is divisible by count, return false
        increment count
    return true
  create function longestConsecutivePrimeFactors which takes
  an array of numbers and a target number as argument
    define variable currentSequence equal to empty array
    define variable longestSequence equal to empty array
    iterate over elements of inputArray
      if element is prime, and targetNumber % element is 0
        push element to currentSequence
      if currentSequence.length is longer than longestSequence
        - copy currentSequence to longestSequence
      else
        currentSequence equals empty array
    return longestSequence

*/

function isPrime(number) {
  if (number === 2 || number === 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  let count = 4;
  while (count < Math.sqrt(number)) {
    if (number % count === 0) {
      return false;
    }
    count++;
  }
  return true;
}

function longestConsecutivePrimeFactors(inputArray, targetNumber) {
  let currentSequence = [];
  let longestSequence = [];
  for (let idx = 0; idx < inputArray.length; idx++) {
    if (isPrime(inputArray[idx] && targetNumber % inputArray[idx] === 0)) {
      currentSequence.push(inputArray[idx]);
      if (currentSequence.length > longestSequence.length) {
        longestSequence = [...currentSequence];
      }
    } else {
      currentSequence = [];
    }
  }
  return longestSequence;
}


console.log(longestConsecutivePrimeFactors([2, 3, 5, 7, 11, 13], 30));
// Expected: [2, 3, 5]

console.log(longestConsecutivePrimeFactors([2, 4, 6, 7, 11, 13], 77));
// Expected: [7, 11, 13]

console.log(longestConsecutivePrimeFactors([5, 7, 11, 12, 13, 15], 105));
// Expected: [5, 7, 11]

console.log(longestConsecutivePrimeFactors([2, 3, 8, 9, 10], 12));
// Expected: [2, 3]

console.log(longestConsecutivePrimeFactors([17, 19, 23, 29], 37));
// Expected: []