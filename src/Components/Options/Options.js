import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faShare, faRotateLeft, faCircleQuestion, faCheckToSlot, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export function Options({handleHowToClick, handleNewGameClick, handleCheckAnswerClick, handleUndoClick, gameIsInProgress, history}){   
    return (
        <div className='options'>
            <button className='options-btn' onClick={handleHowToClick}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCircleQuestion} />How to Play</button>
            <button className='options-btn' onClick={handleNewGameClick}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCirclePlay} />New Game</button>
            <button className='options-btn' onClick={handleCheckAnswerClick} disabled={!gameIsInProgress}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckToSlot} />Check Answer</button>
            <button className='options-btn' onClick={handleUndoClick} disabled={!history}><FontAwesomeIcon className='fontAwesomeIcon' icon={faReply} />Undo</button>
            <button className='options-btn' disabled={!history}><FontAwesomeIcon className='fontAwesomeIcon' icon={faShare} />Redo</button>
            <button className='options-btn' disabled={!gameIsInProgress}><FontAwesomeIcon className='fontAwesomeIcon' icon={faRotateLeft} />Reset</button>
        </div>
    )
}