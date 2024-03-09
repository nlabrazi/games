import React, { useEffect } from 'react';
import '../../assets/css/components/streetfighter.css';


const StreetFighter = () => {

  useEffect(() => {

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 240;

    document.addEventListener('keydown', keyDownHandler, false)
    document.addEventListener('keyup', keyUpHandler, false)

    let p1x = 190
    let p1y = 105
    let p2x = 260
    let p2y = 92
    let p1FrameCount = 0
    let p1Frame = 0
    let frameSpeed = 8

    let kenIdle = [{ x: 1, y: 0, w: 50, h: 100 }, { x: 50, y: 0, w: 50, h: 100 }, { x: 100, y: 0, w: 50, h: 100 }, { x: 149, y: 0, w: 50, h: 100 }]
    let kenIdleMirror = [{ x: 1549, y: 0, w: 49, h: 100 }, { x: 1500, y: 0, w: 49, h: 100 }, { x: 1450, y: 0, w: 49, h: 100 }, { x: 1401, y: 0, w: 49, h: 100 }]
    let kenWalking = [{ x: 203, y: 0, w: 46, h: 100 }, { x: 250, y: 0, w: 46, h: 100 }, { x: 299, y: 0, w: 46, h: 100 }, { x: 349, y: 0, w: 48, h: 100 }, { x: 399, y: 0, w: 48, h: 100 }]
    let kenMirrorWalking = [{ x: 1350, y: 0, w: 42, h: 100 }, { x: 1303, y: 0, w: 42, h: 100 }, { x: 1254, y: 0, w: 42, h: 100 }, { x: 1204, y: 0, w: 42, h: 100 }, { x: 1154, y: 0, w: 42, h: 100 }]

    let player1State = {
      state: 'kenIdle',
      frames: 4,
      autoRepeat: false,
      nextState: 'kenIdle'
    }

    let lefPressed = false
    let rightPressed = false
    let upPressed = false
    let downPressed = false

    let lowP = false
    let medP = false
    let highP = false

    let lowK = false
    let medK = false
    let highK = false

    console.log = function() {};
    console.log(upPressed)
    console.log(downPressed)
    console.log(lowP)
    console.log(medP)
    console.log(highP)
    console.log(lowK)
    console.log(medK)
    console.log(highK)
    console.log(p2y)

    let fps = 60;

    const ken = new Image();
    ken.src = 'ken_edited.png'
    const kenMirror = new Image();
    kenMirror.src = 'ken_edited_flipped.png'

    function drawPlayer1() {
      p1FrameCount++
      if (p1FrameCount % frameSpeed === 0) {
        p1Frame++
      }
      if (p1Frame >= player1State.frames && player1State.autoRepeat) {
        p1FrameCount = 0
        p1Frame = 0
      } else if (p1Frame >= player1State.frames && !player1State.autoRepeat) {
        p1FrameCount = 0
        p1Frame = 0
        frameSpeed = 8
        if (p1x > p2x) {
          if (player1State.nextState === 'kenIdle' || player1State.nextState === 'kenIdleMirror') {
            player1State = { state: 'kenIdleMirror', frames: 4, autoRepeat: true, nextState: 'kenIdleMirror' }
          }
        } else {
          if (player1State.nextState === 'kenIdle' || player1State.nextState === 'kenIdleMirror') {
            player1State = { state: 'kenIdle', frames: 4, autoRepeat: true, nextState: 'kenIdle' }
          }
        }
      }
      if (player1State.state === 'kenIdle') {
        ctx.drawImage(ken, kenIdle[p1Frame].x, kenIdle[p1Frame].y, kenIdle[p1Frame].w, kenIdle[p1Frame].h, p1x, p1y, kenIdle[p1Frame].w, kenIdle[p1Frame].h)
      } else if (player1State.state === 'kenIdleMirror') {
        ctx.drawImage(kenMirror, kenIdleMirror[p1Frame].x, kenIdleMirror[p1Frame].y, kenIdleMirror[p1Frame].w, kenIdleMirror[p1Frame].h, p1x, p1y, kenIdleMirror[p1Frame].w, kenIdleMirror[p1Frame].h)
      } else if (player1State.state === 'kenWalking') {
        ctx.drawImage(ken, kenWalking[p1Frame].x, kenWalking[p1Frame].y, kenWalking[p1Frame].w, kenWalking[p1Frame].h, p1x, p1y, kenWalking[p1Frame].w, kenWalking[p1Frame].h)
      } else if (player1State.state === 'kenMirrorWalking') {
        ctx.drawImage(kenMirror, kenMirrorWalking[p1Frame].x, kenMirrorWalking[p1Frame].y, kenMirrorWalking[p1Frame].w, kenMirrorWalking[p1Frame].h, p1x, p1y, kenMirrorWalking[p1Frame].w, kenMirrorWalking[p1Frame].h)
      }
    }

    function controls() {
      if (lefPressed) {
        if (p1x >= -6) {
          p1x -= 2
        }
        if (player1State.nextState === 'kenIdle' || player1State.nextState === 'kenIdleMirror') {
          if (p1x < p2x) {
            player1State = { state: 'kenWalking', frames: 5, autoRepeat: false, nextState: 'kenIdle' }
          } else {
            player1State = { state: 'kenMirrorWalking', frames: 5, autoRepeat: false, nextState: 'kenIdleMirror' }
          }
        }
      } else if (rightPressed) {
        if (p1x <= 470) {
          p1x += 2
        }
        if (player1State.nextState === 'kenIdle' || player1State.nextState === 'kenIdleMirror') {
          if (p1x < p2x) {
            player1State = { state: 'kenWalking', frames: 5, autoRepeat: false, nextState: 'kenIdle' }
          } else {
            player1State = { state: 'kenMirrorWalking', frames: 5, autoRepeat: false, nextState: 'kenIdleMirror' }
          }
        }
      } else if (!rightPressed && !lefPressed) {
        if (p1x < p2x) {
          player1State = { state: 'kenIdle', frames: 4, autoRepeat: false, nextState: 'kenIdle' }
        } else {
          player1State = { state: 'kenIdleMirror', frames: 4, autoRepeat: false, nextState: 'kenIdleMirror' }
        }
        if (p1Frame > player1State.frames) {
          p1Frame = 0
        }
      }
    }

    function draw() {
      setTimeout(function () {
        requestAnimationFrame(draw)
        ctx.fillStyle = 'rgb(80, 152, 216)'
        // ctx.fillRect(0, 0, 512, 254)
        ctx.fillRect(0, 0, 800, 600)
        controls()
        drawPlayer1()
      }, 1000 / fps)
    }
    draw();

    function keyDownHandler(e) {
      if (e.keyCode === 38) {
        upPressed = true
      } else if (e.keyCode === 37) {
        lefPressed = true
      } else if (e.keyCode === 39) {
        rightPressed = true
      } else if (e.keyCode === 40) {
        downPressed = true
      } else if (e.keyCode === 97) {
        lowP = true
      } else if (e.keyCode === 98) {
        medP = true
      } else if (e.keyCode === 99) {
        highP = true
      } else if (e.keyCode === 100) {
        lowK = true
      } else if (e.keyCode === 101) {
        medK = true
      } else if (e.keyCode === 102) {
        highK = true
      }
    }

    function keyUpHandler(e) {
      if (e.keyCode === 38) {
        upPressed = false
      } else if (e.keyCode === 37) {
        lefPressed = false
      } else if (e.keyCode === 39) {
        rightPressed = false
      } else if (e.keyCode === 40) {
        downPressed = false
      } else if (e.keyCode === 97) {
        lowP = false
      } else if (e.keyCode === 98) {
        medP = false
      } else if (e.keyCode === 99) {
        highP = false
      } else if (e.keyCode === 100) {
        lowK = false
      } else if (e.keyCode === 101) {
        medK = false
      } else if (e.keyCode === 102) {
        highK = false
      }
    }

  }, []);

  return (
    <React.Fragment />
  );
};


export default StreetFighter;
