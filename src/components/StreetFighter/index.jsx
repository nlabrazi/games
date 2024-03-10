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
    let frameSpeed = 6

    let kenIdle = [{ x: 1, y: 0, w: 50, h: 100 }, { x: 50, y: 0, w: 50, h: 100 }, { x: 100, y: 0, w: 50, h: 100 }, { x: 149, y: 0, w: 50, h: 100 }]
    let kenIdleMirror = [{ x: 1549, y: 0, w: 49, h: 100 }, { x: 1500, y: 0, w: 49, h: 100 }, { x: 1450, y: 0, w: 49, h: 100 }, { x: 1401, y: 0, w: 49, h: 100 }]

    let kenWalking = [{ x: 203, y: 0, w: 46, h: 100 }, { x: 250, y: 0, w: 46, h: 100 }, { x: 299, y: 0, w: 46, h: 100 }, { x: 349, y: 0, w: 48, h: 100 }, { x: 399, y: 0, w: 48, h: 100 }]
    let kenMirrorWalking = [{ x: 1350, y: 0, w: 42, h: 100 }, { x: 1303, y: 0, w: 42, h: 100 }, { x: 1254, y: 0, w: 42, h: 100 }, { x: 1204, y: 0, w: 42, h: 100 }, { x: 1154, y: 0, w: 42, h: 100 }]

    let kenLMP = [{ x: 0, y: 116, w: 50, h: 100 }, { x: 49, y: 116, w: 65, h: 100 }, { x: 114, y: 116, w: 50, h: 100 }]
    let kenLMPMirror = [{ x: 1552, y: 116, w: 42, h: 100 }, { x: 1489, y: 116, w: 56, h: 100 }, { x: 1438, y: 116, w: 42, h: 100 }]

    let kenHP = [{ x: 167, y: 116, w: 50, h: 100 }, { x: 217, y: 116, w: 56, h: 100 }, { x: 273, y: 116, w: 77, h: 100 }, { x: 352, y: 116, w: 58, h: 100 }, { x: 408, y: 116, w: 50, h: 100 }]
    let kenHPMirror = [{ x: 1384, y: 116, w: 50, h: 100 }, { x: 1329, y: 116, w: 56, h: 100 }, { x: 1252, y: 116, w: 77, h: 100 }, { x: 1194, y: 116, w: 58, h: 100 }, { x: 1144, y: 116, w: 50, h: 100 }]

    let kenLMK = [{ x: 0, y: 246, w: 54, h: 100 }, { x: 56, y: 246, w: 73, h: 100 }, { x: 129, y: 246, w: 54, h: 100 }]
    let kenLMKMirror = [{ x: 1543, y: 246, w: 49, h: 100 }, { x: 1469, y: 246, w: 67, h: 100 }, { x: 1414, y: 246, w: 49, h: 100 }]

    let kenHK = [{ x: 190, y: 246, w: 50, h: 100 }, { x: 240, y: 246, w: 61, h: 100 }, { x: 302, y: 246, w: 74, h: 100 }, { x: 376, y: 246, w: 67, h: 100 }, { x: 443, y: 246, w: 51, h: 100 }]
    let kenHKMirror = [{ x: 1360, y: 246, w: 43, h: 100 }, { x: 1298, y: 246, w: 56, h: 100 }, { x: 1223, y: 246, w: 67, h: 100 }, { x: 1158, y: 246, w: 58, h: 100 }, { x: 1107, y: 246, w: 43, h: 100 }]

    let nonInterruptibleStates = [kenLMP, kenLMPMirror, kenHP, kenHPMirror, kenLMK, kenLMKMirror, kenHK, kenHKMirror]

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

    console.log = function () { };
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
      } else if (player1State.state === 'kenLMP') {
        ctx.drawImage(ken, kenLMP[p1Frame].x, kenLMP[p1Frame].y, kenLMP[p1Frame].w, kenLMP[p1Frame].h, p1x + 2, p1y, kenLMP[p1Frame].w, kenLMP[p1Frame].h)
      } else if (player1State.state === 'kenLMPMirror') {
        if (p1Frame === 1) {
          ctx.drawImage(kenMirror, kenLMPMirror[p1Frame].x, kenLMPMirror[p1Frame].y, kenLMPMirror[p1Frame].w, kenLMPMirror[p1Frame].h, p1x - 14, p1y, kenLMPMirror[p1Frame].w, kenLMPMirror[p1Frame].h)
        } else {
          ctx.drawImage(kenMirror, kenLMPMirror[p1Frame].x, kenLMPMirror[p1Frame].y, kenLMPMirror[p1Frame].w, kenLMPMirror[p1Frame].h, p1x, p1y, kenLMPMirror[p1Frame].w, kenLMPMirror[p1Frame].h)
        }
      } else if (player1State.state === 'kenHP') {
        ctx.drawImage(ken, kenHP[p1Frame].x, kenHP[p1Frame].y, kenHP[p1Frame].w, kenHP[p1Frame].h, p1x + 2, p1y, kenHP[p1Frame].w, kenHP[p1Frame].h)
      } else if (player1State.state === 'kenHPMirror') {
        if (p1Frame === 0) {
          ctx.drawImage(kenMirror, kenHPMirror[p1Frame].x, kenHPMirror[p1Frame].y, kenHPMirror[p1Frame].w - 5, kenHPMirror[p1Frame].h, p1x - 5, p1y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h)
        } else if (p1Frame === 1) {
          ctx.drawImage(kenMirror, kenHPMirror[p1Frame].x, kenHPMirror[p1Frame].y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h, p1x - 6, p1y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h)
        } else if (p1Frame === 2) {
          ctx.drawImage(kenMirror, kenHPMirror[p1Frame].x, kenHPMirror[p1Frame].y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h, p1x - 27, p1y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h)
        } else if (p1Frame === 3) {
          ctx.drawImage(kenMirror, kenHPMirror[p1Frame].x, kenHPMirror[p1Frame].y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h, p1x - 8, p1y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h)
        } else {
          ctx.drawImage(kenMirror, kenHPMirror[p1Frame].x, kenHPMirror[p1Frame].y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h, p1x + 1, p1y, kenHPMirror[p1Frame].w, kenHPMirror[p1Frame].h)
        }
      } else if (player1State.state === 'kenLMK') {
        if (p1Frame === 0) {
          ctx.drawImage(ken, kenLMK[p1Frame].x, kenLMK[p1Frame].y, kenLMK[p1Frame].w, kenLMK[p1Frame].h, p1x - 7, p1y - 1, kenLMK[p1Frame].w, kenLMK[p1Frame].h)
        } else if (p1Frame === 1) {
          ctx.drawImage(ken, kenLMK[p1Frame].x, kenLMK[p1Frame].y, kenLMK[p1Frame].w, kenLMK[p1Frame].h, p1x - 18, p1y - 1, kenLMK[p1Frame].w, kenLMK[p1Frame].h)
        } else {
          ctx.drawImage(ken, kenLMK[p1Frame].x, kenLMK[p1Frame].y, kenLMK[p1Frame].w, kenLMK[p1Frame].h, p1x - 7, p1y - 1, kenLMK[p1Frame].w, kenLMK[p1Frame].h)
        }
      } else if (player1State.state === 'kenLMKMirror') {
        if (p1Frame === 0) {
          ctx.drawImage(kenMirror, kenLMKMirror[p1Frame].x, kenLMKMirror[p1Frame].y, kenLMKMirror[p1Frame].w, kenLMKMirror[p1Frame].h, p1x, p1y - 1, kenLMKMirror[p1Frame].w, kenLMKMirror[p1Frame].h)
        } else if (p1Frame === 1) {
          ctx.drawImage(kenMirror, kenLMKMirror[p1Frame].x, kenLMKMirror[p1Frame].y, kenLMKMirror[p1Frame].w, kenLMKMirror[p1Frame].h, p1x - 6, p1y - 1, kenLMKMirror[p1Frame].w, kenLMKMirror[p1Frame].h)
        } else {
          ctx.drawImage(kenMirror, kenLMKMirror[p1Frame].x, kenLMKMirror[p1Frame].y, kenLMKMirror[p1Frame].w, kenLMKMirror[p1Frame].h, p1x, p1y - 1, kenLMKMirror[p1Frame].w, kenLMKMirror[p1Frame].h)
        }
      } else if (player1State.state === 'kenHK') {
        if (p1Frame === 0) {
          ctx.drawImage(ken, kenHK[p1Frame].x, kenHK[p1Frame].y, kenHK[p1Frame].w, kenHK[p1Frame].h, p1x, p1y - 1, kenHK[p1Frame].w, kenHK[p1Frame].h)
        } else if (p1Frame === 1) {
          ctx.drawImage(ken, kenHK[p1Frame].x, kenHK[p1Frame].y, kenHK[p1Frame].w, kenHK[p1Frame].h, p1x - 4, p1y - 1, kenHK[p1Frame].w, kenHK[p1Frame].h)
        } else if (p1Frame === 2) {
          ctx.drawImage(ken, kenHK[p1Frame].x, kenHK[p1Frame].y, kenHK[p1Frame].w, kenHK[p1Frame].h, p1x - 1, p1y - 1, kenHK[p1Frame].w, kenHK[p1Frame].h)
        } else if (p1Frame === 3) {
          ctx.drawImage(ken, kenHK[p1Frame].x, kenHK[p1Frame].y, kenHK[p1Frame].w, kenHK[p1Frame].h, p1x - 1, p1y - 1, kenHK[p1Frame].w, kenHK[p1Frame].h)
        } else {
          ctx.drawImage(ken, kenHK[p1Frame].x, kenHK[p1Frame].y, kenHK[p1Frame].w, kenHK[p1Frame].h, p1x, p1y - 1, kenHK[p1Frame].w, kenHK[p1Frame].h)
        }
      } else if (player1State.state === 'kenHKMirror') {
        if (p1Frame === 0) {
          ctx.drawImage(kenMirror, kenHKMirror[p1Frame].x, kenHKMirror[p1Frame].y, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h, p1x, p1y - 1, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h)
        } else if (p1Frame === 1) {
          ctx.drawImage(kenMirror, kenHKMirror[p1Frame].x, kenHKMirror[p1Frame].y, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h, p1x - 8, p1y - 1, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h)
        } else if (p1Frame === 2) {
          ctx.drawImage(kenMirror, kenHKMirror[p1Frame].x, kenHKMirror[p1Frame].y, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h, p1x - 24, p1y - 1, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h)
        } else if (p1Frame === 3) {
          ctx.drawImage(kenMirror, kenHKMirror[p1Frame].x, kenHKMirror[p1Frame].y, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h, p1x - 15, p1y - 1, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h)
        } else if (p1Frame === 4) {
          ctx.drawImage(kenMirror, kenHKMirror[p1Frame].x, kenHKMirror[p1Frame].y, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h, p1x, p1y - 1, kenHKMirror[p1Frame].w, kenHKMirror[p1Frame].h)
        }
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
      } else if ((lowP || medP) && !nonInterruptibleStates.includes(player1State.state)) {
        lowP = false
        medP = false
        if (p1x > p2x) {
          player1State = { state: 'kenLMPMirror', frames: 3, autoRepeat: false, nextState: 'kenIdleMirror' }
        } else {
          player1State = { state: 'kenLMP', frames: 3, autoRepeat: false, nextState: 'kenIdle' }
        }
        p1Frame = 0
      } else if (highP && !nonInterruptibleStates.includes(player1State.state)) {
        highP = false
        if (p1x > p2x) {
          player1State = { state: 'kenHPMirror', frames: 5, autoRepeat: false, nextState: 'kenIdleMirror' }
        } else {
          player1State = { state: 'kenHP', frames: 5, autoRepeat: false, nextState: 'kenIdle' }
        }
        p1Frame = 0
      } else if ((lowK || medK) && !nonInterruptibleStates.includes(player1State.state)) {
        lowK = false
        medK = false
        if (p1x > p2x) {
          player1State = { state: 'kenLMKMirror', frames: 3, autoRepeat: false, nextState: 'kenIdleMirror' }
        } else {
          player1State = { state: 'kenLMK', frames: 3, autoRepeat: false, nextState: 'kenIdle' }
        }
        p1Frame = 0
      } else if (highK && !nonInterruptibleStates.includes(player1State.state)) {
        highK = false
        if (p1x > p2x) {
          player1State = { state: 'kenHKMirror', frames: 5, autoRepeat: false, nextState: 'kenIdleMirror' }
        } else {
          player1State = { state: 'kenHK', frames: 5, autoRepeat: false, nextState: 'kenIdle' }
        }
        p1Frame = 0
      }
      else if (!rightPressed && !lefPressed
        && player1State.state !== 'kenLMP'
        && player1State.state !== 'kenLMPMirror'
        && player1State.state !== 'kenHP'
        && player1State.state !== 'kenHPMirror'
        && player1State.state !== 'kenLMK'
        && player1State.state !== 'kenLMKMirror'
        && player1State.state !== 'kenHK'
        && player1State.state !== 'kenHKMirror'
      ) {
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
