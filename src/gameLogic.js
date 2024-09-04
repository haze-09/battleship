import { player1, player2, computer, placeAllShips } from "./player.js";
import { boardBuilder, playArea, playAreaPvc } from "./dom.js";

function boardSetup(type) {
  switch (type) {
    case "pvp":
      boardBuilder("Player 1", player1.board);
      break;

    case "pvc":
      boardBuilder("Player 1", player1.board, "pvc");
      break;

    default:
      break;
  }
}

function gameStart() {
  playArea(player1.board, player2.board);
}

function gameStartPvc() {
  placeAllShips();
  playAreaPvc(player1.board, computer.board);
}

export { boardSetup, gameStart, gameStartPvc };
