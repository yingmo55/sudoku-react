import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function WrongAnswerCard({isVisible, handleCardClose}) {
    return (
        <div className={isVisible ? 'card-overlay-container' : 'no-display'}>
            <div className="card-overlay">
                <span className='close-btn' onClick={handleCardClose}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCircleXmark} /></span>
                <h2>Keep trying</h2>
                <p>Something's not quite right on your board. Make sure that no boxes are empty and all 3x3 blocks, rows, columns and diagonals only have one instance of numbers 1-9.</p>
            </div>
        </div>
    )
}