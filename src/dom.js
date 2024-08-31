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
    { name: "Carrier", length: 5 },
    { name: "Battleship", length: 4 },
    { name: "Cruiser", length: 3 },
    { name: "Submarine", length: 3 },
    { name: "Destroyer", length: 2 },
  ];
  shipData.forEach((ship) => {
    const shipElement = document.createElement("p");
    shipElement.classList.add("ship");
    shipElement.id = ship.name;
    shipElement.dataset.length = ship.length;
    shipElement.textContent = ship.name;
    ships.appendChild(shipElement);
  });
}

const dragnDrop = (function () {
  let ships;
  let cells;
  let validCoordinates;
  let currentLength;
  let currentShip;

  const enable = () => {
    ships = document.querySelectorAll(".ship");
    cells = document.querySelectorAll(".cell");

    ships.forEach((ship) => {
      ship.setAttribute("draggable", "true");
      ship.addEventListener("dragstart", (e) => {
        console.log("hi");
        e.dataTransfer.setData("name", ship.id);
        currentShip = ship;
        currentLength = ship.dataset.length;
        e.dataTransfer.effectAllowed = "move";
        ship.style.opacity = "0";

        const img = new Image();
        img.src =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        e.dataTransfer.setDragImage(img, 0, 0);
      });

      ship.addEventListener("dragend", () => {
        currentShip.style.opacity = "1";
      });
    });

    cells.forEach((cell) => {
      cell.addEventListener("dragenter", (e) => {
        clearHighlight();
      });

      cell.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";

        let head = e.target.dataset.location.split("").map(Number);
        let length = parseInt(currentLength);
        directions(head, length);
        placeCells(validCoordinates[0].coordinates, "highlight");
      });

      cell.addEventListener("drop", (e) => {
        e.preventDefault();
        ships.forEach((ship) => ship.setAttribute("draggable", "false"));
        let buttonDiv = document.querySelector("#confirm");
        buttonDiv.classList.remove("invisible");
        let head = e.target.dataset.location.split("").map(Number);
        let type = e.dataTransfer.getData("name");

        let confirm = document.querySelector(".green");
        confirm.addEventListener("click", () => {
          clearHighlight();
          console.log(validCoordinates[0].coordinates);
          placeCells(validCoordinates[0].coordinates, "placed");
        });
      });
    });
  };

  const directions = (head, length) => {
    let directions = [
      {
        coordinates: coordinatesCalculator(head, length, "right"),
        direction: "right",
      },
      {
        coordinates: coordinatesCalculator(head, length, "down"),
        direction: "down",
      },
      {
        coordinates: coordinatesCalculator(head, length, "left"),
        direction: "left",
      },
      {
        coordinates: coordinatesCalculator(head, length, "up"),
        direction: "up",
      },
    ];

    validCoordinates = directions.filter(
      (value) => value.coordinates != undefined
    );
  };

  const placeCells = (coordinates, chosenClass) => {
    for (let coordinate of coordinates) {
      document
        .querySelector(
          `.cell[data-location = '${coordinate[0]}${coordinate[1]}']`
        )
        .classList.add(chosenClass);
    }
  };

  const clearHighlight = () => {
    cells.forEach((cell) => cell.classList.remove("highlight"));
  };

  const buttonMagic = () => {
    let confirm = document.querySelector(".green");
    confirm.addEventListener("click", () => {
      dragnDrop.clearHighlight();
      console.log(dragnDrop.validCoordinates[0].coordinates);
      dragnDrop.placeCells(dragnDrop.validCoordinates[0].coordinates, "placed");
    });
  };

  return {
    enable,
    clearHighlight,
    placeCells,
    get validCoordinates() {
      return validCoordinates;
    },
  };
})();

function confirm(div) {
  let confirm = document.createElement("button");
  confirm.textContent = "confirm";
  confirm.classList.add("green");
  div.appendChild(confirm);

  let rotate = document.createElement("button");
  rotate.textContent = "rotate";
  rotate.classList.add("blue");
  div.appendChild(rotate);

  let cancel = document.createElement("button");
  cancel.textContent = "cancel";
  cancel.classList.add("red");
  div.appendChild(cancel);
}

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
  right.appendChild(ships);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.location = `${i}${j}`;
      yourBoardDiv.classList.add("grid");
      yourBoardDiv.appendChild(cell);
    }
  }
  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("invisible");
  buttonDiv.id = "confirm";
  confirm(buttonDiv);
  left.appendChild(buttonDiv);
  dragnDrop.enable();
}

export { homePage };
