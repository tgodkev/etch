const container = document.getElementById('container');
const ten = document.getElementById('ten');
const twenty = document.getElementById('twenty');
const thirty = document.getElementById('thirty');
const resetBtn = document.getElementById('reset');

ten.addEventListener('click', function() {
    resetGrid();
    makeGrid(10, 10);
}); 

twenty.addEventListener('click', function() {
    resetGrid();
    makeGrid(20, 20);
});

thirty.addEventListener('click', function() {
    resetGrid();
    makeGrid(30, 30);
});





function makeGrid(col, row) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', col);
    for (c = 0; c < (col * row); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

container.addEventListener('mouseover', function(e) {
  if (e.target.className === 'grid-item') {
    e.target.style.backgroundColor = "black";
  }});


function resetGrid(){
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach(function(cell){
        cell.style.backgroundColor = "white";
        cell.remove(cell);
    });
}
    


   

    resetBtn.addEventListener('click', function() {
      resetGrid();
    });
