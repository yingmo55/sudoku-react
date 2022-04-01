import React, {useState} from 'react';

export function InputBox({blockFalseInput, addToHistory, id, undoIsClicked, currentSudoku}) {
    const [value, setValue] = useState('');

    if (undoIsClicked) {
        let index;
        for (let i = 0; i < currentSudoku.length; i++) {
            let values = Object.values(currentSudoku[i]);
            if (values) {
                if (values[0] === id) {
                    index = i;
                    setValue(currentSudoku[index].value);
                }
            }
        }
    }      


    return (
        <input 
        type='text' 
        name='number' 
        inputMode='numeric' 
        id={id} 
        onChange={e => {blockFalseInput(e); addToHistory(e); setValue(e.target.value)}} 
        value={value} 
        autoComplete='off'
        />
    )
}