/*
- create function that takes string argument consisting of number digits
- compute the greatest product of four consecutive digits

create function greatestProduct takes string argument
  split string into array
  define variable current product
  define variable largest product
  iterate over elements of array
    let slice = from index to next 3 elements
      current product = reduce slice to product
      if currentProduct > largestProduct
        largestProduct = currentProduct
        currentProduct = 0;
  return largestProduct

*/

function greatestProduct(str) {
  let numArray = str.split("");
  let currentProduct = 0;
  let largestProduct = 0;
  for (let idx = 0; idx < numArray.length; idx++) {
    let slice = numArray.slice(idx, idx + 4);
    currentProduct = slice.reduce((product, num) => {
      return product *= num;
    }, 1);
    if (currentProduct > largestProduct) {
      largestProduct = currentProduct;
      currentProduct = 0;
    }
  }
  return largestProduct;
}
const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6