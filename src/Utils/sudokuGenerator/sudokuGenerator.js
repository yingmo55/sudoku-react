const sudokuGenerator = {
    rows: 'ABCDEFGHI',
    columns: '123456789',
    rowGroups: [ ['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'] ],
    columnGroups: [ ['1','2','3'],['4','5','6'],['7','8','9'] ],


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
        const possibleAnswer = [].concat(...this.columnGroups);
        const grid = {}; // the grid and possible answers
        for (let i=0; i < coordinates.length; i++){ // columns
            const coord = coordinates[i]
            grid[coord] = possibleAnswer;
        }
        return grid;
    },

    // get an array of 20 coordinates of squares to check answers
    getAnswerUnit (coord) {

        const sameRow = Array.from(this.columns)
                            .map(element => coord[0] + element)
                            .filter(element => element !== coord);
        const sameColumn = Array.from(this.rows)
                                .map(element => element + coord[1])
                                .filter(element => element !== coord);

        // get the squares within the same grid
        const sameGridRow = this.rowGroups.filter(arr => 
                                arr.includes(coord[0]))[0]
                                .filter(element=>element !== coord[0])

        const sameGridColumn = this.columnGroups.filter(arr =>
                                arr.includes(coord[1]))[0]
                                .filter(element=>element !== coord[1])

        const nearbyGrid = () => {
            const nearby = [];
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