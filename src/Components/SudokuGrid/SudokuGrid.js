import React from 'react';
import { InputBox } from './InputBox';

export function SudokuGrid({addToHistory, undoIsClicked, currentSudoku}) {
    //Prevent user from entering values that aren't numbers 1-9 into the grid
    const blockFalseInput = (e) => {
        const inputValue = e.target.value;
        const regExp = /^[1-9]$/;
        if (!inputValue.match(regExp)) {
            e.preventDefault();
            if (inputValue) {
                if (inputValue[0].match(regExp)) {
                    e.target.value = inputValue[0];
                } else {
                    e.target.value = '';
                }
            }
        }
    }

    // Generate a 9x9 grid of inputs with unique IDs in format '[row][column]' e.g B7
    const sudokuGrid = () => {
        const grid = [];

            for (let i = 1; i <= 3; i++) {
                const tByTRow = [];

                for (let j = 1; j <= 3; j++) {
                    const threeByThree = [];

                    for (let k = 1; k <= 9; k++) {
                        const idMaker = () => {
                            let id;
                            let row;
                            let column;
                            // Columns (1-9)
                            if (j === 1) {
                                if (k <= 3) {
                                    column = k;
                                } else if (k >= 4 && k <= 6) {
                                    column = k - 3;
                                } else if (k >= 7 && k <= 9) {
                                    column = k - 6;
                                }
                            } else if (j === 2) {
                                if (k <= 3) {
                                    column = k + 3;
                                } else if (k >= 4 && k <= 6) {
                                    column = k;
                                } else if (k >= 7 && k <= 9) {
                                    column = k - 3;
                                }
                            } else if (j === 3) {
                                if (k <= 3) {
                                    column = k + 6;
                                } else if (k >= 4 && k <= 6) {
                                    column = k + 3;
                                } else if (k >= 7 && k <= 9) {
                                    column = k;
                                }
                            }
                            // Rows (A-I)
                            if (i === 1) {
                                if (k <= 3) {
                                    row = 'A';
                                } else if (k >= 4 && k <= 6) {
                                    row = 'B';
                                } else if (k >= 7 && k <= 9) {
                                    row = 'C';
                                }
                            } else if (i === 2) {
                                if (k <= 3) {
                                    row = 'D';
                                } else if (k >= 4 && k <= 6) {
                                    row = 'E';
                                } else if (k >= 7 && k <= 9) {
                                    row = 'F';
                                }
                            } else if (i === 3) {
                                if (k <= 3) {
                                    row = 'G';
                                } else if (k >= 4 && k <= 6) {
                                    row = 'H';
                                } else if (k >= 7 && k <= 9) {
                                    row = 'I';
                                }
                            }

                            id = `${row}${column}`;
                            return id;
                        }

                        threeByThree.push(
                        (<InputBox 
                            addToHistory={addToHistory} 
                            undoIsClicked={undoIsClicked}  
                            blockFalseInput={blockFalseInput} 
                            currentSudoku={currentSudoku} 
                            id={idMaker()} 
                            key={idMaker()} 
                        />)
                        );
                    }

                    tByTRow.push((
                        <div className='three-by-three' key={`${i}-${j}`}>
                            {threeByThree}
                        </div>
                    ))
                }

                grid.push((
                    <div className='t-by-t-row' key={i}>
                        {tByTRow}
                    </div>
                ));
            }
        return grid;
    }

    return (
        <div className='sudoku-container'>
            <div className='sudoku-grid'>
                {sudokuGrid()}
            </div>
        </div>
    )
}