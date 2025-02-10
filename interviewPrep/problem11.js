/*
P
  - create function that takes nonempty string
  - returns array consisting of string and integer
  - return shortest possibly substring and maximum possible
  - repeats that satisfies equation
  - string = substring * integer
E
see below

D
array strings

A
create repeatedSubstring function takes string argument
  - define variable count = 1;
  - iterate over elements of string
    - iterate over elements of string
      - create slice equal to first element, ending at last element
      - while repeat of slice count times isn't equal to string
        - increment count
        - if slice repeat count times is longer than string
          -break loop
        - if slice repeat count times equals string
          - return array containing slice and count


C
*/
function repeatedSubstring(string) {
  let count = 0;

  for (let start = 0; start < string.length - 1; start++) {
    for (let last = start; last <= string.length; last++) {
      let currentSlice = string.slice(start, last + 1);
      while (currentSlice.repeat(count) !== string) {
        count++;
        if (currentSlice.repeat(count).length > string.length) {
          count = 0;
          break;
        }
        if (currentSlice.repeat(count) === string) {
          return [currentSlice, count];
        }
      }
    }
  }
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));