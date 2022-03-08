import React from 'react';

export function SudokuGrid() {

    const blockFalseInput = (e) => {
        const inputValue = e.target.value;
        //Prevent user from inserting a numerical value longer than 1 digit and replace the old value with the most recently entered number
        if (parseInt(inputValue) > 9) {
            e.target.value = inputValue[1];
        }
        //Prevent user from entering any zeros and non-numbers, default the value to 1
        if (inputValue.includes('0') || !inputValue) {
            e.target.value = '1';
        }
    }

    const inputBox = <input type='number' name='number' inputMode='numeric' min='1' max='9' onChange={blockFalseInput} onKeyPress={blockFalseInput} />;
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