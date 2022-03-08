import React from 'react';

export function SudokuGrid() {

    const blockFalseInput = (e) => {
        const inputValue = e.target.value;
        const regExp = /^[1-9]$/;
        if (!inputValue.match(regExp)) {
            e.preventDefault();
            if (inputValue[0].match(regExp)) {
                e.target.value = inputValue[0];
            } else {
                e.target.value = '';
            }
        }
    }

    const inputBox = <input type='text' name='number' inputMode='numeric' onChange={blockFalseInput} />;
    const threeByThree = (<div className='three-by-three'>
            {inputBox}{inputBox}{inputBox}<br/>
            {inputBox}{inputBox}{inputBox}<br/>
            {inputBox}{inputBox}{inputBox}
        </div>)
    const tByTRow = (<div className='t-by-t-row'>
            {threeByThree}{threeByThree}{threeByThree}
        </div>)

    return (
        <div className='sudoku-container'>
            <div className='sudoku-grid'>
                {tByTRow}
                {tByTRow}
                {tByTRow}
            </div>
        </div>
    )
}