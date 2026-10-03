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

const rainbowBtn = document.querySelector('#rainbow');
const progressiveBtn = document.querySelector('#progressive');

let rainbow = false;
let progressive = false;

// Changing bool variables along with the checkboxes
rainbowBtn.addEventListener('change', () => {
  if (rainbowBtn.checked) rainbow = true;
  else rainbow = false;
});
progressiveBtn.addEventListener('change', () => {
  if (progressiveBtn.checked) progressive = true;
  else progressive = false;
});

grid.addEventListener('mouseover', colorSquare);


// Clear the grid, removing all the squares
function clearGrid() {
  for (let i = 0; i < res * res; i++) {
    grid.firstChild.remove();
  }
}


/**
 * Color a square black when an event occurs
 * Takes into consideration the options rainbow and progressive in an indipendent way
 * Rainbow only changes the color (black is default)
 * Progressive make so that passing on a square increment is opacity from 0 to 1, whatever color
 */ 
function colorSquare(e) {
  // Prevent the outer grid to be the target and get totally colored
  if (e.target.className !== 'square') return;

  if (progressive && e.target.style.opacity < 1) { // Regulate opacity: note that opacity property is a string
    // Add 0.1 opacity until it reaches 1
    e.target.style.opacity = `${+e.target.style.opacity + 0.1}`;
  } else e.target.style.opacity = '1'; // Default color full black
  
  if (rainbow) { // assign a random color
    e.target.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
  }
}


// Draw squares into a Grid of fixed width, with size squares per row
function drawGrid(res) {

  // Squares are already wrapping thanks to flex wrap
  for (let i = 0; i < res * res; i++) {
    const newSquare = drawSquare();
    newSquare.style.backgroundColor = 'black';
    newSquare.style.opacity = '0';
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


// Return a positive integer in the range 0 (inclusive) and max (exclusive)
function getRandomInt(max) {

  return Math.floor(Math.random() * max);
}