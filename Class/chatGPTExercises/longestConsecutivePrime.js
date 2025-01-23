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


*/