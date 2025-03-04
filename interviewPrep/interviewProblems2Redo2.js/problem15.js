/*
Create a function that takes a string argument that consists
entirely of numeric digits and computes the greatest product
of four consecutive digits in the string.
The argument will always have more than 4 digits.

Problem:
  Create function that returns the greatest product posssible
  of four consecutive digits from input string

  Rules
    Explicit
      Argument will always contain more than 4 digits
    Implicit
      String to digit conversion may be necessary

Examples
  See Below

Data Structures
Strings and arrays - iteration

Algorithm

Create function greatestProduct which takes string argument
define variable current product equal to 0
define variable greatest product equal to 0

iterate over elements of input string starting on fourth element
  create array from slice of element containing four previous elements
  reduce array to currentProduct - calculate product
  if currentProduct is greater than greatestProduct
    greatestProduct equals currentProduct
  return greatestProduct
*/
function greatestProduct(strOfDigits) {
  let currentProduct = 0;
  let greatestProduct = 0;

  for (let idx = 3; idx < strOfDigits.length; idx++) {
    currentProduct = strOfDigits.slice(idx - 3, idx + 1)
      .split("")
      .reduce((product, element) => product * element, 1);
    if (currentProduct > greatestProduct) {
      greatestProduct = currentProduct;
    }
  }
  return greatestProduct;
}

const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6