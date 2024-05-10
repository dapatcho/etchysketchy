// create a for loop that creates 16 divs

const gridContainer = document.getElementById("grid-container");

const gridMaker = (num) => {
  for (let i = 0; i < num * num; i++) {
    const gridPixel = document.createElement("div");
    gridPixel.classList.add("grid-pixel");
    gridContainer.appendChild(gridPixel);
  }
};
