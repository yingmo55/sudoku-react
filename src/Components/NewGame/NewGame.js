import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function NewGame({isVisible, handleCardClose}) {
    return (
        <div className={isVisible ? 'card-overlay-container' : 'no-display'}>
            <div className="card-overlay">
                <span className='close-btn' onClick={handleCardClose}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCircleXmark} /></span>
                <h2>New Game</h2>
                <div className='difficulty-select'>
                    <button className='easy-btn'>Easy</button> <button className='medium-btn'>Medium</button> <button className='hard-btn'>Hard</button>
                </div>
            </div>
        </div>
    )
}