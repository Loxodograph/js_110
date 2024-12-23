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
      sum += parseInt(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function dealToPlayer(deck) {
  PLAYER_HAND.push(deck.shift(), deck.shift());
  return PLAYER_HAND;
};

function dealToDealer(deck) {
  DEALER_HAND.push(deck.shift(), deck.shift());
  return DEALER_HAND;
};

initializeDeck(DECK_VALUES);
shuffle(DECK);
dealToPlayer(DECK);
dealToDealer(DECK);
gameLoop();

function displayPlayerHand(hand) {
  let textHand = PLAYER_HAND.map(card => card[1]);
  return joinAnd(textHand);
}

function displayDealerHand(hand) {
  let dealerHand = DEALER_HAND.map(card => card[1]);
  return joinAnd(dealerHand);
}

function joinAnd(array, delimiter = ", ", joinWord = "and") {
  if (array.length) {
    if (array.length === 1) {
      return String(array[0]);
    } else if (array.length === 2) {
      array[array.length - 1] = joinWord + " " + array[array.length - 1];
      return array.join(" ");
    } else {
      array[array.length - 1] = joinWord + " " + array[array.length - 1];
      return array.join(delimiter);
    }
  }
  return array;
}

function gameLoop() {
  while (true) {
    console.log(`Dealer Has: ${displayDealerHand()}`);
    console.log(`You have: ${displayPlayerHand()}`)

    if (busted(PLAYER_HAND)) break;
    console.log("Hit or Stay?");
    let answer = READLINE.question();
    if (answer === 'stay' || busted(PLAYER_HAND)) break;
    PLAYER_HAND.push(DECK.shift());
  }

  if (busted(PLAYER_HAND)) {
    console.log("Dealer Wins!");
  } else {
    console.log("You chose to stay!")
  }

  while (true) {
      dealerTurn();
      if (busted(DEALER_HAND)) {
        console.log("You win!");
        break;
      }
    }
  }

function dealerTurn() {
  
  while(true) {
  if (total(DEALER_HAND) <= 21) {
    break;
  } else {
  DEALER_HAND.push(DECK.shift());
  }
}
console.log(`Dealer Has: ${displayDealerHand()}`);
  console.log(`You have: ${displayPlayerHand()}`);
}


function busted(hand) {
  if (total(hand) > 21) {
    return true;
  }
  return false;
}