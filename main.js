const readline = require("readline");
impo
const { createBoard, printBoard } = require("./board");
const { isValidMove, updateBoard, checkWin, checkDraw } = require("./logic");
const { getComputerMove } = require("./ai");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let board = createBoard();
let currentPlayer = "X";
let isVsComputer = false;

function startGame() {
  console.log("ברוכים הבאים לאיקס עיגול!");
  console.log("1. שחקן נגד שחקן");
  console.log("2. שחקן נגד מחשב");

  rl.question("בחר מצב משחק (1 או 2): ", (answer) => {
    if (answer === "2") {
      isVsComputer = true;
      console.log("מצב נבחר: נגד המחשב.");
    } else {
      console.log("מצב נבחר: 2 שחקנים.");
    }

    printBoard(board);
    playTurn();
  });
}

function playTurn() {
  if (isVsComputer && currentPlayer === "O") {
    console.log("המחשב חושב...");
    setTimeout(() => {
      const computerMove = getComputerMove(board);
      handleMove(computerMove);
    }, 1000);
  } else {
    rl.question(`תור שחקן ${currentPlayer}, בחר משבצת (1-9): `, (input) => {
      const position = parseInt(input);

      if (!isValidMove(board, position)) {
        console.log("שגיאה: מהלך לא חוקי או תא תפוס. נסה שוב.");
        playTurn(); // קריאה חוזרת לאותה פונקציה
        return;
      }

      handleMove(position);
    });
  }
}

function handleMove(position) {
  updateBoard(board, position, currentPlayer);
  printBoard(board);

  if (checkWin(board)) {
    console.log(`מזל טוב! שחקן ${currentPlayer} ניצח!`);
    rl.close();
    return;
  }

  if (checkDraw(board)) {
    console.log("המשחק נגמר בתיקו!");
    rl.close();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  playTurn();
}

startGame();
