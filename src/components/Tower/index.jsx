// General
import React from 'react'

// Component
import TowerGame from 'components/TowerGame';

// Styles
import 'assets/css/components/tower.css';

const Tower = () => {

  return (
    <React.Fragment>
      <canvas id="canvas1"></canvas>
      <TowerGame />
    </React.Fragment>
  );
};

export default Tower;
