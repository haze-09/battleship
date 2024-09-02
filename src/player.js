import { gameBoard } from "./gameBoard.js";

function player(type) {
  let board = gameBoard();
  return { type, board };
}

let player1 = player("player");
let player2 = player("player");
let computer = player("computer");

export { player1, player2, computer };
