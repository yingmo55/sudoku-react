const sudokuGenerator = require('../src/Utils/sudokuGenerator/sudokuGenerator.js');

//functions to test

describe('sudokuGenerator', ()=>{
    describe(".coordinateGen", () => {
        // test initializing an empty grid
        test('should have a length of 81', ()=> {
            const expected = 81;
            const input = sudokuGenerator.coordinateGen();
            expect(input).toHaveLength(expected);
        });

        it('should have unique items', ()=> {
            const expected = 81;
            const inputSet = new Set(sudokuGenerator.coordinateGen());
            const input = Array.from(inputSet);
            expect (input).toHaveLength(expected);
        })
    });

    describe(".initializeGrid", () => {
        // test initializing an empty grid
        test('should have a length of 81', ()=> {
            const expected = 81;
            const output = sudokuGenerator.initializeGrid();
            const outputKeys = Object.keys(output);
            expect(outputKeys).toHaveLength(expected);
        });

        it('should have unique items', ()=> {
            const expected = 81;
            const output = sudokuGenerator.initializeGrid()
            const outputSet = new Set(Object.keys(output));
            const setArray = Array.from(outputSet);
            expect (setArray).toHaveLength(expected);
        })
    });

    describe(".getAnswerUnit", () => {
        it('should throw an error with no arguments', ()=>{
            expect(sudokuGenerator.getAnswerUnit).toThrow();
        })

        // test method to get a unit of 20 squares related to the input coordinate
        it('should have a length of 20', ()=> {
            const expected = 20;
            const input = sudokuGenerator.getAnswerUnit('A1');
            expect(input).toHaveLength(expected);
        });

        it('should have unique items', ()=> {
            const expected = 20;
            const inputSet = new Set(sudokuGenerator.getAnswerUnit('A1'));
            const input = Array.from(inputSet);
            expect(input).toHaveLength(expected);
        });

        describe('test different rows generated', ()=>{
            it('should contain other coordinates of the same rows (A1)', ()=> {
                const input = 'A1'
                const expected = ['A2','A3', 'A4', "A5", 'A6', 'A7', 'A8', 'A9'];
                const result = sudokuGenerator.getAnswerUnit(input);
        
                expect(result.slice(0, 8)).toStrictEqual(expected);
                });
            it('should contain other coordinates of the same rows (B1)', ()=> {
                const input = 'B1'
                const expected = ['B2','B3', 'B4', "B5", 'B6', 'B7', 'B8', 'B9'];
                const result = sudokuGenerator.getAnswerUnit(input);
        
                expect(result.slice(0, 8)).toStrictEqual(expected);
                });
            });

        describe('test different columns generated', ()=>{
            it('should contain other coordinates of the same column', ()=> {
                const input = 'A1'
                const expected = ['B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1'];
                const result = sudokuGenerator.getAnswerUnit(input);
        
                expect(result.slice(8, 16)).toStrictEqual(expected);
            });
            it('should contain other coordinates of the same column', ()=> {
                const input = 'B1'
                const expected = ['A1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1'];
                const result = sudokuGenerator.getAnswerUnit(input);
        
                expect(result.slice(8, 16)).toStrictEqual(expected);
                });
            });
        
        describe('test same 3x3 grid items', ()=>{
            it('should contain the 4 remaining value within the same 3x3 grid (A1)', ()=> {
                const input = 'A1'
                const result = sudokuGenerator.getAnswerUnit(input)
                const expected = ['B2', 'C2', 'B3', 'C3'];
                expect(result.slice(16, 20)).toStrictEqual(expected);
                });
            it('should contain the 4 remaining value within the same 3x3 grid (B1)', ()=> {
                const input = 'B1'
                const result = sudokuGenerator.getAnswerUnit(input)
                const expected = ['A2', 'C2', 'A3', 'C3'];
                expect(result.slice(16, 20)).toStrictEqual(expected);
                });
            it('should contain the 4 remaining value within the same 3x3 grid (B1)', ()=> {
                const input = 'H9'
                const result = sudokuGenerator.getAnswerUnit(input)
                const expected = ['G7', 'I7', 'G8', 'I8'];
                expect(result.slice(16, 20)).toStrictEqual(expected);
                });
            });
    });
    describe(".shuffle", () => {
        it('should throw an error with no arguments', ()=>{
            expect(sudokuGenerator.shuffle).toThrow();
        });

        it('should return a shuffled array', ()=> {
            const arr = sudokuGenerator.coordinateGen();
            const output = sudokuGenerator.shuffle(arr);
            expect(output).not.toStrictEqual(arr);
        });

        it('should have unique items after shuffling', ()=> {
            const expected = 81;
            const arr = sudokuGenerator.coordinateGen();
            const output = sudokuGenerator.shuffle(arr);
            const outputSet = new Set(output);
            const finalOutput = Array.from(outputSet);
            expect(finalOutput).toHaveLength(expected);
        });
    });

    describe('.updateAnswer', () => {

        describe('verify input', ()=>{
            it('should throw an error with no arguments', ()=>{
                expect(sudokuGenerator.updateAnswer).toThrow();
            });
            it('should throw an error with less than 3 arguments(1 input)', ()=>{
                expect(()=> sudokuGenerator.updateAnswer('A1')).toThrow();
            });
            it('should throw an error with less than 3 arguments (2 inputs)', ()=>{
                expect(()=> sudokuGenerator.updateAnswer('A1', '2')).toThrow();
            });
            it('should throw an error with unsupported input type', ()=>{
                expect(()=> sudokuGenerator.updateAnswer('A1', true, '2')).toThrow();
            });
            it('should throw an error if 2nd argument is an empty object', ()=>{
                expect(()=> sudokuGenerator.updateAnswer('A1', {}, '2')).toThrow();
            });

        })

        describe('check if answer is updated', ()=> {
            it('should update the answer (\'A1\', \'1\')', ()=>{
                const coord = 'A1'
                const grid = sudokuGenerator.initializeGrid();
                const answer = '1';
                const expected = ['1'];
                const result = sudokuGenerator.updateAnswer(coord, grid, answer);
    
                expect(result[coord]).toStrictEqual(expected);
            });
            it('should update the answer (\'H3\', \'9\')', ()=> {
                const coord = 'H3'
                const grid = sudokuGenerator.initializeGrid();
                const answer = '9';
                const expected = ['9'];
                const result = sudokuGenerator.updateAnswer(coord, grid, answer);
    
                expect(result[coord]).not.toBe(expected);
            });
        })

        describe('check if original grid is mutated', () => {
            it('should return an updated grid with the input answer (\'A1\', \'1\')', ()=> {
                const coord = 'A1'
                const grid = sudokuGenerator.initializeGrid();
                const answer = '1';
                const result = sudokuGenerator.updateAnswer(coord, grid, answer);
    
                expect(result).not.toBe(grid);
            });
            it('should return an updated grid with the input answer (\'A1\', \'2\')', ()=> {
                const coord = 'A1'
                const grid = sudokuGenerator.initializeGrid();
                const answer = '2';
                const result = sudokuGenerator.updateAnswer(coord, grid, answer);
    
                expect(result).not.toBe(grid);
            });
            it('should return an updated grid with the input answer (\'H3\', \'9\')', ()=> {
                const coord = 'H3'
                const grid = sudokuGenerator.initializeGrid();
                const answer = '9';
                const result = sudokuGenerator.updateAnswer(coord, grid, answer);
    
                expect(result).not.toBe(grid);
            });
        })

        describe('.startNewGame', () => {
            describe('verify inputs', ()=>{
                it('should throw an error with no arguments', ()=>{
                    expect(sudokuGenerator.startNewGame).toThrow();
                });
                it('should throw an error with less than 2 arguments(1 input)', ()=>{
                    expect(()=> sudokuGenerator.startNewGame([])).toThrow();
                });
                it('should throw an error with less than 2 arguments(1 input)', ()=>{
                    expect(()=> sudokuGenerator.startNewGame('easy')).toThrow();
                });
            })

            it('should return an updated grid', ()=>{
                const arr = sudokuGenerator.coordinateGen();
                const shuffled = sudokuGenerator.shuffle(arr);
                const emptyGrid = sudokuGenerator.initializeGrid();
                const newGame = sudokuGenerator.startNewGame(shuffled, 'easy');

                expect(newGame).not.toBe(emptyGrid);
            })
        })

    })
})
// ['A2','A3', 'A4', "A5", 'A6', 'A7', 'A8', 'A9', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', ]
