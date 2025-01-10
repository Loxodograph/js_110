// - create function calculateLeftoverBlocks which takes an integer as parameter
//     - let blocks remaining equal integer
//     - set layer to 1
//     - while blocks remaining is greater than or equal to integer
//         - if remaining blocks - layer ** 2 is less than 0
//            - return remaining blocks
//         - minus layer ** 2 from blocks remaining
//         - increment layer by one
//     - return blocks remaining

function calculateLeftoverBlocks(blocks) {
  let remainingBlocks = blocks;
  let layer = 0;
  while (remainingBlocks >= 0) {
    if (remainingBlocks - (layer ** 2) < 0) {
      return remainingBlocks;
    }
    remainingBlocks -= (layer ** 2);
    layer++;
  }
  return remainingBlocks;
}
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true