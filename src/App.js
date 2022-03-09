import React from 'react';
import './App.css';
import { Options } from './Components/Options/Options.js';
import { SudokuGrid } from './Components/SudokuGrid/SudokuGrid.js'

function App() {
  return (
    <>
      <div className='game-container'>
        <h1><span className='title-ready'>Ready, Set,</span> <span className='title-sudoku'>Sudoku</span></h1>
        <Options />
        <SudokuGrid />
      </div>
    </>
  );
}

export default App;
