import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [level, setLevel] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [mines, setMines] = useState(0);


  const handleLevelChange = (selectedLevel) => {
    setLevel(selectedLevel);
    setGameStarted(false); // Reinicia o jogo ao mudar de nível
    setMines(selectedLevel === 1 ? 10 : selectedLevel === 2 ? 40 : 99);
  };

  const startGame = () => {
    if (level === 0) {
      alert('Selecione um nível');
    } else {
      setGameStarted(true);
    }
  };

  const handleTimeout = () => {
    setGameStarted(false);
    alert('Time is up!');
  };

  
  return (
    <div id="container">
      <Header>
        <h1>Minesweeper</h1>
      </Header>
      
    
        <ControlPanel
          level={level}
          onLevelChange={handleLevelChange}
          onStartGame={startGame}
          gameStarted={gameStarted}
                 /> 
     
      
      {gameStarted && (
        <GameBoard
          rows={level === 1 ? 9 : level === 2 ? 16 : 16}
          cols={level === 1 ? 9 : level === 2 ? 16 : 30}
          mines={mines}
        />
      )}
    </div>
  );
}

export default App;

