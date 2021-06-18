const timer = document.querySelector(".timer");
const minutesTimer = document.querySelector(".minute");
const secondsTimer = document.querySelector(".seconds");
const audio = document.querySelector("#audio");

function playSound() {
  // plays sound
  audio.play();
  console.log("finished");
}

function updateTimer() {
  var secondsValue = Number(secondsTimer.textContent);
  var minutesValue = Number(minutesTimer.textContent);
  // for seconds value
  if (secondsValue <= 10) {
    secondsTimer.textContent = "0" + (secondsValue - 1);
  } else {
    secondsTimer.textContent = secondsValue - 1;
  }

  if (secondsValue == 0) {
    minutesValue--;
    secondsValue--;
    if (minutesValue < 10) {
      minutesTimer.textContent = "0" + minutesValue;
    } else {
      minutesTimer.textContent = minutesValue;
    }
    secondsTimer.textContent = 59;
  }

  if (minutesValue == -1) {
    playSound();
    clearInterval(handle);

    secondsTimer.textContent = "00";
    minutesTimer.textContent = "00";
  }
}

var handle = setInterval(updateTimer, 1000);
