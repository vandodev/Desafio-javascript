//iNITIAL DATA
let currentColor = "black";

let screen = document.querySelector("#tela");
let ctx = screen.getContext("2d");

//eVENTS
document.querySelectorAll(".colorArea .color").forEach((item) => {
  item.addEventListener("click", colorClickEvent);
});

screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);

//fUNCTIONS
function colorClickEvent(e) {
  let color = e.target.getAttribute("data-color");
  console.log("Cor clicada", color);
}

function mouseDownEvent() {
  console.log("Clicou");
}

function mouseMoveEvent() {
  console.log("Moveu");
}

function mouseUpEvent() {
  console.log("Soltou");
}
