import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function HowToPlay({isVisible, handleCardClose}) {
    return (
        <div className={isVisible ? 'card-overlay-container' : 'no-display'}>
            <div className='card-overlay'>
                <span className='close-btn' onClick={handleCardClose}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCircleXmark} /></span>
                <p>Sudoku is a logic-based numbers game from Japan. The game board consists of a 9x9 grid, divided into 9 3x3 squares, with some prefilled by numbers.
                    The goal of the game is to fill all squares of the grid with numbers 1-9 in such a way that each column, row, diagonal and 3x3 square only contains one instance of each digit.<br/><br/>
                    
                    To start playing, press "<em>New Game</em>" in the menu on the right side. You will be offered a chance to choose your difficulty: <b>easy</b>, <b>medium</b> or <b>hard</b>.
                    Based on your choice, the sudoku grid will populate random squares with numbers, more on easy mode, less on hard mode. 
                    Once you have filled up all squares with numbers, press "<em>Check Answer</em>" to find out if your solution is correct. 
                    During the game, if you ever feel like you made a mistake, you can quickly undo and redo with the respective buttons in the right-side menu.
                    If you wish to solve the same puzzle again or simply clear the board, the "<em>Reset</em>" button will reset the board to its initial computer-generated state.
                </p>
            </div>
        </div>
    )
}