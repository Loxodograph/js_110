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

function displayPlayerHand(playersHand){
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

function total(playersHand) {
  let total = 0;
  
  let values = playersHand.map(value => value[1]);
  console.log(values);

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
