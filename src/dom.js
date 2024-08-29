import PvP from "./assets/pvp.png";
import PvC from "./assets/pvc.png";
import player from "./player.js";

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
  ships.classList.add('ships')
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
}

export { homePage };
