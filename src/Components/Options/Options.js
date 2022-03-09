import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faShare, faRotateLeft, faCircleQuestion, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

export function Options(){
    return (
        <div className='options'>
            <button className='options-btn how-to-btn'><FontAwesomeIcon className='fontAwesomeIcon' icon={faCircleQuestion} />How to Play</button>
            <button className='options-btn undo-btn'><FontAwesomeIcon className='fontAwesomeIcon' icon={faReply} />Undo</button>
            <button className='options-btn redo-btn'><FontAwesomeIcon className='fontAwesomeIcon' icon={faShare} />Redo</button>
            <button className='options-btn reset-btn'><FontAwesomeIcon className='fontAwesomeIcon' icon={faRotateLeft} />Reset</button>
            <button className='options-btn check-answer-btn' disabled={true}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCheckToSlot} />Check Answer</button>
        </div>
    )
}