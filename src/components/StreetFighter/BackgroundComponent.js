import React, { useRef, useEffect } from 'react';
import stage1Image from 'assets/images/sf/Stage1Edit.png';

const BackgroundComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 512;
    canvas.height = 224;

    const drawBackground = () => {
      const stage1 = new Image();
      stage1.src = stage1Image;
      stage1.onload = () => {
        ctx.drawImage(stage1, 0, 0, canvas.width, canvas.height);
      };
    };

    drawBackground();
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  );
};

export default BackgroundComponent;
