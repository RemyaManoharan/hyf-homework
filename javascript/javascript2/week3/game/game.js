const btnTag = document.getElementById("start-btn");
const restartBtnTag = document.getElementById("restart-btn");
const durationInput = document.getElementById("set-time");
const sCountInput = document.getElementById("s-count");
const lCountInput = document.getElementById("l-count");
const result = document.getElementById("result");
const confettiElements = document.getElementsByClassName("confetti-canvas");
let gameRunning = false;

function resetCount() {
  sCount = 0;
  lCount = 0;
  sCountInput.textContent = sCount;
  lCountInput.textContent = lCount;
}

btnTag.addEventListener("click", handleStartClick);
restartBtnTag.addEventListener("click", handleRestartClick);

// handle key press events
function handleKeyPress(event) {
  const key = event.key.toLowerCase();
  if (key === "s") {
    sCount++;
    sCountInput.textContent = sCount;
  } else if (key === "l") {
    lCount++;
    lCountInput.textContent = lCount;
  }
}

// handle start button click event
function handleStartClick() {
  if (gameRunning) return;
  gameRunning = true;

  const duration = parseInt(durationInput.value);
  resetCount();
  result.textContent = "";
  // add event listener for key press events
  document.addEventListener("keydown", handleKeyPress);

  // set a timeout to end the game after the specified duration
  setTimeout(function () {
    document.removeEventListener("keydown", handleKeyPress);
    let winner;
    const confettiElements = document.getElementsByClassName("confetti-canvas");
    if (sCount > lCount) {
      winner = "S";
      if (confettiElements.length > 1) {
        confettiElements[0].style.display = "block";
        confetti.render();
      }
    } else if (lCount > sCount) {
      winner = "L";
      if (confettiElements.length > 1) {
        confettiElements[1].style.display = "block";
        confetti.render();
      }
    } else {
      winner = "Tie";
    }
    // update the result element on the screen
    result.textContent = `The winner is ${winner}!`;
    restartBtnTag.style.display = "block";

    gameRunning = false;
  }, duration * 1000);
}

// handle restart button click event
function handleRestartClick() {
  resetCount();
  result.textContent = "";
  // hide the confetti
  confettiElements[0].style.display = "none";
  confettiElements[1].style.display = "none";
  restartBtnTag.style.display = "none";
}
