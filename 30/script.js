let turn = "O";
let totalTurn = 0;
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let boardArray = new Array(9).fill("E");

function checkWinner() {
  for (let [index0, index1, index2] of winner) {
    if (
      boardArray[index0] != "E" &&
      boardArray[index0] === boardArray[index1] &&
      boardArray[index1] === boardArray[index2]
    ) {
      return 1;
    }
  }
  return 0;
}

const printer = (event) => {
  const element = event.target;
  if (boardArray[element.id] === "E") {
    totalTurn++;
    if (turn === "O") {
      element.innerHTML = "O";
      boardArray[element.id] = "O";

      if (checkWinner()) {
        document.getElementById("winningMessage").innerHTML = "Winner is O";
        board.removeEventListener("click", printer);
        return;
      }
      turn = "X";
    } else {
      element.innerHTML = "X";
      boardArray[element.id] = "X";
      if (checkWinner()) {
        document.getElementById("winningMessage").innerHTML = "Winner is X";
        board.removeEventListener("click", printer);
        return;
      }
      turn = "O";
    }

    if (totalTurn === 9) {
      document.getElementById("winningMessage").innerHTML = "Match Draw";
    }
  }
};

const board = document.querySelector(".board");
board.addEventListener("click", printer);

const restartGame = document.getElementById("restartButton");

restartGame.addEventListener("click", (event) => {
  const cell = document.getElementsByClassName("cell");
  Array.from(cell).forEach((val) => {
    val.innerHTML = "";
  });

  turn = "O";
  totalTurn = 0;
  boardArray = new Array(9).fill("E");
  document.getElementById("winningMessage").innerHTML = "";
  board.addEventListener("click", printer);
});
