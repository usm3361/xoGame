function getComputerMove(board) {
  // console.log(board)
  let availableMoves = [];

  for (let i = 1; i <= board.length; i++) {
    if (board[i] !== "x" && board[i] !== "o") {
      availableMoves.push(i);
    }

    
  }
  // console.log(availableMoves)
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  // console.log(randomIndex)
  return availableMoves[randomIndex];
}
export default getComputerMove;
