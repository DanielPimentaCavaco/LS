import React from "react";
import Timer from "./Timer";

function ControlPanel () {
    const handleTimer = (t) => {
        if (t === 0); //onGameStart();
      };

    return (
        <section id="control-panel">
            <div className="space1">
          <form>
            <label htmlFor="btLevel">Nível:</label>
            <select id="btLevel">
            <option value="0">Selecione nivel</option>
            <option value="1">Básico </option>
            <option value="2">Intermédio</option>
            <option value="3">Avançado </option>
            </select>
          </form>
          <button> Start!</button>
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