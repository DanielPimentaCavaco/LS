import React, {useState}  from "react";
import Timer from "./Timer";

function ControlPanel () {
    const [level,setLevel] = useState(0);

    const handleLevelChange = (event) => {
      setLevel(parseInt(event.target.value));
    };

    const startGame = () => {
      if(level === 0) {
        alert('Selecione um nível');
      } else {
        document.body.innerHTML='';
      }
    };


    const handleTimer = (t) => {
        if (t === 0); //onGameStart();
      };

    return (
        <section id="control-panel">
            <div className="space1">
          <form>
            <label htmlFor="btLevel">Nível:</label>
            <select id="btLevel" value={level} onChange={handleLevelChange}>
            <option value="0">Selecione nivel</option>
            <option value="1">Básico </option>
            <option value="2">Intermédio</option>
            <option value="3">Avançado </option>
            </select>
          </form>
          <button onClick={startGame}> Start!</button>
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