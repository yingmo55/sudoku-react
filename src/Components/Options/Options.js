import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faShare, faRotateLeft, faCircleQuestion, faCheckToSlot, faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export function Options({handleHowToClick}){
    
    return (
        <div className='options'>
            <button className='options-btn' onClick={handleHowToClick}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCircleQuestion} />How to Play</button>
            <button className='options-btn'><FontAwesomeIcon className='fontAwesomeIcon' icon={faCirclePlay} />New Game</button>
            <button className='options-btn' disabled={true}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckToSlot} />Check Answer</button>
            <button className='options-btn' disabled={true}><FontAwesomeIcon className='fontAwesomeIcon' icon={faReply} />Undo</button>
            <button className='options-btn' disabled={true}><FontAwesomeIcon className='fontAwesomeIcon' icon={faShare} />Redo</button>
            <button className='options-btn' disabled={true}><FontAwesomeIcon className='fontAwesomeIcon' icon={faRotateLeft} />Reset</button>
        </div>
    )
}