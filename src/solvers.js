/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  debugger;
  var solution = null;
  // build unpopulated board
  var board = new Board({n: n});
  // for loop on length of n
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col ++) {
    // each iteration adds a rook at row[i], col[i]
      board.togglePiece(row, col);
      // check to see if there are any conflicts at position
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(row, col);
      } else {
        continue;
      }
    }
  }

  solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
  // two arrays, illegalRow & illegalCol (illegalMaj illegalMin for Queen?) *ADVANCED*
  // each time we place a rook we add the row and col to those arrays and skip them in future searches **
  // BASIC: skip positions we've iterated with on previous loops (set row/col of first loop
  // to current position + 1 on successful placement of rook)
  // QUEENS: if we fail to place a queen on a row, immediately iterate original loop to next position
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  debugger;
  var solution = null;
  // build unpopulated board
  var board = new Board({n: n});
  var queens = 0;
  var startingRow = 0;
  var startingCol = 0;
  var startPosCol = 0;

  // for loop on length of n
  while (queens < n) {
    // board.togglePiece(startingRow, startingCol);
    for (var row = startingRow; row < n; row++) {
      for (var col = startingCol; col < n; col++) {
      // each iteration adds a queen at row[i], col[i]
        board.togglePiece(row, col);
        queens++;
        // check to see if there are any conflicts at position
        if (board.hasAnyQueensConflicts()) {
          board.togglePiece(row, col);
          queens--;
        } 
        
        if (row !== n - 1 && col !== n - 1) {
          if (col === n - 1) {
            startingCol = 0;
            continue;
          }
        } else {
          continue;
        }
      }
    } // n = 6,  row = 5, col = 5

    if (queens < n) {
    //also rebuild board w/blank
      board = new Board({n: n});
      // queens = 0;
      // if startingCol < n, startingCol++ else startingRow++, startingCol 0
      if (startPosCol < n) {
        startPosCol++;
        // board.togglePiece(0, startPosCol);
        // queens++;
      } else if (startingRow < n) {
        startingRow++;
        startingCol = 0;
      }
    } 
  }

      // if (row !== n && col !== n) {
      //   if (col === n - 1) {
      //     startingCol = 0;
      //   }
      // }

  solution = board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
