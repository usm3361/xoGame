import input from "analiza-sync";
import boardFunc from "./board.js";
import logic from "./logic.js";
import getComputerMove from "./ai.js";

let board = boardFunc.createBoard();
let currentPlayer = "X";
let isVsComputer = false;

function startGame() {
  console.log("welcome to game!");
  console.log("1. player VS player");
  console.log("2. player VS ai");
  
  let modeGame = input("Select a game mode 1/2: ")
  
  if (modeGame === "2") {
    isVsComputer = true;
    console.log("Game mode selected: player VS ai ");
  } else {
    console.log("Game mode selected: 2 players");
  }
  
  boardFunc.printBoard(board);
  playTurn();
};

function playTurn() {
  if (isVsComputer && currentPlayer === "O") {
    console.log("ai thinks");
    setTimeout(() => {
      const computerMove = getComputerMove(board);
      handleMove(computerMove);
    }, 1000);
  } else {
    input(`Player's turn ${currentPlayer}, Select a slot (1-9): `, (input) => {
      const position = parseInt(input);
      
      if (!logic.isValidMove(board, position)) {
        console.log("Error: Slot is occupied");
        playTurn();
        return;
      }
      
      handleMove(position);
    });
  }
}

function handleMove(position) {
  logic.updateBoard(board, position, currentPlayer);
  boardFunc.printBoard(board);
  
  if (logic.checkWin(board)) {
    console.log(`congratulations player ${currentPlayer} won!`);
    readline.close();
    return;
  }
  
  if (logic.checkDraw(board)) {
    console.log("המשחק נגמר The game ended in a draw.");
    readline.close();
    return;
  }
  
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  playTurn();
}

startGame();
