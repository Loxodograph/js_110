const READLINE = require('readline-sync');

const DECK_VALUES = {
  suit: ["H", "D", "C", "S",],
  card: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",]
};

const GOAL = 21;
const MAX_DEALER = 17
const DECK = [];
const PLAYER_HAND = [];
const DEALER_HAND = [];
let playerWins = 0;
let dealerWins = 0;


function initializeDeck(deck) {
  deck["suit"].forEach(suit => {
    deck["card"].forEach(value => {
      DECK.push([suit, value]);
    });
  });
  shuffle(DECK);
};

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function deal(deck) {
  PLAYER_HAND.push(deck.shift(), deck.shift());
  DEALER_HAND.push(deck.shift(), deck.shift());
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayPlayerHand(playersHand) {
  let message = "You have: ";
  for (let i = 0; i < playersHand.length; i++) {
    if (i === playersHand.length - 1) {   // if last card in hand, add and
      message += "and " + playersHand[i][1];
    } else {
      message += playersHand[i][1] + ", "
    }
  }
  prompt(message);
}

function displayFullDealerHand(playersHand) {
  let message = "Dealer has: ";
  for (let i = 0; i < playersHand.length; i++) {
    if (i === playersHand.length - 1) {   // if last card in hand, add and
      message += "and " + playersHand[i][1];
    } else {
      message += playersHand[i][1] + ", "
    }
  }
  prompt(message);
}

function displayDealerHand(dealersHand) {
  prompt(`Dealer has ${dealersHand[0][1]} and unknown card`);
}

function total(playersHand) {
  let total = 0;

  let values = playersHand.map(value => value[1]);

  for (let i = 0; i < values.length; i++) {
    if (values[i] === "J" || values[i] === "K" || values[i] === "Q") {
      total += 10;
    } else if (values[i] === "A") {
      total += 11;
    } else {
      total += Number(values[i]);
    }
  }

  values.filter(value => value === "A").forEach(_ => {
    if (total > GOAL) total -= 10;
  });

  return total;
}

function hit(playersHand) {
  playersHand.push(DECK.shift());
}

function gameRound() {

  let playerTotal = playerTurn();
  let dealerTotal;
  if (!busted(PLAYER_HAND, playerTotal)) {
    dealerTotal = dealerTurn();
  } else {
    return;
  }

  console.clear();

  displayFinalTotals(PLAYER_HAND, DEALER_HAND, playerTotal, dealerTotal);

  finalOutput(PLAYER_HAND, DEALER_HAND, playerTotal, dealerTotal);
}

function finalOutput(playersHand, dealersHand, playerTotal, dealerTotal) {
  if ((playerTotal > dealerTotal) || dealerBusted(DEALER_HAND, dealerTotal)) {
    prompt("You Win!");
    playerWins++;
  } else if (playerTotal === dealerTotal) {
    prompt("Draw");
  } else if (playerTotal < dealerTotal) {
    prompt("Dealer Wins");
    dealerWins++;
  }
}

function playerTurn() {
  let playerTotal
  while (true) {
    playerTotal = total(PLAYER_HAND);
    if (playerTotal > GOAL) return;
    if (busted(DEALER_HAND)) return;
    console.clear();
    displayDealerHand(DEALER_HAND);
    displayPlayerHand(PLAYER_HAND);
    prompt("hit or stay?");
    let answer = READLINE.question();
    answer = isvalidHitOrStay(answer)
    if (answer === 'stay') break;
    if (answer === "hit") hit(PLAYER_HAND);
    
  }
  return playerTotal
}

function dealerTurn() {
  let dealerTotal;
  displayDealerHand(DEALER_HAND);
  while (true) {
    dealerTotal = total(DEALER_HAND)
    if (busted(DEALER_HAND) || dealerTotal >= MAX_DEALER) {
      break;
    } else {
      hit(DEALER_HAND);
    }
  }
  return dealerTotal;
}

function isvalidHitOrStay(response) {
  while (response !== "hit" && response !== "stay") {
    prompt("Invalid Answer. hit or stay?")
    response = READLINE.question();
  }
  return response
}

function busted(playersHand, playerTotal) {
  if (playerTotal > GOAL) {
    console.clear();
    displayPlayerHand(playersHand);
    prompt("You have busted. You Lose")
    return true
  }
  return false;
}

function dealerBusted(dealersHand, dealerTotal) {
  if (dealerTotal > GOAL) {
    console.clear();
    displayFullDealerHand(dealersHand)
    prompt("Dealer has busted.")
    return true
  }
  return false; 
}

function displayFinalTotals(playersHand, dealersHand, playerTotal, dealerTotal) {
  console.clear();
  displayFullDealerHand(dealersHand);
  prompt(`Dealer total ${dealerTotal}`);
  displayPlayerHand(playersHand);
  prompt(`Your Total: ${playerTotal}`);
}

function gameplayLoop() {
  PLAYER_HAND.splice(0, PLAYER_HAND.length);
  DEALER_HAND.splice(0, DEALER_HAND.length);
  initializeDeck(DECK_VALUES);
  deal(DECK);
  gameRound();
  if (bestOfFive()) {
    return
  };
  while (true) {
    prompt("Play another round? y/n");
    let answer = READLINE.question();
    if (answer === "y") {
      
      return gameplayLoop();
    } else {
      console.clear()
      prompt("Thanks for playing. Goodbye!")
      break;
    }
  }
}

function bestOfFive() {
  if (playerWins >= 3) {
    setTimeout(function(){
      console.clear();
      prompt("You have won 3 games. Congratulations");
      prompt("Thanks for playing. Goodbye!")
  }, 2000);
  
    return true;
  }
  if (dealerWins >= 3) {
    setTimeout(function(){
      console.clear();
      prompt("Dealer has won 3 games.");
    prompt("Thanks for playing. Goodbye!")
  }, 2000);
    
    return true;
  }
  
}

gameplayLoop();