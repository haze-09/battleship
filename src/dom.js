import PvP from "./assets/pvp.png";
import PvC from "./assets/pvc.png";
import { player2 } from "./player.js";
import { coordinatesCalculator } from "./gameBoard.js";
import { boardSetup, gameStart } from "./gameLogic.js";

let left = document.querySelector("#left");
let right = document.querySelector("#right");

function homePage() {
  let left = document.querySelector("#left");
  let right = document.querySelector("#right");

  left.innerHTML = "";
  right.innerHTML = "";

  let leftImage = new Image();
  leftImage.src = PvP;
  leftImage.classList.add("startImg");
  left.appendChild(leftImage);

  let rightImage = new Image();
  rightImage.src = PvC;
  rightImage.classList.add("startImg");
  right.appendChild(rightImage);

  function leftClickHandler() {
    removeHomePageListeners();
    boardSetup("pvp");
  }

  function rightClickHandler() {
    removeHomePageListeners();
    boardSetup("pvc");
  }

  left.addEventListener("click", leftClickHandler);
  right.addEventListener("click", rightClickHandler);

  homePage.listeners = {
    left: { element: left, listener: leftClickHandler },
    right: { element: right, listener: rightClickHandler },
  };
}

function removeHomePageListeners() {
  if (homePage.listeners) {
    homePage.listeners.left.element.removeEventListener(
      "click",
      homePage.listeners.left.listener
    );
    homePage.listeners.right.element.removeEventListener(
      "click",
      homePage.listeners.right.listener
    );
    homePage.listeners = null;
  }
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
  let currentDirection;
  let currentLength;
  let currentShip;
  let noOfShips = 5;
  let head;
  let player1Setup = false;

  const enable = (board) => {
    console.log(board);
    ships = document.querySelectorAll(".ship");
    cells = document.querySelectorAll(".cell");

    ships.forEach((ship) => {
      ship.setAttribute("draggable", "true");
      ship.addEventListener("dragstart", dragStart);
      ship.addEventListener("dragend", dragEnd);
    });

    cells.forEach((cell) => {
      cell.addEventListener("dragenter", dragEnter);
      cell.addEventListener("dragover", dragOver);
      cell.addEventListener("drop", (e) => {
        drop(e, board);
      });
    });
  };

  const dragStart = (e) => {
    console.log("Drag started");
    e.dataTransfer.setData("name", e.target.id);
    currentShip = e.target;
    currentLength = currentShip.dataset.length;
    e.dataTransfer.effectAllowed = "move";
    currentShip.style.opacity = "0";

    const img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const dragEnd = () => {
    currentShip.style.opacity = "1";
  };

  const dragEnter = (e) => {
    e.preventDefault();
    clearHighlight();
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    head = e.target.dataset.location.split("").map(Number);
    console.log("dragOver", head);
    let length = parseInt(currentLength);
    directions(length);
    if (validCoordinates && validCoordinates.length > 0) {
      placeCells(validCoordinates[0].coordinates, "highlight");
    }
  };

  const drop = (e, board) => {
    e.preventDefault();
    console.log("drop", head);
    console.log(board);
    ships.forEach((ship) => ship.setAttribute("draggable", "false"));
    enableButtons(board);
  };

  const enableButtons = (board) => {
    console.log(board);
    let buttonDiv = document.querySelector("#confirm");
    buttonDiv.classList.remove("invisible");

    let confirmButton = document.querySelector(".green");
    confirmButton.addEventListener(
      "click",
      () => {
        confirmPlacement(board);
      },
      { once: true }
    );

    let rotateButton = document.querySelector(".blue");
    rotateButton.addEventListener("click", rotate,{ once: true });

    let cancelButton = document.querySelector(".red");
    cancelButton.addEventListener("click", cancel, { once: true });
  };

  const confirmPlacement = (board) => {
    if (noOfShips <= 0) {
      if (player1Setup === false) {
        noOfShips = 5;
        player1Setup = true;
        boardBuilder("Player 2", player2.board);
      } else {
        gameStart();
      }
    } else {
      noOfShips--;
      clearHighlight();
      placeCells(currentDirection.coordinates, "placed");
      console.log("confirmPlacement", head);
      console.log(board);
      board.placeShip(currentShip.id, head, currentDirection.direction);
      currentShip.remove();
      ships.forEach((ship) => ship.setAttribute("draggable", "true"));

      // let confirmButton = document.querySelector(".green");
      // confirmButton.setAttribute("disabled", true);
    }
  };

  const rotate = () => {
    let currentDirectionIndex = validCoordinates.findIndex(
      (coord) => coord.direction === currentDirection.direction
    );

    currentDirectionIndex =
      (currentDirectionIndex + 1) % validCoordinates.length;
    currentDirection = validCoordinates[currentDirectionIndex];

    clearHighlight();
    placeCells(currentDirection.coordinates, "highlight");
  };

  const cancel = () => {
    console.log("meow");
  };

  const directions = (length) => {
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

    currentDirection = validCoordinates[0];
  };

  const placeCells = (coordinates, chosenClass) => {
    coordinates.forEach((coordinate) => {
      let cell = document.querySelector(
        `.cell[data-location='${coordinate[0]}${coordinate[1]}']`
      );
      if (cell) {
        cell.classList.add(chosenClass);
      }
    });
  };

  const clearHighlight = () => {
    cells.forEach((cell) => cell.classList.remove("highlight"));
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
  let confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.classList.add("green");
  div.appendChild(confirmButton);

  let rotateButton = document.createElement("button");
  rotateButton.textContent = "Rotate";
  rotateButton.classList.add("blue");
  div.appendChild(rotateButton);

  let cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("red");
  div.appendChild(cancelButton);
}

function boardBuilder(player, board) {
  left.classList.remove("border");
  right.classList.remove("border");
  left.innerHTML = "";
  right.innerHTML = "";

  let playerName = document.createElement("p");
  playerName.textContent = player;
  left.appendChild(playerName);

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
  console.log(board);
  dragnDrop.enable(board);
}

export { homePage, boardBuilder };
