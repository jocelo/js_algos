// assuming we know the last cell filled

var tictactwin = function(grid, lastCell) {
  var checkIfWon = function(value) {
    if (value === 3) {
      return 'Red won';
    } else if (value === 6) {
      return 'Blue won'
    }
    return false;
  }
  // checking row
  let whoWon = 0,
    finish = false;
  for (let col=0 ; col<3 ; col++) {
    whoWon += grid[lastCell[0]][col];
  }

  finish = checkIfWon(whoWon);

  if (finish) {
    return finish;
  }

  // checking column
  whoWon = 0;
  for (let row=0 ; row<3 ; row++) {
    whoWon += grid[row][lastCell[1]];
  }
  finish = checkIfWon(whoWon);

  if (finish) {
    return finish;
  }

  // checking diagonal
  finish = checkIfWon(grid[0][0] + grid[1][1] + grid[2][2]);
  if (finish) {
    return finish;
  }

  finish = checkIfWon(grid[0][2] + grid[1][1] + grid[2][0]);
  if (finish) {
    return finish;
  }

  return 'Nobody won';
}

var grid = [
  [2,1,2],
  [1,1,0],
  [2,1,2]
];

console.log( tictactwin(grid, [0,0]) );