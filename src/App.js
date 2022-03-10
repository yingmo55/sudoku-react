import React, { useState } from 'react';
import './App.css';
import { Options } from './Components/Options/Options.js';
import { SudokuGrid } from './Components/SudokuGrid/SudokuGrid.js'
import { HowToPlay } from './Components/HowToPlay/HowToPlay.js';
import { NewGame } from './Components/NewGame/NewGame.js';

function App() {
  const [howToIsVisible, setHowToIsVisible] = useState(false);
  const [newgameIsVisible, setNewGameIsVisible] = useState(false);
  
  const handleCardClose = () => {
    setHowToIsVisible(false);
    setNewGameIsVisible(false);
  }

  const handleHowToClick = () => {
      setHowToIsVisible(true);
  }

  const handleNewGameClick = () => {
    setNewGameIsVisible(true);
  }

  return (
    <>
      <div className='game-container'>
          <div className='game-and-title'>
            <h1><span className='title-ready'>Ready, Set,</span> <span className='title-sudoku'>Sudoku</span></h1>
            <SudokuGrid />
          </div>
        <Options handleHowToClick={handleHowToClick} handleNewGameClick={handleNewGameClick} />
      </div>
      <HowToPlay isVisible={howToIsVisible} handleCardClose={handleCardClose} />
      <NewGame isVisible={newgameIsVisible} handleCardClose={handleCardClose} />
    </>
  );
}

export default App;
