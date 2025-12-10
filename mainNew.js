import input from "analiza-sync";
import boardFunc from "./board.js";
import {
  isValidMove,
  updateBoard,
  findWinningMove,
  checkWin,

} from "./logic.js";
import getComputerMove from "./ai.js";
import createPlayer from "./players.js";

export default function startGame() {
  const board = boardFunc.createBoard();
  const userName = input("please enter your name: \nname:   ", "\n");
  let isValidType = false;
  let type = input("please enter type (x or o)\ntype:   ").toLowerCase();
  while (!isValidType) {
    if (type.length > 1 || (type !== "o" && type !== "x")) {
      console.log("This type is not valid, please try again");
      type = input("please enter type (x or o)\ntype:   ");
    } else {
      isValidType = true;
    }
  }
  const p1 = createPlayer(type, userName);
  const getAiType = () => {
    if (type == "x") {
      return "o";
    } else {
      return "x";
    }
  };
  const p2 = createPlayer(getAiType());
  let currPlayer;
  console.log();
  console.log(`hey ${p1.name} welcome to game TicTacToe !\n`);
  console.log(`startGame: ${p1.name} V/S ${p2.name}`);
  console.log(`${p1.name} game to ${p1.type} & ${p2.name} game to ${p2.type}`);
  if (p1.type === "x") {
    currPlayer = p1;
  } else {
    currPlayer = p2;
  }
  while (!checkWin(board)) {
    boardFunc.printBoard(board);
    playTurn(currPlayer, board);
    if (checkWin(board)) {
      boardFunc.printBoard(board);
      console.log(`GameOver ${currPlayer.name} is won`);
    } else {
      if (currPlayer === p1) {
        currPlayer = p2;
      } else {
        currPlayer = p1;
      }
    }
  }
}
function playTurn(currPlayer, board) {
  if (currPlayer.name === "Ai") {
    console.log("ai thinks...");
    const computerMove = getComputerMove(board, currPlayer);
    if (!isValidMove(board, computerMove)) {
      console.log("Error: Slot is occupied");
      playTurn(currPlayer, board);
    } else {
      handleMove(board, computerMove, currPlayer);
    }
  } else {
    const slot = input(
      `${currPlayer.name}, please Select a slot (1-9): \nslot:   `
    );
    if (!isValidMove(board, slot)) {
      console.log("Error: Slot is occupied");
      playTurn(currPlayer, board);
    } else {
      handleMove(board, slot, currPlayer);
    }
  }
  function handleMove(board, slot, currPlayer) {
    updateBoard(board, slot, currPlayer);

    if (checkWin(board)) {
      console.log(`congratulations! ${currPlayer.name} is won`);
      return;
    }
  }
}
