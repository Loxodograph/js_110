let READLINE = require("readline-sync");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log("     |     |");
  console.log("");
}

// let board = {
//   1: "X", // top left
//   2: " ", // top center
//   3: " ", // top right
//   4: " ", // center left
//   5: "O", // center
//   6: " ", // center right
//   7: " ", // bottom left
//   8: " ", // bottom center
//   9: "X", // bottom right
// };

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function computerChoosesSquare(board) {

  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = READLINE.question().trim();
    
    if (emptySquares(board).includes(square)) break;
    
    prompt("Sorry, that's not a valid choice.")
  }

  board[square] = HUMAN_MARKER;
}

function prompt(message) {
  console.log("=> " + message);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];
  
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}
while (true) {
let board = initializeBoard();
displayBoard(board);

while (true) {
  displayBoard(board);

  playerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;

  computerChoosesSquare(board);
  if (someoneWon(board) || boardFull(board)) break;
}

displayBoard(board);

if (someoneWon(board)) {
  prompt(`${detectWinner(board)} won!`)
} else {
  prompt("It's a tie!")
}

prompt("Play Again? (y or n)");
let answer = READLINE.question().toLowerCase()[0];
if (answer !== 'y') break;

}