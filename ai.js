import { findWinningMove } from "./logic.js";
function getComputerMove(board, Symbol) {
  let opponentSymbol;
  if (Symbol === "x") {
    opponentSymbol = "o";
  } else {
    opponentSymbol = "x";
  }
  const myMark = Symbol;
  const enemyMark = myMark === "X" ? "O" : "X";
  const winMove = findWinningMove(board, myMark);
  if (winMove) {
    return winMove;
  }

  const blockMove = findWinningMove(board, enemyMark);
  if (blockMove) {
    return blockMove;
  }
  let availableMoves = [];
  for (let i = 0; i < board.length; i++) {
    const cell = board[i].toString().toLowerCase(); 
        if (cell !== "x" && cell !== "o") { availableMoves.push(i + 1);
    }
  }
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  // console.log(randomIndex)
  return availableMoves[randomIndex];
}

export default getComputerMove;
