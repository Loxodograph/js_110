const READLINE = require('readline-sync');

const DECK_VALUES = {
  suit: ["H", "D", "C", "S",],
  card: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace",]
};

const GOAL = 21;
const MAX_DEALER = 16;
const DECK = [];
const PLAYER_HAND = [];
const DEALER_HAND = [];

let playerWins = 0;
let dealerWins = 0;

let playerMatchWins = 0;
let dealerMatchWins = 0;


function initializeDeck(deckValues) {
  DECK.splice(0, DECK.length);
  deckValues["suit"].forEach(suit => {
    deckValues["card"].forEach(value => {
      DECK.push([suit, value]);
    });
  });
  shuffle(DECK);
}

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

function greeting() {
  prompt("Welcome to 21 Game");
  prompt("---------------");
}

function displayPlayerHand(playersHand) {
  let message = "You have: ";
  for (let index = 0; index < playersHand.length; index++) {
    if (index === playersHand.length - 1) {   // if last card in hand, add and
      message += "and " + playersHand[index][1];
    } else {
      message += playersHand[index][1] + ", ";
    }
  }
  prompt(message);
}

function displayFullDealerHand(playersHand) {
  let message = "Dealer has: ";
  for (let index = 0; index < playersHand.length; index++) {
    if (index === playersHand.length - 1) {   // if last card in hand, add and
      message += "and " + playersHand[index][1];
    } else {
      message += playersHand[index][1] + ", ";
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

  for (let index = 0; index < values.length; index++) {
    if (values[index] === "Jack" || values[index] === "King" || values[index] === "Queen") {
      total += 10;
    } else if (values[index] === "Ace") {
      total += 11;
    } else {
      total += Number(values[index]);
    }
  }

  values.filter(value => value === "Ace").forEach(_ => {
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
    console.log(dealerTotal);
  } else {
    return;
  }

  console.clear();

  displayFinalTotal(PLAYER_HAND, DEALER_HAND, playerTotal, dealerTotal);

  finalOutput(playerTotal, dealerTotal);
}

function finalOutput(playerTotal, dealerTotal) {
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
  let playerTotal;
  while (true) {
    playerTotal = total(PLAYER_HAND);
    if (playerTotal > GOAL) break;

    console.clear();
    displayDealerHand(DEALER_HAND);
    displayPlayerHand(PLAYER_HAND);
    let answer = isValidHitOrStay();
    if (answer === 'stay') break;
    if (answer === "hit") hit(PLAYER_HAND);

  }
  return playerTotal;
}

function dealerTurn() {
  let dealerTotal;
  displayDealerHand(DEALER_HAND);
  while (true) {
    dealerTotal = total(DEALER_HAND);
    if (busted(DEALER_HAND) || dealerTotal >= MAX_DEALER) {
      break;
    } else {
      hit(DEALER_HAND);
    }
  }
  return dealerTotal;
}

function isValidHitOrStay() {
  prompt("hit or stay?");
  let response = READLINE.question();

  while (response !== "hit" && response !== "stay") {
    prompt("Invalid Answer. hit or stay?");
    response = READLINE.question();
  }

  return response;
}

function isValidContinue() {
  prompt("Play another round? (y)es/(n)o");
  let response = READLINE.question();

  while ((response !== "yes" && response !== "y") && (response !== "n" && response !== "no")) {
    prompt("Invalid Answer. (y)es/(n)o");
    response = READLINE.question();
  }

  return response;
}

function busted(playersHand, playerTotal) {
  if (playerTotal > GOAL) {
    console.clear();
    dealerWins++;
    displayPlayerHand(playersHand);
    prompt("You have busted. You Lose");
    return true;
  }
  return false;
}

function dealerBusted(dealersHand, dealerTotal) {
  if (dealerTotal > GOAL) {
    console.clear();

    displayFullDealerHand(dealersHand);
    prompt("Dealer has busted.");
    return true;
  }
  return false;
}

function displayFinalTotal(playersHand, dealersHand, playerTotal, dealerTotal) {
  console.clear();

  displayFullDealerHand(dealersHand);
  prompt(`Dealer Total: ${dealerTotal}`);

  displayPlayerHand(playersHand);
  prompt(`Your Total: ${playerTotal}`);
}

function gameplayLoop() {
  // clear player and dealer hands
  PLAYER_HAND.splice(0, PLAYER_HAND.length);
  DEALER_HAND.splice(0, DEALER_HAND.length);
  // initialize and shuffle deck
  initializeDeck(DECK_VALUES);

  deal(DECK);

  gameRound();
  if (!bestOfFive()) {
    continueGame();
  }
}

function continueGame() {
  while (true) {
    let answer = isValidContinue();
    if (answer === "y" || answer === "yes") {
      return gameplayLoop();
    } else {
      console.clear();
      prompt("Thanks for playing. Goodbye!");
      return false;
    }
  }
}

function bestOfFive() {
  if (playerWins >= 3) {
    playerMatchWins++;
    setTimeout(function () {
      console.clear();
      prompt(`You have won 3 games. Congratulations, You won the match.\n=> You have won ${playerMatchWins} matches`);
      playerWins = 0;
      dealerWins = 0;
      continueGame();
    }, 2000);

    return true;
  }

  if (dealerWins >= 3) {
    dealerMatchWins++;
    setTimeout(function () {
      console.clear();
      prompt(`Dealer has won 3 games. Dealer has won the match.\n=> Dealer has won ${dealerMatchWins} matches.`);
      playerWins = 0;
      dealerWins = 0;
      continueGame();
    }, 2000);

    return true;
  }
  return false;
}

greeting();
setTimeout(function () {
  gameplayLoop();
}, 2000);