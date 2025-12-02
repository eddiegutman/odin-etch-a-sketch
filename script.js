const SIZE = 16;
const container = document.querySelector('#container');

for (let i = 0; i < SIZE; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < SIZE; j++) {
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