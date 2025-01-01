const READLINE = require('readline-sync');

const DECK_VALUES = {
  suit: ["H", "D", "C", "S",],
  card: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",]
};

const GOAL = 21;
const DECK = [];
const PLAYER_HAND = [];
const DEALER_HAND = [];

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
    if (total > 21) total -= 10;
  });

  return total;
}

function hit(playersHand) {
  playersHand.push(DECK.shift());
}

initializeDeck(DECK_VALUES);
deal(DECK);
gameplayLoop();

function gameplayLoop() {
  while (true) {
    if (busted(PLAYER_HAND)) return;
    if (busted(DEALER_HAND)) return;
    console.clear();
    displayDealerHand(DEALER_HAND);
    displayPlayerHand(PLAYER_HAND);
    prompt("hit or stay?");
    let answer = READLINE.question();
    answer = isvalidAnswer(answer)
    if (answer === 'stay' || busted(PLAYER_HAND)) break;
    if (answer === "hit") hit(PLAYER_HAND);
  }
  if (!busted(PLAYER_HAND)) {
    dealerTurn();
  }

  console.clear();

  displayFinalTotals(PLAYER_HAND, DEALER_HAND)
  if (total(PLAYER_HAND) > total(DEALER_HAND)) {
    prompt("You Win!");
  } else if (total(PLAYER_HAND) === total(DEALER_HAND)) {
    prompt("Draw");
  } else {
    prompt("Dealer Wins");
  }
}

function dealerTurn() {
  displayDealerHand(DEALER_HAND);
  while (true) {
    if (busted(DEALER_HAND) || total(DEALER_HAND) >= 16) {
      break;
    } else {
      hit(DEALER_HAND);
    }
  }
}

function isvalidAnswer(response) {
  while (response !== "hit" && response !== "stay") {
    prompt("Invalid Answer. hit or stay?")
    response = READLINE.question();
  }
  return response
}

function busted(playersHand) {
  if (total(playersHand) > 21) {
    displayPlayerHand(PLAYER_HAND);
    prompt("You have busted. You Lose")
    return true
  }
  return false;
}

function displayFinalTotals(playersHand, dealersHand) {
  console.clear();
  displayFullDealerHand(dealersHand);
  prompt(`Dealer total ${total(dealersHand)}`);
  displayPlayerHand(playersHand);
  prompt(`Your Total: ${total(playersHand)}`);
}