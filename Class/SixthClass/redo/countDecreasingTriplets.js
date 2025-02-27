// Given an array of numbers, return the count of all combination
// of 3 numbers where the values are in decreasing order.

/*
Create a function which returns the count of all triplets (3 number sequences)
where the values are in decreasing order.

input : array of numbers
output: Number representing total triplet combos

5,4,3
5,4,2
5,4,1
5,3,2
5,3,1
5,2,1
4,3,2
4,3,1
4,2,1
3,2,1

10 combinations

datastructure
array

algorithm
create variable comboCount equal to 0
iterate over elements of array
  iterate over remaining elements
    iterate again over remaining elements
      if all three elements are in decreasing order
        increase comboCount
return comboCount
*/

function countDecreasingTriplets(arr) {
  let comboCount = 0;

  for (let first = 0; first < arr.length - 2; first++) {
    for (let second = first + 1; second < arr.length - 1; second++) {
      for (let third = second + 1; third < arr.length; third++) {
        if (arr[first] > arr[second] && arr[second] > arr[third]) {
          comboCount++;
        }
      }
    }
  }
  return comboCount;
}

// Test cases
console.log(countDecreasingTriplets([5, 4, 3, 2, 1])); // Expected output: 10
console.log(countDecreasingTriplets([-1, -2, -3, 4])); // Expected output: 1
console.log(countDecreasingTriplets([1, 2, 3, 4, 5])); // Expected output: 0 (No combinations)