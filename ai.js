function getComputerMove(board) {
  let availableMoves = [];

  for (let i = 0; i < board.length; i++) {
    if (board[i] !== "X" && board[i] !== "O") {
      availableMoves.push(i + 1);
    }

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  }
}
export default getComputerMove;
