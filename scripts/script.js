const GRID_WIDTH = 500;

const grid = document.querySelector('.grid');
grid.style.width = `${GRID_WIDTH}px`;
grid.style.height = `${GRID_WIDTH}px`;

let res = 16; // Default resolution

drawGrid(res);

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Avoid refreshing page
  clearGrid();
  drawGrid(res);
});

const resizeBtn = document.querySelector('#resize-btn');
resizeBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Avoid refreshing page

  const resInput = document.querySelector('#res');
  const newRes = resInput.value;

  if (newRes < 16 || newRes > 100) return;

  clearGrid();
  res = newRes;
  drawGrid(res);
});

grid.addEventListener('mouseover', colorBlack);


// Clear the grid, removing all the squares
function clearGrid() {
  for (let i = 0; i < res * res; i++) {
    grid.firstChild.remove();
  }
}


// Color a square black when an event occurs
function colorBlack(e) {
  // Prevent the outer grid to be the target and get totally colored
  if (e.target.className !== 'square') return;

  e.target.style.backgroundColor = 'black';
}


// Draw squares into a Grid of fixed width, with size squares per row
function drawGrid(res) {

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