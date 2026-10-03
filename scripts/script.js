const GRID_WIDTH = 500;

const grid = document.querySelector('.grid');
grid.style.width = `${GRID_WIDTH}px`;
grid.style.height = `${GRID_WIDTH}px`;

let res = 16; // Default resolution

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearGrid);


drawGrid();

grid.addEventListener('mouseover', colorBlack);

// Clear the grid, removing all the squares and putting new ones
function clearGrid(e) {
  e.preventDefault();
  for (let i = 0; i < res * res; i++) {
    grid.firstChild.remove();
  }

  drawGrid();
}


// Color a square black when an event occurs
function colorBlack(e) {
  // Prevent the outer grid to be the target and get totally colored
  if (e.target.className !== 'square') return;

  e.target.style.backgroundColor = 'black';
}


// Draw squares into a Grid of fixed width, with size squares per row
function drawGrid() {

  // Squares are already wrapping thanks to flex wrap
  for (let i = 0; i < res * res; i++) {
    const newSquare = drawSquare();
    grid.appendChild(newSquare);
  }
  

  // Draw a square and return its reference
  function drawSquare() {
    const squareWidth = `${GRID_WIDTH / res}px`;
    const square = document.createElement('div');

    square.style.width = squareWidth;
    square.style.height = squareWidth;

    square.classList.add('square');
    return square;
  }
}