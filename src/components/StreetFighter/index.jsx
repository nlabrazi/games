import React, { useEffect } from 'react';
import 'assets/css/components/streetfighter.css';
import kenImage from 'assets/images/sf/ken_edited.png';
import kenMirrorImage from 'assets/images/sf/ken_edited_flipped.png';
import chunLiImage from 'assets/images/sf/chunli.png';
import chunLiMirrorImage from 'assets/images/sf/chunli_mirror.png';



const StreetFighter = () => {

  useEffect(() => {

    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 224;

    document.addEventListener('keydown', keyDownHandler, false)
    document.addEventListener('keyup', keyUpHandler, false)

    let ken = new Image();
    ken.src = kenImage
    let kenMirror = new Image();
    kenMirror.src = kenMirrorImage
    let chunLi = new Image();
    chunLi.src = chunLiImage
    let chunLiMirror = new Image();
    chunLiMirror.src = chunLiMirrorImage

    let fps = 60
    let p1x = 190
    let p1y = 105
    let p2x = 260
    let p2y = 92
    let p1FrameCount = 0
    let p1Frame = 0
    let frameSpeed = 8
    let p2FrameCount = 0
    let p2Frame = 0
    let p2frameSpeed = 8

    let kenIdle = [{ x: 1, y: 0, w: 50, h: 100 }, { x: 50, y: 0, w: 50, h: 100 }, { x: 100, y: 0, w: 50, h: 100 }, { x: 149, y: 0, w: 50, h: 100 }]
    let kenIdleMirror = [{ x: 1549, y: 0, w: 49, h: 100 }, { x: 1500, y: 0, w: 49, h: 100 }, { x: 1450, y: 0, w: 49, h: 100 }, { x: 1401, y: 0, w: 49, h: 100 }]

    let kenWalking = [{ x: 203, y: 0, w: 46, h: 100 }, { x: 250, y: 0, w: 46, h: 100 }, { x: 299, y: 0, w: 46, h: 100 }, { x: 349, y: 0, w: 48, h: 100 }, { x: 399, y: 0, w: 48, h: 100 }]
    let kenWalkingMirror = [{ x: 1350, y: 0, w: 42, h: 100 }, { x: 1303, y: 0, w: 42, h: 100 }, { x: 1254, y: 0, w: 42, h: 100 }, { x: 1204, y: 0, w: 42, h: 100 }, { x: 1154, y: 0, w: 42, h: 100 }]

    let kenLMP = [{ x: 0, y: 116, w: 50, h: 100 }, { x: 49, y: 116, w: 65, h: 100 }, { x: 114, y: 116, w: 50, h: 100 }]
    let kenLMPMirror = [{ x: 1552, y: 116, w: 42, h: 100 }, { x: 1489, y: 116, w: 56, h: 100 }, { x: 1438, y: 116, w: 42, h: 100 }]

    let kenHP = [{ x: 167, y: 116, w: 50, h: 100 }, { x: 217, y: 116, w: 56, h: 100 }, { x: 273, y: 116, w: 77, h: 100 }, { x: 352, y: 116, w: 58, h: 100 }, { x: 408, y: 116, w: 50, h: 100 }]
    let kenHPMirror = [{ x: 1384, y: 116, w: 50, h: 100 }, { x: 1329, y: 116, w: 56, h: 100 }, { x: 1252, y: 116, w: 77, h: 100 }, { x: 1194, y: 116, w: 58, h: 100 }, { x: 1144, y: 116, w: 50, h: 100 }]

    let kenLMK = [{ x: 0, y: 246, w: 54, h: 100 }, { x: 56, y: 246, w: 73, h: 100 }, { x: 129, y: 246, w: 54, h: 100 }]
    let kenLMKMirror = [{ x: 1543, y: 246, w: 49, h: 100 }, { x: 1469, y: 246, w: 67, h: 100 }, { x: 1414, y: 246, w: 49, h: 100 }]

    let kenHK = [{ x: 190, y: 246, w: 50, h: 100 }, { x: 240, y: 246, w: 61, h: 100 }, { x: 302, y: 246, w: 74, h: 100 }, { x: 376, y: 246, w: 67, h: 100 }, { x: 443, y: 246, w: 51, h: 100 }]
    let kenHKMirror = [{ x: 1360, y: 246, w: 43, h: 100 }, { x: 1298, y: 246, w: 56, h: 100 }, { x: 1223, y: 246, w: 67, h: 100 }, { x: 1158, y: 246, w: 58, h: 100 }, { x: 1107, y: 246, w: 43, h: 100 }]

    let kenFireball = [{ x: 615, y: 514, w: 52, h: 100 }, { x: 671, y: 514, w: 67, h: 100 }, { x: 742, y: 514, w: 67, h: 100 }, { x: 813, y: 514, w: 70, h: 100 }]
    let kenFireballMirror = [{ x: 932, y: 514, w: 52, h: 100 }, { x: 859, y: 514, w: 67, h: 100 }, { x: 788, y: 514, w: 67, h: 100 }, { x: 714, y: 514, w: 70, h: 100 }]

    let chunLiIdle = [{ x: 0, y: 0, w: 50, h: 112 }, { x: 53, y: 0, w: 50, h: 112 }, { x: 105, y: 0, w: 50, h: 112 }, { x: 158, y: 0, w: 50, h: 112 }]
    let chunLiIdleMirror = [{ x: 1399, y: 0, w: 50, h: 112 }, { x: 1346, y: 0, w: 50, h: 112 }, { x: 1294, y: 0, w: 50, h: 112 }, { x: 1241, y: 0, w: 50, h: 112 }]

    let nonInterruptibleStates = [kenLMP, kenLMPMirror, kenHP, kenHPMirror, kenLMK, kenLMKMirror, kenHK, kenHKMirror, kenFireball, kenFireballMirror]

    let player1State = {
      state: 'kenIdle',
      frames: 4,
      autoRepeat: true,
      nextState: 'kenIdle'
    }

    let player2State = {
      state: 'chunLiIdleMirror',
      frames: 4,
      autoRepeat: true,
      nextState: 'chunLiIdleMirror'
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
    let fireball = false
    let p1Projectiles = []
    let canFire = true

    console.log = function () { };
    console.log(upPressed)
    console.log(downPressed)

    class Projectile {
      constructor(x, y, direction, speed, type) {
        this.x = x;
        this.y = y;
        this.dir = direction;
        this.speed = speed;
        this.type = type;
        this.frame = 0;
        this.frameCounter = 0;
      }
    }

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
      } else if (e.keyCode === 103) {
        if (player1State.state === 'kenIdle' || player1State.state === 'kenIdleMirror') {
          fireball = true
          canFire = true
        }
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
      } else if (e.keyCode === 103) {
        fireball = false
      }
    }

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
      } else if (player1State.state === 'kenWalkingMirror') {
        ctx.drawImage(kenMirror, kenWalkingMirror[p1Frame].x, kenWalkingMirror[p1Frame].y, kenWalkingMirror[p1Frame].w, kenWalkingMirror[p1Frame].h, p1x, p1y, kenWalkingMirror[p1Frame].w, kenWalkingMirror[p1Frame].h)
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
      } else if (player1State.state === 'kenFireball') {
        ctx.drawImage(ken, kenFireball[p1Frame].x, kenFireball[p1Frame].y, kenFireball[p1Frame].w, kenFireball[p1Frame].h, p1x, p1y, kenFireball[p1Frame].w, kenFireball[p1Frame].h)
        if (p1Frame === 3 && canFire) {
          frameSpeed = 16
          p1FrameCount = 0
          let fb = new Projectile(p1x + 40, p1y + 36, 'right', 3, 1)
          p1Projectiles.push(fb)
          canFire = false
        } else if (p1Frame === 3 && p1FrameCount >= 15) {
          frameSpeed = 8
        }
      } else if (player1State.state === 'kenFireballMirror') {
        ctx.drawImage(kenMirror, kenFireballMirror[p1Frame].x, kenFireballMirror[p1Frame].y, kenFireballMirror[p1Frame].w, kenFireballMirror[p1Frame].h, p1x, p1y, kenFireballMirror[p1Frame].w, kenFireballMirror[p1Frame].h)
        if (p1Frame === 3 && canFire) {
          frameSpeed = 16
          p1FrameCount = 0
          let fb = new Projectile(p1x, p1y + 40, 'left', -3, 1)
          p1Projectiles.push(fb)
          canFire = false
        } else if (p1Frame === 3 && p1FrameCount >= 15) {
          frameSpeed = 8
        }
      }
    }

    function drawPlayer2() {
      if (player2State.state === 'chunLiIdleMirror') {
        ctx.drawImage(chunLiMirror, chunLiIdleMirror[p2Frame].x, chunLiIdleMirror[p2Frame].y, chunLiIdleMirror[p2Frame].w, chunLiIdleMirror[p2Frame].h, p2x, p2y, chunLiIdleMirror[p2Frame].w, chunLiIdleMirror[p2Frame].h)
      }
      if (player2State.state === 'chunLiIdle') {
        ctx.drawImage(chunLi, chunLiIdle[p2Frame].x, chunLiIdle[p2Frame].y, chunLiIdle[p2Frame].w, chunLiIdle[p2Frame].h, p2x, p2y, chunLiIdle[p2Frame].w, chunLiIdle[p2Frame].h)
      }
      p2FrameCount++
      if (p2FrameCount % p2frameSpeed === 0) {
        p2Frame++
        p2FrameCount = 0
      }
      if (p2Frame >= player2State.frames) {
        p2FrameCount = 0
        p2Frame = 0
        if (player2State.nextState === 'chunLiIdleMirror' || player2State.nextState === 'chunLiIdle') {
          p2y = 92
          if (p2x > p1x) {
            player2State = { state: 'chunLiIdleMirror', frames: 4, autoRepeat: true, nextState: 'chunLiIdleMirror' }
          } else {
            player2State = { state: 'chunLiIdle', frames: 4, autoRepeat: true, nextState: 'chunLiIdle' }
          }
        }
        else {
          p2y = 92
          if (p2x > p1x) {
            player2State = { state: 'chunLiIdleMirror', frames: 4, autoRepeat: true, nextState: 'chunLiIdleMirror' }
          } else {
            player2State = { state: 'chunLiIdle', frames: 4, autoRepeat: true, nextState: 'chunLiIdle' }
          }
        }
      }
    }

    function drawProjectiles() {
      for (let i = 0; i < p1Projectiles.length; i++) {
        p1Projectiles[i].frameCounter++
        if (p1Projectiles[i].frameCounter % 5 === 0) {
          p1Projectiles[i].frameCounter = 0
          p1Projectiles[i].frame++
          if (p1Projectiles[i].frame > 1) {
            p1Projectiles[i].frame = 0
          }
        }
        if (p1Projectiles[i].dir === 'right') {
          if (p1Projectiles[i].frame === 0) {
            ctx.drawImage(ken, 891, 548, 26, 27, p1Projectiles[i].x, p1Projectiles[i].y, 26, 27)
          }
          if (p1Projectiles[i].frame === 1) {
            ctx.drawImage(ken, 921, 548, 33, 24, p1Projectiles[i].x, p1Projectiles[i].y, 33, 24)
          }
        }
        if (p1Projectiles[i].dir === 'left') {
          if (p1Projectiles[i].frame === 0) {
            ctx.drawImage(kenMirror, 644, 549, 32, 23, p1Projectiles[i].x, p1Projectiles[i].y, 32, 23)
          }
          if (p1Projectiles[i].frame === 1) {
            ctx.drawImage(kenMirror, 681, 548, 25, 27, p1Projectiles[i].x, p1Projectiles[i].y, 25, 27)
          }
        }
        p1Projectiles[i].x += p1Projectiles[i].speed
      }
    }

    function controls() {
      if (lefPressed && player1State.state !== 'kenFireball' && player1State.state !== 'kenFireballMirror') {
        if (p1x >= -6) {
          p1x -= 2
        }
        if (player1State.nextState === 'kenIdle' || player1State.nextState === 'kenIdleMirror') {
          if (p1x < p2x) {
            player1State = { state: 'kenWalking', frames: 5, autoRepeat: false, nextState: 'kenIdle' }
          } else {
            player1State = { state: 'kenWalkingMirror', frames: 5, autoRepeat: false, nextState: 'kenIdleMirror' }
          }
        }
      } else if (rightPressed && player1State.state !== 'kenFireball' && player1State.state !== 'kenFireballMirror') {
        if (p1x <= 470) {
          p1x += 2
        }
        if (player1State.nextState === 'kenIdle' || player1State.nextState === 'kenIdleMirror') {
          if (p1x < p2x) {
            player1State = { state: 'kenWalking', frames: 5, autoRepeat: false, nextState: 'kenIdle' }
          } else {
            player1State = { state: 'kenWalkingMirror', frames: 5, autoRepeat: false, nextState: 'kenIdleMirror' }
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
      } else if (fireball && !nonInterruptibleStates.includes(player1State.state)) {
        fireball = false
        if (player1State.state === 'kenIdleMirror') {
          player1State = { state: 'kenFireballMirror', frames: 4, autoRepeat: false, nextState: 'kenIdleMirror' }
        } else {
          player1State = { state: 'kenFireball', frames: 4, autoRepeat: false, nextState: 'kenIdle' }
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
        && player1State.state !== 'kenFireball'
        && player1State.state !== 'kenFireballMirror'
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
        ctx.fillRect(0, 0, 512, 224)
        controls()
        drawPlayer1()
        drawPlayer2()
        drawProjectiles()
      }, 1000 / fps)
    }
    draw();

  }, []);

  return (
    <React.Fragment />
  );
};


export default StreetFighter;
