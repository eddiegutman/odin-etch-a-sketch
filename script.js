const MIN_SIZE = 1;
const MAX_SIZE = 100;

const container = document.querySelector('#container');
const sizeBtn = document.querySelector('#size-btn')

document.addEventListener('click', (e) => {
  const target = e.target;
  if (target.id === 'size-btn') {
    changeGridSize();
  }
});

container.addEventListener('mouseover', (e) => {
  const target = e.target;
  if (target.classList.contains('col')) {
    gridCellHover(target);
  }
});

function getRandomRgbColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function createGrid(size = 16) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < size; j++) {
      const col = document.createElement('div');
      col.classList.add('col');
      row.appendChild(col);
    }
    container?.appendChild(row);
  }
}

function changeGridSize() {
  let input;
  do {
    input = prompt('Enter the number of squares per side for the new grid (max 100)');
  } while (!(Number.isInteger(+input) && +input >= MIN_SIZE && +input <= MAX_SIZE));
  container?.replaceChildren();
  createGrid(+input);
}

function gridCellHover(target) {
  if (!target.classList.contains('color')) {
    target.classList.add('color');
    target.style.backgroundColor = getRandomRgbColor();
    target.style.opacity = 0.1;
  } else {
    const opacity = target.style.opacity;
    target.style.opacity = Math.min(+opacity + 0.1, 1);
  }
}

createGrid();