const READLINE = require('readline-sync');

const DECK_VALUES = {
  suit: ["H", "D", "C", "S",],
  card: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",]
};

const GOAL = 21;
const DECK = [];
const PLAYER_HAND = [];
const DEALER_HAND = [];

function initializeDeck(deck){
  DECK["suit"].forEach(suit => {
    DECK["card"].forEach(value => {
      DECK_VALUES.push([suit, value]);
    });
  });
};

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
};

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function dealToPlayer(deck){
  PLAYER_HAND.push(deck.shift(), deck.shift());
  return PLAYER_HAND;
};

shuffle(DECK);
console.log(DECK);
console.log(dealToPlayer(DECK));