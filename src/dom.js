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
    shipElement.setAttribute("draggable", "true");
    shipElement.dataset.length = ship.length;
    shipElement.textContent = ship.name;
    ships.appendChild(shipElement);
  });
}

const dragnDrop = (function () {
  let ships;
  let cells;
  let validDirections;
  let currentLength;
  let currentShip;

  const enable = () => {
    ships = document.querySelectorAll(".ship");
    cells = document.querySelectorAll(".cell");
    ships.forEach((ship) => {
      ship.addEventListener("dragstart", (e) => {
        console.log("hi");
        e.dataTransfer.setData("name", ship.id);
        currentShip = ship;
        currentLength = ship.dataset.length;
        e.dataTransfer.effectAllowed = "move";
      });
    });

    cells.forEach((cell) => {
      cell.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      });

      cell.addEventListener("drop", (e) => {
        e.preventDefault();
        let type = e.dataTransfer.getData("name");
      });
    });
  };

  function directions(head,length){
    let coordinates = [{coordinate:21,direction:'right'}];
  }

  return { enable };
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
