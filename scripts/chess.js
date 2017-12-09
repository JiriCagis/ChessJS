
function onLoad() {
    recalculateBoardSize();
}
function onResize() {
    recalculateBoardSize();
}

function recalculateBoardSize() {
    const possibleSpace = Math.min(window.innerHeight, window.innerWidth);
    const boardSize = possibleSpace * 0.94;
    const borderSize = possibleSpace * 0.03 / 2;
    const cellSize = boardSize / 8.0 * 0.91;
    const marginTopSize = (window.innerHeight - boardSize)/2 * 0.95;

    const gameBoard = document.getElementById("game_board_id");
    const cells = document.getElementsByTagName('td');
    
    gameBoard.style.marginTop = marginTopSize + "px"
    gameBoard.style.borderWidth = borderSize + "px";
    let cellsLength = cells.length;
    for (let i = 0; i < cellsLength; i++) {
        cells[i].style.fontSize = cellSize + "px";
    }
}