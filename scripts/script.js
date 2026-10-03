drawGrid(50);

const grid = document.querySelector('.grid');
grid.addEventListener('mouseover', colorBlack);

// Problem: when the mouse goes out and returns back of the grid the background color of the grid is set to black
// Also if the mouse enters from up or down the problems fires right away (but entering left and right not)
function colorBlack(e) {
  if (e.target.className !== 'square') return;
  
  e.target.style.backgroundColor = 'black';
}

// Draw squares into a Grid of fixed WIDTH, with size squares per row
function drawGrid(size) {
  
  const WIDTH = 500;

  const grid = document.querySelector('.grid');

  // Squares are already wrapping thanks to flex wrap
  for (let i = 0; i < size * size; i++) {
    const newSquare = drawSquare();
    grid.appendChild(newSquare);
  }
  

  // Draw a square and return its reference
  function drawSquare() {
    const squareWidth = `${WIDTH / size}px`;
    const square = document.createElement('div');

    square.style.width = squareWidth;
    square.style.height = squareWidth;

    square.classList.add('square');
    return square;
  }
}