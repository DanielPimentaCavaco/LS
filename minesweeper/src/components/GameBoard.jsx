import React, { useState, useEffect } from 'react';
import '../App.css';
import Timer from "./Timer";
import GameOverFace from "../helpers/GAMEOVER-face.png"

function GameBoard({ rows, cols, mines }) {
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  
  const createBoard = () => {
      const newBoard = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          row.push({ row: i, col: j, isBomb: false, isRevealed: false });
        }
        newBoard.push(row);
      }
      return newBoard;
    };
    
    const plantMines = (initialBoard) => {
      const newBoard = [...initialBoard];
      let minesPlanted = 0;
      while (minesPlanted < mines) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        if (!newBoard[row][col].isBomb) {
          newBoard[row][col].isBomb = true;
          minesPlanted++;
        }
      }
      console.log(newBoard);
      setBoard(newBoard);
    };
    
    useEffect(() => {
      initializeBoard();
    }, [rows, cols, mines]);
  
    const initializeBoard = () => {
      const newBoard = createBoard();
      plantMines(newBoard);
    };

  const revealEmptyCells = (board, row, col) => {
    const deltas = [-1, 0, 1];
    deltas.forEach((deltaRow) => {
      deltas.forEach((deltaCol) => {
        const newRow = row + deltaRow;
        const newCol = col + deltaCol;
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          !(deltaRow === 0 && deltaCol === 0) &&
          !board[newRow][newCol].isRevealed
        ) {
          board[newRow][newCol].isRevealed = true;
          if (countAdjacentMines(newRow, newCol) === 0) {
            revealEmptyCells(board, newRow, newCol); // Revela as células vizinhas vazias
          }
        }
      });
    });
  };

  const handleClick = (row, col) => {
    if (gameOver || board[row][col].isRevealed) return;

    const newBoard = [...board];
    newBoard[row][col].isRevealed = true;

    if (newBoard[row][col].isBomb) {
      setGameOver(true);
      // Revela todas as bombas
      newBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell.isBomb) {
            newBoard[rowIndex][colIndex].isRevealed = true;
          }
        });
      });
    } else if (countAdjacentMines(row, col) === 0) {
      // Caso a célula não tenha minas adjacentes, revela todas as outras
      revealEmptyCells(newBoard, row, col);
    }

    setBoard(newBoard);
  };

  const countAdjacentMines = (row, col) => {
    let count = 0;
    const deltas = [-1, 0, 1];
    deltas.forEach((deltaRow) => {
      deltas.forEach((deltaCol) => {
        const newRow = row + deltaRow;
        const newCol = col + deltaCol;
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          !(deltaRow === 0 && deltaCol === 0) &&
          board[newRow][newCol].isBomb
        ) {
          count++;
        }
      });
    });
    return count;
  };  

  
  const gameRestart = () => {
    setGameOver(false);
    initializeBoard();
  }

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell.isRevealed ? 'revealed' : ''}`}
            onClick={() => handleClick(rowIndex, colIndex)}
          >
            {cell.isRevealed && !cell.isBomb && countAdjacentMines(rowIndex, colIndex) !== -1
              ? countAdjacentMines(rowIndex, colIndex)
              : cell.isRevealed && cell.isBomb
              ? '💣'
              : ''}
          </div>
        ))}
      </div>
    ));
  };

  
  //colocar numero de minas ->>
  return (
    <div>
      <div id='timer'>
      <Timer gameStarted={!gameOver} gameOver={gameOver} />
      </div>
      <div className="board" id='gameoverpanel'>{renderBoard()}</div>
      {gameOver && <div className="game-over-message">
      <img src={GameOverFace} alt='GAMEOVER'style={{ width: '80px', height: 'auto' }}></img>
      <p> Numero de minas indentificadas: xx</p>  
      <button onClick={gameRestart}> Try again?</button>
      </div>}
      </div>
  );
}

export default GameBoard;