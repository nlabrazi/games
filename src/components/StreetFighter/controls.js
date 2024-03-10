// controls.js
export function keyDownHandler(e, lefPressed, rightPressed, upPressed, downPressed, lowP, medP, highP, lowK, medK, highK) {
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

  return { lefPressed, rightPressed, upPressed, downPressed, lowP, medP, highP, lowK, medK, highK };
}

export function keyUpHandler(e, lefPressed, rightPressed, upPressed, downPressed, lowP, medP, highP, lowK, medK, highK) {
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

  return { lefPressed, rightPressed, upPressed, downPressed, lowP, medP, highP, lowK, medK, highK };
}
