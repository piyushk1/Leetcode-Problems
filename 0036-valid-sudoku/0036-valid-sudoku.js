/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({length:9},()=> new Set());
    let cols = Array.from({length:9},()=> new Set());

    let subMatrix = Array.from({length:9},()=> new Set());

    for(let row =0;row<9;row++)
    {
        for(let col =0;col<9;col++)
        {
            if(board[row][col] === ".")
            {
                continue;
            }

            let value = board[row][col];
            let subMatrixIndex = Math.floor(row/3)*3 + Math.floor(col/3);


          

            if(rows[row].has(value) || cols[col].has(value) || subMatrix[subMatrixIndex].has(value))
            {
                return false;
            }


            rows[row].add(value);
            cols[col].add(value);
            subMatrix[subMatrixIndex].add(value);




        }
    }

    return true;
    
};