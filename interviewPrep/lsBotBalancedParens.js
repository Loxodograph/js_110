/*
Write a function that takes a string containing parentheses
return true if the parentheses are balanced
otherwise return false

a balanced parentheses are parentheses that have the same
number of opening and closing parentheses, properly nested

() true
0 1
(()) true
01 23
(()()) true
013 245
((() false
012 3
()) false
0 12
())( false
03 12
"" true

algorithm
let stack = empty array
iterate over elements of str
  if element is open parenthesis
    push element to stack
  else if element is closed parenthesis
    if stack has no length
      return false
    pop element from stack

*/

function balancedParens(str) {
  let stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(balancedParens("()") === true);
console.log(balancedParens("(())") === true);
console.log(balancedParens("(()())") === true);
console.log(balancedParens("((()") === false);
console.log(balancedParens("())") === false);
console.log(balancedParens("())(") === false);
console.log(balancedParens("") === true);