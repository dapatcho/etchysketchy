document.addEventListener("DOMContentLoaded", function () {
  gridMaker(16);
  permaHover();
});

// create a for loop that creates i*i divs

const containerSize = 800;

const gridContainer = document.getElementById("grid-container");
const gridMaker = (num) => {
  gridContainer.innerHTML = "";

  const gridPixelHeight = containerSize / num;

  for (let i = 0; i < num * num; i++) {
    const gridPixel = document.createElement("div");
    gridPixel.classList.add("grid-pixel");
    gridPixel.style.width = `${gridPixelHeight}px`;
    gridPixel.style.height = `${gridPixelHeight}px`;
    gridContainer.appendChild(gridPixel);
  }
};

const permaHover = () => {
  const gridPixel = document.querySelectorAll(".grid-pixel");
  gridPixel.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.classList.add("hovered");
    });
  });
};

const promptNewGrid = () => {
  let size = prompt("Define how many pixels high the grid will be");
  size = parseInt(size);

  if (isNaN(size) || size <= 0 || size >= 100) {
    alert("Please provide a valid positive number less than 100");
  } else {
    newGrid(size);
  }
};

const newGrid = (num) => {
  gridMaker(num);
  permaHover();
};
