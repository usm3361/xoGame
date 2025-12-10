function createBoard() {
  return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
}

function printBoard(board) {
  console.log('\n\n==The Board==')
  console.log("\n  " + board[0] + " | " + board[1] + " | " + board[2]);
  console.log(" ---+---+---");
  console.log("  " + board[3] + " | " + board[4] + " | " + board[5]);
  console.log(" ---+---+---");
  console.log("  " + board[6] + " | " + board[7] + " | " + board[8] + "\n");
}

export default { createBoard, printBoard };
