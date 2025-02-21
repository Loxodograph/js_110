/*
create function takes string argument of numeric digits
compute greatest product of four consecutive digits

string will always have more than 4 digits

data structure
Array

create function greatestProduct which takes string argument
define variable digitArray equal number versions of string digits
define variable currentConsecutiveProduct
define variable LargestConsecutiveProduct
iterate over elements of digitArray, ending on third to last
  create four element long slice from index
    currentConsecutiveProduct = reduced slice
    if currentConsecutiveProduct is greater than longestConsecutiveProduct
      longestConsecutiveProduct equals currentConsecutiveProduct
      currentConsecutiveProduct equals 0
return largestConsecutiveProduct
*/

function greatestProduct(string) {
  let digitArray = string.split("").map(element => Number(element));
  let currentConsecutiveProduct = 0;
  let largestConsecutiveProduct = 0;

  for (let idx = 0; idx < digitArray.length - 3; idx++) {
    let slice = digitArray.slice(idx, idx + 4);
    currentConsecutiveProduct = slice.reduce((product, element) => product * element, 1);
    if (currentConsecutiveProduct > largestConsecutiveProduct) {
      largestConsecutiveProduct = currentConsecutiveProduct;
      currentConsecutiveProduct = 0;
    }
  }
  return largestConsecutiveProduct;
}

const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6