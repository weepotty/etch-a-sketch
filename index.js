const container = document.querySelector(".container");

const square = document.createElement("div");
square.classList.add("grid-element");

function clone() {
  const squareClone = square.cloneNode(true);
  container.appendChild(squareClone);
}

for (let i = 0; i < 256; i++) {
  clone();
}

const gridElements = document.querySelectorAll(".grid-element");

function changeColor() {
  this.style.backgroundColor = "pink";
}
gridElements.forEach((e) => e.addEventListener("mouseover", changeColor));
