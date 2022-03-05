const sudokuGenerator = {
    rows: 'ABCDEFGHI',
    columns: '123456789',
    rowGrid: [ ['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'] ],
    columnGrid: [ ['1','2','3'],['4','5','6'],['7','8','9'] ],


    coordinateGen() {
        const gridCoord = []; //all grid coordination
    
        for (let i=0; i < this.rows.length; i++){ // rows
            for (let x=0; x < this.columns.length; x++){ // columns
                const coord = this.rows[i] + this.columns[x];
                gridCoord.push(coord);
            }
        }
        return gridCoord;
    },

    // generate an "empty" grid where all possible answers are presented
    initializeGrid() {
        const coordinates = this.coordinateGen();
        const possibleAnswer = Array.from(this.columns);
        const grid = {}; // the grid and possible answers
        for (let i=0; i < coordinates.length; i++){ // columns
            const coord = coordinates[i]
            grid[coord] = possibleAnswer;
        }
        return grid;
    },

    updateGrid (coord) {
        const possibleAnswer = Array.from(this.columns);
        let sameRow = possibleAnswer.map(element => coord[0] + element);
        sameRow = sameRow.filter(element => element !== coord);
        let sameColumn = Array.from(this.rows).map(element => element + coord[1]);
        sameColumn = sameColumn.filter(element => element !== coord);


        // get the squares within the same grid
        let sameGridRow = this.rowGrid.filter(arr => arr.includes(coord[0]))[0]
        sameGridRow = sameGridRow.filter(element=>element !== coord[0])

        let sameGridColumn = this.columnGrid.filter(arr => arr.includes(coord[1]))[0]
        sameGridColumn = sameGridColumn.filter(element=>element !== coord[1])

        const nearbyGrid = () => {
            let nearby = [];
            for (let i=0; i < sameGridColumn.length; i++){ // rows
                for (let x=0; x <  sameGridRow.length; x++){ // columns
                    const coord = sameGridRow[x] + sameGridColumn[i];
                    nearby.push(coord);
                }
            }
            return nearby;
        }

        const nearby = nearbyGrid();
        const unit = [].concat(sameRow, sameColumn, nearby)
        return unit;
    }
}

module.exports = sudokuGenerator;