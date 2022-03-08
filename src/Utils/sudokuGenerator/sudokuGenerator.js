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
    },

    // randomly fill in at least 17 squares
    startNewGame(shuffledCoords, difficulty) {
        // verify input
        if (!Array.isArray(shuffledCoords)) {
            throw new Error(`expect shuffledCoords to be Array, instead get ${typeof(shuffledCoords)}`);
        }
        //check array is empty
        if (shuffledCoords.length < 1) {
            throw new Error(`expect shuffledCoords to have input, instead get empty array `);
        }

        const emptyGrid = this.initializeGrid();
        const newGame = {...emptyGrid};

        const getRandomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        let numOfEmptySquares;
        switch(difficulty){
            case 'easy':
                numOfEmptySquares = getRandomNumber(35, 45);
                break;
            case 'medium':
                numOfEmptySquares = getRandomNumber(28, 34);
                break;
            case 'hard':
                numOfEmptySquares = getRandomNumber(18, 27);
                break;
            default:
                numOfEmptySquares = 17;
                break;
        }

        const filledSquares = shuffledCoords.slice(0, numOfEmptySquares);

        // ensure the grid has unique numbers
        for (let i=0; i < 9; i++) {
            for (let x=1; x<10; x++) {
            newGame[filledSquares[i]] = [x.toString()];
            }
        }

        for (let i=9; i < filledSquares.length; i++) {
            const randomNum = Math.floor(Math.random() * 9) + 1
            newGame[filledSquares[i]] = [randomNum.toString()];
        }
        return newGame;
    },

    updateAnswer (coord, grid, answer) {
        //check data type
        if (typeof(grid) !== 'object' || Array.isArray(grid)) {
            throw new Error(`expect grid to be object, instead get ${Array.isArray(grid) ? 'array' : typeof(grid)}`);
        }
        //check if object is empty
        if (Object.keys(grid).length < 1) {
            throw new Error(`expect grid have input, instead get empty object `);
        }

        const updatedGrid = {...grid};
        updatedGrid[coord] = [answer];
        return updatedGrid;
    },

    updateNearbyUnit (coord, grid) {
        //check data type
        if (typeof(grid) !== 'object' || Array.isArray(grid)) {
            throw new Error(`expect grid to be object, instead get ${Array.isArray(grid) ? 'array' : typeof(grid)}`);
        }
        //check if object is empty
        if (Object.keys(grid).length < 1) {
            throw new Error(`expect grid have input, instead get empty object `);
        }

        const updatedGrid = {...grid};
        const nearbyUnit = this.getAnswerUnit(coord);
        for (let i=0; i < length.nearbyUnit; i++) {
            if (updatedGrid[nearbyUnit[i]].length != 1 && updatedGrid[nearbyUnit[i]][0] !== updatedGrid[coord][0]) {
                updatedGrid[nearbyUnit[i]].filter(answer => answer !== updatedGrid[coord][0]); 
            }
        } //while updating, also update the updated grid's nearby grid
          // do it with an effect hook
    },

    checkAnswer(grid) {
        const sameRow = Array.from(this.columns)
                            .map(element => coord[0] + element);

        const sameColumn = Array.from(this.rows)
                                .map(element => element + coord[1]);

    }
}

module.exports = sudokuGenerator;