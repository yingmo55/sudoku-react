const sudokuGenerator = {
    rows: 'ABCDEFGHI',
    columns: '123456789',
    rowGroups: [ ['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'] ],
    columnGroups: [ ['1','2','3'],['4','5','6'],['7','8','9'] ],

    //generate all grid coordination
    coordinateGen() {
        const gridCoord = [];
    
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
                            .map(element => coord[0] + element);

        const sameColumn = Array.from(this.rows)
                                .map(element => element + coord[1]);

        // get the squares within the same 3x3 grid
        const get3by3Grid = () => {
            const smallGrid = []; 
            const sameGridRow = this.rowGroups.filter(arr => arr.includes(coord[0]))[0];
            const sameGridColumn = this.columnGroups.filter(arr => arr.includes(coord[1]))[0];

            for (const col of sameGridColumn) {
                for (const row of sameGridRow) {
                    smallGrid.push(row + col)
                }
            }
            return smallGrid;
        }

        const nearbyGrid = get3by3Grid();

        // cleanup duplicates
        const allCoords = new Set([].concat(sameRow, sameColumn, nearbyGrid))
        const unit =  Array.from(allCoords)
                           .filter(element => element !== coord)

        return unit;
    },


    //shuffle the array
    shuffle(arr) {
        const shuffledArray = arr.slice(0); // make a copy of the arr instead of a reference to it
        for (let i= (shuffledArray.length - 1); i > 0; i--){
            const randomInt = Math.floor(Math.random() * (shuffledArray.length));
            [shuffledArray[i],shuffledArray[randomInt]] = [shuffledArray[randomInt] , shuffledArray[i]];
        }
        return shuffledArray;
    }
}

module.exports = sudokuGenerator;