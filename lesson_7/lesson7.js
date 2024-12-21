function calculateLeftoverBlocks(blocks) {
  let blocksRemaining = blocks;
  let currentLayer = 0;
  let blocksRequired = 0;
  while (blocksRemaining >= blocksRequired) {
    currentLayer += 1;
    blocksRequired = currentLayer * currentLayer;
    if (blocksRequired <= blocksRemaining){
    blocksRemaining -= blocksRequired;
    }
  }
  return blocksRemaining;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
