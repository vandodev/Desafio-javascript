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
  if (e.currentTarget.querySelector(".item") === null) {
    e.preventDefault();
    e.currentTarget.classList.add("hover");
  }
}

function dragLeave(e) {
  e.currentTarget.classList.remove("hover");
}

function drop(e) {
  e.currentTarget.classList.remove("hover");

  if (e.currentTarget.querySelector(".item") === null) {
    let dragItem = document.querySelector(".item.dragging");
    e.currentTarget.appendChild(dragItem);
  }
}
