import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export function VictoryCard({isVisible, handleCardClose}) {
    return (
        <div className={isVisible ? 'card-overlay-container' : 'no-display'}>
            <div className="card-overlay">
                <span className='close-btn' onClick={handleCardClose}><FontAwesomeIcon className='fontAwesomeIcon' icon={faCircleXmark} /></span>
                <h2>Great Work!</h2>
                <p>Sudoku solved correctly. If you wish to try another one, close this card and press <em>"New Game"</em>.</p>
            </div>
        </div>
    )
}