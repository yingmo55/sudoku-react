import React from 'react';

export function InputBox({blockFalseInput, addToHistory, id, undoValue}) {
    return (
        <input 
        type='text' 
        name='number' 
        inputMode='numeric' 
        id={id} 
        onChange={e => {blockFalseInput(e); addToHistory(e)}} 
        />
    )
}