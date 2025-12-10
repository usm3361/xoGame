function isValidMove(board, position) {
  const index = position - 1;
  if (position < 1 || position > 9) return false;
  if (board[index] === "X" || board[index] === "O") return false;
  return true;
}

function updateBoard(board, position, currPlayer) {
    const index = position - 1;
    board[index] = currPlayer.type;
}

function checkWin(board) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]            
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === board[b] && board[b] === board[c]) {
            return true;
        }
        
    }
    return false;
}

function checkDraw(board) {
    return board.every(cell => cell === "X" || cell === "O");
}

export default { isValidMove, updateBoard, checkWin, checkDraw };