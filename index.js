const container = document.querySelector(".container");

let input = 16;
const square = document.createElement("div");
square.classList.add("grid-element");
let gridElements;

function makeClones() {
  for (let i = 0; i < input ** 2; i++) {
    const squareClone = square.cloneNode(true);
    container.appendChild(squareClone);
  }
  gridElements = document.querySelectorAll(".grid-element");
  return gridElements;
}

function changeColour() {
  this.style.backgroundColor = "pink";
}

function promptMe() {
  input = prompt("how many squares?");
  if (input) makeNewPad();
}

function makeNewPad(gridRows, gridColumns) {
  container.textContent = "";
  gridRows = input;
  gridColumns = input;
  makeClones();
  container.style.setProperty("--colNum", gridColumns);
  container.style.setProperty("--rowNum", gridRows);
  gridElements.forEach((e) => e.addEventListener("mouseover", changeColour));
}

makeNewPad(16, 16);
