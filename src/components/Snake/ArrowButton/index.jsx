// ArrowButton.js

import React from 'react';

const ArrowButton = ({ id, onClick, text }) => {
  return (
    <button id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default ArrowButton;
