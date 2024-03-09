import React from 'react';
import StreetFighter from 'components/StreetFighter';

const StreetFighterGame = () => {
  return (
    <React.Fragment>
      <canvas id="myCanvas"></canvas>
      <StreetFighter />
    </React.Fragment>
  );
};

export default StreetFighterGame
