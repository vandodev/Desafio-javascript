//Initial data
let square = {
  a1: "",
  a2: "",
  a3: "",
  b1: "x",
  b2: "",
  b3: "",
  c1: "",
  c2: "o",
  c3: "",
};
let vez = "";
let warning = "";
let playng = false;

//Events
document.querySelector(".reset").addEventListener("click", reset);

//Functions

function reset() {
  warning = "";

  let random = Math.floor(Math.random() * 2);
  player = random === 0 ? "X" : "O";

  //   for (let i in square) {
  //     square[i] = "";
  //   }

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
}

//Função responsável por exibir a informação de turno do jogador e mensagens.
function renderInfo() {
  document.querySelector(".vez").innerHTML = player;
  document.querySelector(".resultado").innerHTML = warning;
}
