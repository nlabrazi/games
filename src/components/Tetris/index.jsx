// General
import React, { useState } from 'react';

// Functions
import { createStage, checkCollision } from 'gameHelper';

// Styles
import { StyledTetrisWrapper, StyledTetris } from 'components/styles/StyledTetris';
import TetrisSong from 'assets/sounds/tetris-gameboy.mp3'

// Hooks
import { useInterval } from 'hooks/useInterval';
import { usePlayer } from 'hooks/usePlayer';
import { useStage } from 'hooks/useStage';
import { useGameStatus } from 'hooks/useGameStatus';

// Components
import Stage from 'components/Stage';
import Display from 'components/Display';
import StartButton from 'components/StartButton';
import SongButton from 'components/SongButton';


const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  //console.log('re-render');

  const movePlayer = dir => {
    if (!checkCollision (player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    console.log("START GAME");
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows (WIKIPEDIA)
    if (rows > (level +1) * 10) {
      setLevel(prev => prev + 1);
      // Also increase the speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision (player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER !!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0 , y: 0, collided: true});
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log("interval ON");
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  }

  const dropPlayer = () => {
    console.log("interval off");
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime)


  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
    <StyledTetris>
      <Stage stage={stage} />
      <aside>
        {gameOver ? (
        <Display gameOver={gameOver} text="Game Over" />
        ) : (
        <div>
          <Display text={`Score: ${score}`} />
          <Display text={`Rows: ${rows}`} />
          <Display text={`Level: ${level}`} />
        </div>
        )}
        <StartButton callback={startGame} />
        <SongButton audioPath={TetrisSong} />
      </aside>
    </StyledTetris>
  </StyledTetrisWrapper>
  );
};

export default Tetris;
