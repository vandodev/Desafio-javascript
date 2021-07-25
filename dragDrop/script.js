//EVENTS
document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

document.querySelectorAll(".area").forEach((area) => {
  area.addEventListener("dragover", dragOver);
  area.addEventListener("dragleave", dragLeave);
  area.addEventListener("drop", drop);
});

//FUNCTIONS ITEM
function dragStart(e) {
  e.currentTarget.classList.add("dragging");
}

function dragEnd(e) {
  e.currentTarget.classList.remove("dragging");
}

//FUNCTIONS AREA
function dragOver(e) {
  e.preventDefault();
  //console.log("Passou por cima");
}

function dragLeave(e) {
  //console.log("Saiu da área dropavel");
}

function drop(e) {
  console.log("Soltou");
}
