import React, { useState, useEffect } from 'react';

function Timer({ gameStarted, gameOver }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;

    if (gameStarted && !gameOver) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      if (!gameStarted) {
        setSeconds(0); // Reset timer when game is not started
      }
    }

    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  return <>{seconds}</>;
}

export default Timer;

