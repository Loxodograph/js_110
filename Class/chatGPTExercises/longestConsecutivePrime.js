/*
Problem: Longest Consecutive Prime Factors of a Target Number

Write a function that returns the longest consecutive prime numbers in the given array that are factors of the target number.
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
        The longest consecutive sequence of prime numbers in the array that are factors of the target number.
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

    ​, testing only 6k±16k±1 values (this skips multiples of 2 and 3).
    Example:
        For n=37n=37, check divisibility by 5,7,11,…5,7,11,… (all 6k±16k±1 values).

Stop early:

    If you find a divisor, nn is not prime.
    If no divisor is found up to nn

​, nn is prime.
*/