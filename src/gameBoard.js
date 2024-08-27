import ship from "./ship.js";

function cell() {
  let missed = false;
  let ship = false;
  let hit = false;
  let shipObj;

  return { missed, hit, ship, shipObj };
}

function coordinatesCalculator(head, length, direction) {
  let coordinates = [];

  switch (direction) {
    case "left":
      if (head[1] - length >= 0) {
        for (let i = 0; i <= length; i++) {
          coordinates.push([head[0], head[1] - i]);
        }
      }
      break;
    case "right":
      if (head[1] + length <= 9) {
        for (let i = 0; i <= length; i++) {
          coordinates.push([head[0], head[1] + i]);
        }
      }
      break;
    case "up":
      if (head[0] - length >= 0) {
        for (let i = 0; i <= length; i++) {
          coordinates.push([head[0] - i, head[1]]);
        }
      }
      break;
    case "down":
      if (head[0] + length <= 9) {
        for (let i = 0; i <= length; i++) {
          coordinates.push([head[0] + i, head[1]]);
        }
      }
      break;
    default:
      break;
  }

  return coordinates.length ? coordinates : undefined;
}

function gameBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      let newCell = cell();
      board[i].push(newCell);
    }
  }
  let carrier = ship(5);
  let battleship = ship(4);
  let cruiser = ship(3);
  let submarine = ship(3);
  let destroyer = ship(2);
  let noOfShips = 5;

  const placeShip = (shipType, head, direction) => {
    if (noOfShips <= 0) {
      return "out of ships";
    }
    switch (shipType) {
      case "carrier": {
        let coordinates = coordinatesCalculator(head, 5, direction);
        for (let coordinate of coordinates) {
          board[coordinate[0]][coordinate[1]].ship = true;
          board[coordinate[0]][coordinate[1]].shipObj = carrier;
          noOfShips--;
        }
        break;
      }
      case "battleship":{
        let coordinates = coordinatesCalculator(head, 4, direction);
        for (let coordinate of coordinates) {
          board[coordinate[0]][coordinate[1]].ship = true;
          board[coordinate[0]][coordinate[1]].shipObj = battleship;
          noOfShips--;
        }
        break;
      }
      case "cruiser":{
        let coordinates = coordinatesCalculator(head, 3, direction);
        for (let coordinate of coordinates) {
          board[coordinate[0]][coordinate[1]].ship = true;
          board[coordinate[0]][coordinate[1]].shipObj = cruiser;
          noOfShips--;
        }
        break;
      }

      case "submarine":{
        let coordinates = coordinatesCalculator(head, 3, direction);
        for (let coordinate of coordinates) {
          board[coordinate[0]][coordinate[1]].ship = true;
          board[coordinate[0]][coordinate[1]].shipObj = submarine;
          noOfShips--;
        }
        break;
      }
      case "destroyer":{
        let coordinates = coordinatesCalculator(head, 2, direction);
        for (let coordinate of coordinates) {
          board[coordinate[0]][coordinate[1]].ship = true;
          board[coordinate[0]][coordinate[1]].shipObj = submarine;
          noOfShips--;
        }
        break;
      }

      default:
        break;
    }
  };

  return {
    get board() {
      return board;
    },
    placeShip,
  };
}

let player1Board = gameBoard();

player1Board.placeShip("carrier", [0, 1], "right");

console.log(player1Board.board);

export { gameBoard };
