import React, { useState } from 'react';
import './App.css';
import { Options } from './Components/Options/Options.js';
import { SudokuGrid } from './Components/SudokuGrid/SudokuGrid.js'
import { HowToPlay } from './Components/HowToPlay/HowToPlay.js';
import { NewGame } from './Components/NewGame/NewGame.js';
import { VictoryCard } from './Components/VictoryCard/VictoryCard.js';
import { WrongAnswerCard } from './Components/WrongAnswerCard/WrongAnswerCard.js';

function App() {
  const [howToIsVisible, setHowToIsVisible] = useState(false);
  const [newgameIsVisible, setNewGameIsVisible] = useState(false);
  const [victoryCardIsVisible, setVictoryCardIsVisible] = useState(false);
  const [wrongAnswerCardIsVisible, setWrongAnswerCardIsVisible] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [initialSudoku, setInitialSudoku] = useState(undefined);
  const [history, setHistory] = useState(undefined)
  const [undoValue, setUndoValue] = useState(undefined);
  
  const handleCardClose = () => {
    setHowToIsVisible(false);
    setNewGameIsVisible(false);
    setVictoryCardIsVisible(false);
    setWrongAnswerCardIsVisible(false);
  }

  const handleHowToClick = () => {
      setHowToIsVisible(true);
  }

  const handleNewGameClick = () => {
    setNewGameIsVisible(true);
  }

  const handleCheckAnswerClick = () => {
    if (isWin) {
      setVictoryCardIsVisible(true);
    } else {
      setWrongAnswerCardIsVisible(true);
    }
  }

  const handleUndoClick = () => {
    if (history[history.length - 1].name === 'number') {
      setUndoValue(history[history.length - 1]);
    }
  }

  const addToHistory = (e) => {
    let newObject = {name: e.target.name, id: e.target.id, value: e.target.value};
    if (!history) {
      setHistory([newObject])
    } else {
      let prev;
      if (history.length > 7) {
        prev = history.slice(history.length - 7);
      } else {
        prev = history;
      }
      setHistory([...prev, newObject]);
    }
    console.log(history);
  }

  return (
    <>
      <div className='game-container'>
          <div className='game-and-title'>
            <h1><span className='title-ready'>Ready, Set,</span> <span className='title-sudoku'>Sudoku</span></h1>
            <SudokuGrid addToHistory={addToHistory} undoValue={undoValue} />
          </div>
        <Options 
          handleHowToClick={handleHowToClick} 
          handleNewGameClick={handleNewGameClick} 
          handleCheckAnswerClick={handleCheckAnswerClick} 
          handleUndoClick={handleUndoClick} 
          gameIsInProgress={initialSudoku} 
          history={history}
          />
      </div>
      <HowToPlay isVisible={howToIsVisible} handleCardClose={handleCardClose} />
      <NewGame isVisible={newgameIsVisible} handleCardClose={handleCardClose} />
      <VictoryCard isVisible={victoryCardIsVisible} handleCardClose={handleCardClose} />
      <WrongAnswerCard isVisible={wrongAnswerCardIsVisible} handleCardClose={handleCardClose} />
    </>
  );
}

export default App;
