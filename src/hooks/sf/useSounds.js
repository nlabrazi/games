import { useState, useEffect } from 'react';

export const useSounds = (audioSources) => {
  const [sounds, setSounds] = useState([]);

  useEffect(() => {
    setSounds(audioSources.map(source => {
      const audio = new Audio(source.src);
      audio.type = source.type;
      return audio;
    }));
  }, [audioSources]);

  const playSound = (index) => {
    if (sounds[index]) {
      sounds[index].play();
    }
  };

  return playSound;
};
