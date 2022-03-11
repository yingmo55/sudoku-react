import React from 'react';
import { InputBox } from './InputBox';

export function SudokuGrid({addToHistory, undoValue}) {

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

    const sudokuGrid = () => {
        const grid = [];

            for (let i = 1; i <= 3; i++) {
                const tByTRow = [];

                for (let j = 1; j <= 3; j++) {
                    const threeByThree = [];

                    for (let k = 1; k <= 9; k++) {
                        threeByThree.push(<InputBox addToHistory={addToHistory} undoValue={undoValue} blockFalseInput={blockFalseInput} id={`${i}-${j}-${k}`} key={`${i}-${j}-${k}`} />);
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