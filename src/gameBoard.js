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
        for (let i = 0; i < length; i++) {
          coordinates.push([head[0], head[1] - i]);
        }
      }
      break;

    case "right":
      if (head[1] + length <= 9) {
        for (let i = 0; i < length; i++) {
          coordinates.push([head[0], head[1] + i]);
        }
      }
      break;

    case "up":
      if (head[0] - length >= 0) {
        for (let i = 0; i < length; i++) {
          coordinates.push([head[0] - i, head[1]]);
        }
      }
      break;

    case "down":
      if (head[0] + length <= 9) {
        for (let i = 0; i < length; i++) {
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

  const shipPlacer = (head, ship, direction) => {
    let coordinates = coordinatesCalculator(head, ship.length, direction);

    if (!coordinates) {
      throw new Error ("Invalid placement: Out of bounds.");
    }
    for (let coordinate of coordinates) {
      if (board[coordinate[0]][coordinate[1]].ship) {
        throw new Error ("Invalid placement: Overlapping ships.");
      }
    }

    for (let coordinate of coordinates) {
      board[coordinate[0]][coordinate[1]].ship = true;
      board[coordinate[0]][coordinate[1]].shipObj = ship;
    }

    noOfShips--;
  };

  const placeShip = (shipType, head, direction) => {
    if (noOfShips <= 0) {
      return "out of ships";
    }
    switch (shipType) {
      case "carrier":
        shipPlacer(head, carrier, direction);
        break;

      case "battleship":
        shipPlacer(head, battleship, direction);
        break;

      case "cruiser":
        shipPlacer(head, cruiser, direction);
        break;

      case "submarine":
        shipPlacer(head, submarine, direction);
        break;

      case "destroyer":
        shipPlacer(head, destroyer, direction);
        break;

      default:
        throw new Error ("invalid ship name");
    }
  };

  let sunkCounter = 0;

  const receiveAttack = (coordinate) => {
    let cell = board[coordinate[0]][coordinate[1]];

    if (!cell.missed && !cell.hit) {
      if (!cell.ship) {
        cell.missed = true;
      } else {
        cell.hit = true;
        cell.shipObj.hit();
        if (cell.shipObj.sunk) {
          sunkCounter++;
        }
      }
    }
  };

  const lose = () => {
    return sunkCounter >= 5;
  };

  return {
    get board() {
      return board;
    },
    placeShip,
    receiveAttack,
    lose,
  };
}

export {gameBoard,coordinatesCalculator};