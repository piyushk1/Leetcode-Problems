/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
   
  
  let rows = Array.from({length:9},()=> new Set());
  let columns = Array.from({length:9},()=> new Set());
  let subMatrix = Array.from({length:9},()=> new Set());

  for(let i=0;i<9;i++)
  {
    for(let j=0;j<9;j++)
    {
        if(board[i][j] ==='.')
        {
            continue;
        }

        let val = board[i][j];

        let subMatrixIndex = Math.floor(i/3) * 3 + Math.floor(j/3);

        if(rows[i].has(val) || columns[j].has(val) || subMatrix[subMatrixIndex].has(val))
        {
            return false;
        }

        rows[i].add(val);
        columns[j].add(val);

        subMatrix[subMatrixIndex].add(val);
    }
    }

    return true;
  }

    
