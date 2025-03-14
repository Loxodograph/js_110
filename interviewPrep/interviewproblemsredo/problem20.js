/*
Create function that takes array of numbers
all of which are the same except for one.
find number in array that differs from the rest
*/

function whatIsDifferent(array) {
  for (let idx = 0; idx < array.length; idx++) {
    if (array.indexOf(array[idx]) === array.lastIndexOf(array[idx])) {
      return array[idx];
    }
  }
}

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);