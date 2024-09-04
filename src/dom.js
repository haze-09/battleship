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
  let placedCoordinates = [];
  let currentDirection;
  let currentLength;
  let currentShip;
  let noOfShips = 5;
  let head;
  let player1Setup = false;
  let confirmClickHandler;
  let rotateClickHandler;
  let cancelClickHandler;

  const enable = (board) => {
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
    let length = parseInt(currentLength);
    directions(length);
    if (validCoordinates && validCoordinates.length > 0) {
      placeCells(validCoordinates[0].coordinates, "highlight");
    }
  };

  const drop = (e, board) => {
    e.preventDefault();
    ships.forEach((ship) => ship.setAttribute("draggable", "false"));
    enableButtons(board);
  };

  const enableButtons = (board) => {
    let buttonDiv = document.querySelector("#confirm");
    buttonDiv.classList.remove("invisible");

    let confirmButton = document.querySelector(".green");
    let rotateButton = document.querySelector(".blue");
    let cancelButton = document.querySelector(".red");

    confirmClickHandler = () => {
      confirmPlacement(board);
    };

    rotateClickHandler = () => {
      rotate();
    };

    cancelClickHandler = () => {
      cancel();
    };

    confirmButton.addEventListener("click", confirmClickHandler, {
      once: true,
    });
    rotateButton.addEventListener("click", rotateClickHandler);
    cancelButton.addEventListener("click", cancelClickHandler);
  };

  const confirmPlacement = (board) => {
    noOfShips--;
    clearHighlight();
    placeCells(currentDirection.coordinates, "placed");
    let buttonDiv = document.querySelector("#confirm");
    buttonDiv.classList.add("invisible");
    placedCoordinates.push(...currentDirection.coordinates);
    board.placeShip(currentShip.id, head, currentDirection.direction);
    currentShip.remove();
    ships.forEach((ship) => ship.setAttribute("draggable", "true"));
    removeListeners();

    if (noOfShips <= 0) {
      if (player1Setup === false) {
        noOfShips = 5;
        player1Setup = true;
        placedCoordinates = [];
        boardBuilder("Player 2", player2.board);
      } else {
        gameStart();
      }
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
    clearHighlight();
    let buttonDiv = document.querySelector("#confirm");
    buttonDiv.classList.add("invisible");
    ships.forEach((ship) => ship.setAttribute("draggable", "true"));
    removeListeners();
  };

  const removeListeners = () => {
    document
      .querySelector(".green")
      .removeEventListener("click", confirmClickHandler);
    document
      .querySelector(".blue")
      .removeEventListener("click", rotateClickHandler);
    document
      .querySelector(".red")
      .removeEventListener("click", cancelClickHandler);
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

    const hasOverlap = (coords) => {
      return coords.some((coord) =>
        placedCoordinates.some(
          (placed) => placed[0] === coord[0] && placed[1] === coord[1]
        )
      );
    };

    validCoordinates = directions.filter(
      (value) =>
        value.coordinates != undefined && !hasOverlap(value.coordinates)
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
  playerName.classList.add("playerName");
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
  dragnDrop.enable(board);
}

function playArea(
  player1Board,
  player2Board,
  currentPlayer = "Player 1",
  opponent = "Player 2"
) {
  left.innerHTML = "";
  right.innerHTML = "";

  let yourBoardDiv = document.createElement("div");
  left.appendChild(yourBoardDiv);

  let currentPlayerName = document.createElement("p");
  currentPlayerName.textContent = currentPlayer;
  currentPlayerName.classList.add('playerNameBottom')
  left.appendChild(currentPlayerName);

  for (let [rowIndex, row] of player1Board.board.entries()) {
    for (let [colIndex, item] of row.entries()) {
      let cell = document.createElement("div");
      cell.dataset.location = `${rowIndex}${colIndex}`;
      cell.classList.add("cell");
      if (item.missed === true) {
        cell.textContent = "o";
      }
      if (item.ship === true) {
        cell.classList.add("placed");
      }
      if (item.hit === true) {
        cell.textContent = "X";
        cell.classList.add("hit");
      }
      yourBoardDiv.classList.add("grid");
      yourBoardDiv.appendChild(cell);
    }
  }

  let opponentBoardDiv = document.createElement("div");
  right.appendChild(opponentBoardDiv);

  let opponentName = document.createElement("p");
  opponentName.textContent = opponent;
  opponentName.classList.add('playerNameBottom')
  right.appendChild(opponentName);

  for (let [rowIndex, row] of player2Board.board.entries()) {
    for (let [colIndex, item] of row.entries()) {
      let cell = document.createElement("div");
      cell.dataset.location = `${rowIndex}${colIndex}`;
      cell.classList.add("cell");
      if (item.missed === true) {
        cell.textContent = "o";
      }
      if (item.hit === true) {
        cell.textContent = "X";
        cell.classList.add("hit");
      }

      cell.addEventListener("click", (e) => {
        let coordinate = e.target.dataset.location.split("").map(Number);
        player2Board.receiveAttack(coordinate);
        console.log(player2Board.lose());
        if (player2Board.lose() === true) {
          left.innerHTML = "";
          right.innerHTML = "";

          let winMessage = `${currentPlayer} has won!`;
          let winner = document.createElement('p');
          winner.textContent = winMessage;
          winner.classList.add('winner')

          let title = document.querySelector("#title");

          title.after(winner);
        } else {
          playArea(player2Board, player1Board, opponent, currentPlayer);
        }
      });

      opponentBoardDiv.classList.add("grid");
      opponentBoardDiv.appendChild(cell);
    }
  }
}

export { homePage, boardBuilder, playArea };
