const container = document.getElementById('container');

function makeGrid(col, row) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', col);
    for (c = 0; c < (col * row); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

  makeGrid(20, 20);

  container.addEventListener('mouseover', function(e) {
    if (e.target.className === 'grid-item') {
      e.target.style.backgroundColor = 'black';
    }});

    function resetGrid() {
      let gridItems = document.querySelectorAll('.grid-item');
      for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = 'white';
      }
    }

    const resetBtn = document.getElementById('reset');

    resetBtn.addEventListener('click', function() {
      resetGrid();
    });