//Initial data
let square = {
  a1: "",
  a2: "",
  a3: "",
  b1: "",
  b2: "",
  b3: "",
  c1: "",
  c2: "",
  c3: "",
};
let vez = "";
let warning = "";
let playng = false;

//Events
document.querySelector(".reset").addEventListener("click", reset);
document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", itemClick);
});

//Functions

function reset() {
  warning = "";

  let random = Math.floor(Math.random() * 2);
  player = random === 0 ? "X" : "O";

  for (let i in square) {
    square[i] = "";
  }

  playing = true;
  renderSquare();
  renderInfo();
}

//Função responsável por mostrar os valores no tabuleiro.
function renderSquare() {
  for (let i in square) {
    let item = document.querySelector(`div[data-item=${i}]`);
    item.innerHTML = square[i];
  }
  checkGame();
}

//Função responsável por exibir a informação de turno do jogador e mensagens.
function renderInfo() {
  document.querySelector(".vez").innerHTML = player;
  document.querySelector(".resultado").innerHTML = warning;
}

//Função responsável por receber o clique do jogador e acionar a função renderSquare.
function itemClick(event) {
  let item = event.target.getAttribute("data-item");
  if (playing && square[item] === "") {
    square[item] = player;
    renderSquare();
    togglePlayer();
  }
}

//Função responsável por fazer a troca de turno dos jogadores, acionada na função itemClick.
function togglePlayer() {
  player = player === "X" ? "O" : "X";
  renderInfo();
}

//Função responsável por validar o status do jogo (vitória, empate) a cada clique feito pelo jogador.
function checkGame() {
  if (checkWinnerFor("X")) {
    warning = 'O jogador "X" venceu';
    playing = false;
  } else if (checkWinnerFor("O")) {
    warning = 'O jogador "O" venceu';
    playing = false;
  }
}

//Função responsável pela lógica e condições de vitória do jogo da velha.
function checkWinnerFor(player) {
  let pos = [
    "a1,a2,a3",
    "b1,b2,b3",
    "c1,c2,c3",

    "a1,b1,c1",
    "a2,b2,c2",
    "a3,b3,C3",

    "a1,b2,c3",
    "a3,b2,c1",
  ];

  for (let w in pos) {
    let pArray = pos[w].split(",");
    let hasWon = pArray.every((option) => square[option] === player);
    if (hasWon) {
      return true;
    }
  }

  return false;
}
