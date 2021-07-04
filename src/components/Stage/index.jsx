import React from 'react';
import { StyledStage } from 'components/styles/StyledStage';

import Cell from 'components/Cell';

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      { stage.map(row => row.map((cell, x) => <Cell key ={x} type={cell[0]} />)) }
    </StyledStage>
  );
};

export default Stage;
