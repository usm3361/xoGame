export function isValidMove(board, slot) {
  const index = slot - 1;
  if (slot < 1 || slot > 9) return false;
  if (board[index] === "x" || board[index] === "o") return false;
  return true;
}
export function checkWin(board) {
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

export function updateBoard(board, position, currPlayer) {
  const index = position - 1;
  board[index] = currPlayer.type;
}
export function findWinningMove(board, symbol) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const values = [board[a], board[b], board[c]]
    const symbolCount = values.filter(val => val === symbol).length
    const emptyCount = values.filter(val => val !== "x" && val !== "o").length;
    if (symbolCount === 2 && emptyCount === 1) {
            const emptyIndex = pattern.find(index => board[index] !== "x" && board[index] !== "o");
            return emptyIndex + 1;
        }
    }
    return null;
}

