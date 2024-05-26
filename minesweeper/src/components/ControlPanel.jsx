import React from "react";
import Timer from "./Timer";

function ControlPanel({ level, onLevelChange, onStartGame}) {

  const handleLevelChange = (event) => {
    const selectedLevel = parseInt(event.target.value);
    onLevelChange(selectedLevel);
  };


  const handleTimer = (t) => {
      if (t === 0); //onGameStart();
    };

  return (
      <section id="control-panel">
          <div className="space1">
            <form>
              <label htmlFor="btLevel">Nível:</label>
              <div className="dropdown-container">
                <select id="btLevel" value={level} onChange={handleLevelChange}>
                  <option value="0">Selecione nivel</option>
                  <option value="1">Básico </option>
                  <option value="2">Intermédio</option>
                  <option value="3">Avançado </option>
                </select>
                <button onClick={onStartGame}> Start!</button>
              </div>
            </form>
          </div>

          <div id="timer">
            <p>Tempo de Jogo:</p>
            <p id="gameTime">
            { (
              <Timer timeout={20} onTimer={handleTimer} />
            )}
            </p>
          </div>
            <p> Numero de minas identificadas:</p>
      </section>
  )
}

export default ControlPanel;