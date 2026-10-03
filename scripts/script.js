drawGrid(50);

// TODO: add comments
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