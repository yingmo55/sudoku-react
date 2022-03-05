const sudokuGenerator = {
    rows: 'ABCDEFGHI',
    columns: '123456789',

    initializeGrid() {
        const possibleAnswer = Array.from(this.columns);
        const gridCoord = []; //all grid coordination
        const grid = {}; // the grid and possible answers
    
        for (let i=0; i < this.rows.length; i++){ // rows
            for (let x=0; x < this.columns.length; x++){ // columns
                const coord = this.rows[i] + this.columns[x];
                gridCoord.push(coord);
                grid[coord] = possibleAnswer;
            }
        }
        return gridCoord;
    },

    updateGrid (coord) {
        const possibleAnswer = Array.from(this.columns);
        let sameRow = possibleAnswer.map(element => coord[0] + element);
        sameRow = sameRow.filter(element => element !== coord);
        let sameColumn = Array.from(this.rows).map(element => element + coord[1]);
        sameColumn = sameColumn.filter(element => element !== coord);
        const sameGrid = []
        const unit = [].concat(sameRow, sameColumn, ['B2', 'C2', 'B3', 'C3'])
        return unit;
    }
}

module.exports = sudokuGenerator;