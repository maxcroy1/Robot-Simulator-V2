document.addEventListener("DOMContentLoaded", function(){
  createGrid();
  renderBot(currentPosition);

  // ADD CODE HERE!
  const moveList = document.getElementById('moves-container');
  const moveButton = document.getElementById('move-button');
  let userMoves = new Array;

  function executeMove() {
    let direction = userMoves.shift();
    move(direction);
    moveList.firstChild.remove();
  };

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
      userMoves.push(e.key.replace("Arrow","").toLowerCase());
      let newMove = document.createElement('li');
      newMove.innerText = (userMoves[userMoves.length -1]).toUpperCase();
      moveList.append(newMove);
    };
  });

  moveButton.addEventListener("click", function(e) {
    executeMove();
  });
});
