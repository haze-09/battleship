import PvP from "./assets/pvp.png";
import PvC from "./assets/pvc.png";
import player from "./player.js";
import { coordinatesCalculator } from "./gameBoard.js";

let left = document.querySelector("#left");
let right = document.querySelector("#right");

function homePage() {
  let leftIMage = new Image();
  leftIMage.src = PvP;
  leftIMage.classList.add("startImg");
  left.appendChild(leftIMage);
  left.addEventListener("click", boardBuilder);

  let rightIMage = new Image();
  rightIMage.src = PvC;
  rightIMage.classList.add("startImg");
  right.appendChild(rightIMage);
  right.addEventListener("click", boardBuilder);
}

function appendShips(ships) {
  const shipData = [
    { id: "carrier", name: "Carrier", length: 5 },
    { id: "battleship", name: "Battleship", length: 4 },
    { id: "cruiser", name: "Cruiser", length: 3 },
    { id: "submarine", name: "Submarine", length: 3 },
    { id: "destroyer", name: "Destroyer", length: 2 },
  ];
  shipData.forEach((ship) => {
    const shipElement = document.createElement("p");
    shipElement.classList.add("ship");
    shipElement.id = ship.id;
    shipElement.setAttribute("draggable", "true");
    shipElement.dataset.length = ship.length;
    shipElement.textContent = ship.name;
    ships.appendChild(shipElement);
  });
}

const dragnDrop = (function () {
  let validCoordinates = [];
  let currentDirection;
  let currentShipLength;

  const enable = (you) => {
    let ships = document.querySelectorAll(".ship");
    let cells = document.querySelectorAll(".cell");

    ships.forEach((ship) => {
      ship.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("ship", e.target.id);
        currentShipLength = parseInt(e.target.dataset.length, 10);
        console.log(
          `Dragging ship: ${e.target.id}, Length: ${e.target.dataset.length}`
        );
      });
    });

    cells.forEach((cell) => {
      cell.addEventListener("dragover", (e) => {
        e.preventDefault();
        const head = e.target.dataset.location.split("").map(Number);
        validDirections(head, currentShipLength);
        highlightCells();
      });


      cell.addEventListener("drop", (e) => {
        e.preventDefault();
        let ship = e.dataTransfer.getData("ship");
        const head = e.target.dataset.location.split("").map(Number);
        you.placeShip(ship,head,currentDirection.direction);
        console.log(you.board);
        console.log(`Dropped ${ship} on cell ${e.target.dataset.location}`);
      });
    });
  };

  const validDirections = (head, length) => {
    let directions = [
      { coordinates: coordinatesCalculator(head, length, "right"), direction: 'right' },
      { coordinates: coordinatesCalculator(head, length, "down"), direction: 'down' },
      { coordinates: coordinatesCalculator(head, length, "left"), direction: 'left' },
      { coordinates: coordinatesCalculator(head, length, "up"), direction: 'up' },
    ];
    validCoordinates = directions.filter((value) => value.coordinates != undefined);
    currentDirection = validCoordinates[0];
  };

  const changeDirection = () => {
    let currentIndex = validCoordinates.indexOf(currentDirection);

    currentDirection =
      validCoordinates[(currentIndex + 1) % validCoordinates.length];
  };

  const highlightCells = () => {
    document
      .querySelectorAll(".cell")
      .forEach((cell) => cell.classList.remove("highlight"));

    currentDirection.coordinates.forEach(([row, col]) => {
      const cell = document.querySelector(`[data-location="${row}${col}"]`);
      if (cell) {
        cell.classList.add("highlight");
      }
    });
  };

  return {enable};
})();

function boardBuilder() {
  let player1 = player("player");
  let player2 = player("player");

  let you = player1.board;
  let opponent = player2.board;

  left.classList.remove("border");
  right.classList.remove("border");
  left.innerHTML = "";
  right.innerHTML = "";

  let yourBoardDiv = document.createElement("div");
  let ships = document.createElement("div");
  ships.classList.add("ships");
  appendShips(ships);
  left.appendChild(yourBoardDiv);
  left.appendChild(ships);

  let opponentBoardDiv = document.createElement("div");
  left.appendChild(opponentBoardDiv);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.location = `${i}${j}`;
      yourBoardDiv.classList.add("grid");
      yourBoardDiv.appendChild(cell);
    }
  }
  dragnDrop.enable(you);
  // dragnDrop.rChange();
}

export { homePage };
