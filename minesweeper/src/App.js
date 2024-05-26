import React, { useState } from 'react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [level, setLevel] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const handleLevelChange = (selectedLevel) => {
    setLevel(selectedLevel);
    setGameStarted(false); // Reinicia o jogo ao mudar de nível
  };

  const startGame = () => {
    if (level === 0) {
      alert('Selecione um nível');
    } else {
      setGameStarted(true);
    }
  };

  return (
    <div id="container">
      <div className="title-container">
        <h1>Minesweeper</h1>
      </div>
      {!gameStarted && (
        <ControlPanel
          level={level}
          onLevelChange={handleLevelChange}
          onStartGame={startGame}
        />
      )}
      {gameStarted && (
        <GameBoard
          rows={level === 1 ? 9 : level === 2 ? 16 : 30}
          cols={level === 1 ? 9 : level === 2 ? 16 : 16}
        />
      )}
    </div>
  );
}

export default App;

