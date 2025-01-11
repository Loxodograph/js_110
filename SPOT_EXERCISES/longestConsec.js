/*

Problem
  - You are given an array of strings and an integer k.
    Your task is to return the first longest string
    consisting of k consecutive strings taken in the array.


  - Input: array  of strings, number
  - Output: string

  - Rules
    - Explicit:

      - will be given array of strings
      - integer k represents how many items in the array
        we will combine to determine longest string
      - return longest string

    - Implicit:


  - Questions


Examples and Test Cases

// Test Cases
console.log(longestConsec(
  ["zone", "abigail", "theta", "form", "libe", "zas"]
  , 2) === "abigailtheta"); // true

console.log(longestConsec(
  ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb",
  "oocccffuucccjjjkkkjyyyeehh"]
  , 1) === "oocccffuucccjjjkkkjyyyeehh"); // true

console.log(longestConsec([], 3) === ""); // true

console.log(longestConsec(
  ["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv",
  "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
  === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
   // true

console.log(longestConsec(
  ["wlwsasphmxx","owiaxujylentrklctozmymu",
    "wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true

console.log(longestConsec(
  ["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true

console.log(
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"],
   3) === "ixoyx3452zzzzzzzzzzzz"); // true

console.log(longestConsec(
  ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true

console.log(longestConsec(
  ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

Data Structures


Algorithm
  create function longestConsec which takes an array as an argument and a number
    - define variable longest string initialized to empty string
    - define variable current string initialized to empty string
    - if number is greater than array length, or number = 0, return empty string
    - iterate over elements of array starting at index 0
      - current string set to a slice of array from index, to number + 1
      - if current string is longer than longest string
        - assign longest string as current string
    - return longest string

Code
*/

function longestConsec(array, number) {
  let longestString = "";

  if (number > array.length || number <= 0) return "";

  for (let idx = 0; idx < array.length; idx++) {
    let currentString = array.slice(idx, idx + number).join("");
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }
  return longestString;
}

console.log(longestConsec(
  ["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true

console.log(longestConsec(
  ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true

console.log(longestConsec([], 3) === ""); // true

console.log(longestConsec(
  ["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv",
    "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
  === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
// true

console.log(longestConsec(
  ["wlwsasphmxx","owiaxujylentrklctozmymu",
    "wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true

console.log(longestConsec(
  ["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true

console.log(
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"],
    3) === "ixoyx3452zzzzzzzzzzzz"); // true

console.log(longestConsec(
  ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true

console.log(longestConsec(
  ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
