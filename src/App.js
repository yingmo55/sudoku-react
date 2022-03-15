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
  const [initialSudoku, setInitialSudoku] = useState(undefined); //computer generated sudoku
  const [currentSudoku, setCurrentSudoku] = useState([]); //current state of the sudoku board
  const [history, setHistory] = useState(undefined);
  const [undoIsClicked, setUndoIsClicked] = useState(false);
  
  // Close all popup windows
  const handleCardClose = () => {
    setHowToIsVisible(false);
    setNewGameIsVisible(false);
    setVictoryCardIsVisible(false);
    setWrongAnswerCardIsVisible(false);
  }

  // Click handlers for all options, in order of appearance in the UI
  const handleHowToClick = () => {
      setHowToIsVisible(true);
  }

  const handleNewGameClick = () => {
    setNewGameIsVisible(true);
  }

  const startGame = (e) => {
    let difficulty = e.target.value;
    // PLACEHOLDER FUNCTION
    console.log(difficulty);
    setInitialSudoku([]);
  }

  const handleDifficultyClick = (e) => {
    startGame(e);
  }

  const handleCheckAnswerClick = () => {
    // PLACEHOLDER FUNCTION
    function checkAnswer() {
      let random = Math.floor(Math.random() * 1);
      if (random === 0) {
        return true;
      } else {
        return false;
      }
    }

    setIsWin(checkAnswer())

    if (isWin) {
      setVictoryCardIsVisible(true);
    } else {
      setWrongAnswerCardIsVisible(true);
    }
  }

  // Undo/Redo logic
  const handleUndoClick = () => {
    if (history) {
      setCurrentSudoku(history[history.length - 2]);
      console.log(currentSudoku);
      setUndoIsClicked(true);
      setUndoIsClicked(false);
    }
  }

  const addToHistory = (e) => {
    let newObject = {id: e.target.id, value: e.target.value};
    let prev;

    if (!history) {
      setHistory([[newObject]])

    } else {
      // Only keep a certain amount of moves in the history state
      if (history.length > 7) {
        prev = history.slice(history.length - 7);
      } else {
        prev = [...history];
      }

      // Each state of the board is represented by an array of objects containing input value and ID
      let index = prev.length - 1;
      let lastBoard = [...prev[index]];
      lastBoard.push(newObject);
      setHistory([...prev, lastBoard]);

      setCurrentSudoku(history[history.length - 1]);
    }
  }

  return (
    <>
      <div className='game-container'>
          <div className='game-and-title'>
            <h1><span className='title-ready'>Ready, Set,</span> <span className='title-sudoku'>Sudoku</span></h1>
            <SudokuGrid addToHistory={addToHistory} undoIsClicked={undoIsClicked} currentSudoku={currentSudoku} />
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
      <NewGame isVisible={newgameIsVisible} handleCardClose={handleCardClose} handleDifficultyClick={handleDifficultyClick} />
      <VictoryCard isVisible={victoryCardIsVisible} handleCardClose={handleCardClose} />
      <WrongAnswerCard isVisible={wrongAnswerCardIsVisible} handleCardClose={handleCardClose} />
    </>
  );
}

export default App;
