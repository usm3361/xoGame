import { blockWin } from "./logic.js";
function getComputerMove(board) {
  // console.log(board)
  let availableMoves = [];

  for (let i = 1; i <= board.length; i++) {
    if (board[i] !== "x" && board[i] !== "o") {
      availableMoves.push(i);
    }
  }

  const blocker = blockWin(board)
  if (!blocker) { 
  // console.log(availableMoves)
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  // console.log(randomIndex)
  return availableMoves[randomIndex];
  }
  else {
    return blocker
  }
}
export default getComputerMove;
