import React from "react";


import gameStartedFace from '../helpers/STARTGAME-face.png';

function ControlPanel({ level, onLevelChange, onStartGame, gameStarted}) {

  const handleLevelChange = (event) => {
    event.preventDefault();
    const selectedLevel = parseInt(event.target.value);
    onLevelChange(selectedLevel);
  };

  return (
    <section id="panel-control">
      <div className="dropdown-container space1">
        <select id="btLevel" value={level} onChange={handleLevelChange}>
          <option value="0">Selecione nivel</option>
          <option value="1">Básico</option>
          <option value="2">Intermédio</option>
          <option value="3">Avançado</option>
        </select>
      </div>
      <div id="space2" onClick={onStartGame}> 
      <img src={gameStartedFace} alt="Start!" style={{ width: '50px', height: 'auto' }}></img>
      </div>
  
    </section>
  );
}

export default ControlPanel;
