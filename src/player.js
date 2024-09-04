import { gameBoard } from "./gameBoard.js";

function player(type) {
  let board = gameBoard();
  return { type, board };
}

let player1 = player("player");
let player2 = player("player");
let computer = player("computer");


function getRandomCoordinate() {
  return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}

function getRandomDirection() {
  const directions = ["left", "right", "up", "down"];
  return directions[Math.floor(Math.random() * directions.length)];
}

function placeAllShips(gameBoard) {
  const ships = [
    { type: "Carrier", length: 5 },
    { type: "Battleship", length: 4 },
    { type: "Cruiser", length: 3 },
    { type: "Submarine", length: 3 },
    { type: "Destroyer", length: 2 },
  ];

  for (const ship of ships) {
    let placed = false;
    while (!placed) {
      const head = getRandomCoordinate();
      const direction = getRandomDirection();
      try {
        computer.board.placeShip(ship.type, head, direction);
        placed = true;
      } catch (error) {
        console.log(`Failed to place ${ship.type}. Trying a new position.`);
      }
    }
  }
}




export { player1, player2, computer, placeAllShips ,getRandomCoordinate};
