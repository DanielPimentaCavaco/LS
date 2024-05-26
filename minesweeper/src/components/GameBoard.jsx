import React from 'react';
import '../App.css';

function GameBoard({ rows, cols }) {
  const createBoard = () => {
    const board = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(<div key={`${i}-${j}`} className="cell"></div>);
      }
      board.push(<div key={i} className="row">{row}</div>);
    }
    return board;
  };

  return (
    <div className="board">
      {createBoard()}
    </div>
  );
}

export default GameBoard;
