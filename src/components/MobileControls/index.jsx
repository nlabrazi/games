import React from 'react';
import 'assets/css/components/mobileControls.css';

function MobileControls({ moveLeft, moveRight, moveDown, stopMoveDown, rotate }) {
  return (
    <div id="mobileControls">
      <button id="upArrow" onClick={rotate}>▲</button>
      <button id="downArrow" onTouchStart={moveDown} onTouchEnd={stopMoveDown}>▼</button>
      <button id="leftArrow" onClick={moveLeft}>◄</button>
      <button id="rightArrow" onClick={moveRight}>►</button>
    </div>
  );
}

export default MobileControls;
