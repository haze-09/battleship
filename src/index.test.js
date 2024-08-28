import { describe, expect, test } from "@jest/globals";
import ship from "./ship";
import gameBoard from "./gameBoard";

describe("Game Board", () => {
  test("should return true when all ships are sunk", () => {
    const playerBoard = gameBoard();

    playerBoard.placeShip("carrier", [0, 0], "right");
    playerBoard.placeShip("battleship", [2, 0], "right");
    playerBoard.placeShip("cruiser", [4, 0], "right");
    playerBoard.placeShip("submarine", [6, 0], "right");
    playerBoard.placeShip("destroyer", [8, 0], "right");

    const shipCoordinates = [
      // Carrier (5 cells)
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      // Battleship (4 cells)
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      // Cruiser (3 cells)
      [4, 0],
      [4, 1],
      [4, 2],
      // Submarine (3 cells)
      [6, 0],
      [6, 1],
      [6, 2],
      // Destroyer (2 cells)
      [8, 0],
      [8, 1],
    ];

    shipCoordinates.forEach((coordinate) => {
      playerBoard.receiveAttack(coordinate);
    });

    expect(playerBoard.lose()).toBe(true);
  });
  
  test("can display missed attacks",()=>{
    const playerBoard = gameBoard();
    playerBoard.placeShip("carrier", [0, 0], "right");
    playerBoard.receiveAttack([3,3]);
    expect(playerBoard.board[3][3].missed).toBe(true);
  })
});

describe("ship objects can", () => {
  test("take hits and sink", () => {
    let cruiser = ship(3);
    for (let i = 0; i < 3; i++) {
      cruiser.hit();
    }
    expect(cruiser.sunk).toBe(true);
  });

  test("take hits and not sink", () => {
    let cruiser = ship(3);
    for (let i = 0; i < 2; i++) {
      cruiser.hit();
    }
    expect(cruiser.sunk).toBe(false);
  });
});
