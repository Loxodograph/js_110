/*
Create function that takes array of integers
return the number of identical pairs of integers in that array

if array is empty, return 0

if a number occurs more than twice, count each complete pair once

create function pairs which takes array as argument
create variable count equal to 0
create copy of array
while copied element has length longer than 1
  let element equal shifted element of copy array
  if copy array contains element
    remove element from copied array
    increase count
return count
*/
function pairs(array) {
  let count = 0;
  let arrayCopy = [...array];

  while (arrayCopy.length > 1) {
    let element = arrayCopy.shift();
    if (arrayCopy.includes(element)) {
      arrayCopy.splice(arrayCopy.indexOf(element), 1);
      count++;
    }
  }
  return count;
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);