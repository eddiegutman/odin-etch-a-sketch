const container = document.querySelector('#container');

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

  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.classList.contains('col')) {
      target.classList.add('color');
    }
  });
}

createGrid();