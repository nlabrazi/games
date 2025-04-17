import React from 'react';

const CharacterComponent = ({ position, sprite, altText }) => {
  const characterStyle = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    backgroundImage: `url(${sprite})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '50px',
    height: '100px',
  };

  return (
    <div style={characterStyle} aria-label={altText}></div>
  );
};

export default CharacterComponent;
