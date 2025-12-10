function isValidMove(board, slot) {
    const index = slot-1;
  if (slot < 1 || slot > 9) return false;
  if (board[index] === "x" || board[index] === "o") return false;
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
export function blockWin(board) {
    const blockwinPatterns = [
        [0, 1, 2], [1, 2, 0], [0, 2, 1], [3, 4, 5], [4, 5, 3], [3, 5, 4], [6, 7, 8], [7, 8, 6], [6, 8, 7] 
        [0, 3, 6], [3, 6, 0], [0, 6, 3], [1, 4, 7], [4, 7, 1], [1, 7, 4], [2, 5, 8], [5, 8, 2], [2, 8, 5] 
        [0, 4, 8], [4, 8, 0], [0, 8, 4], [2, 4, 6], [4, 6, 2], [2, 6, 4]
    ];

    for (let pattern of blockwinPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === board[b]) {
            console.log(board[a],board[b],board[c])
            return board[c];
        }
        
    }
    return
}

// const x = blockWin(["x", "2", "3", "o", "5", "6", "7", "8", "9"])
// console.log(x)
export default { isValidMove, updateBoard, checkWin, blockWin };