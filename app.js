const timer = document.querySelector(".timer");
const minutesTimer = document.querySelector(".minute");
const secondsTimer = document.querySelector(".seconds");
const audio = document.querySelector("#audio");
const button = document.querySelector("button");
const restartTimerSecondsValue = secondsTimer.textContent;
const restartTimerMinutesValue = minutesTimer.textContent;

var timerTime =
  (Number(restartTimerMinutesValue) * 60 +
    Number(restartTimerSecondsValue) +
    1) *
  1000;
console.log(timerTime + " seconds");
function playSound() {
  // plays sound
  audio.play();

  console.log("finished");
}

function buttonOnReatart() {
  button.innerText = "RESTART";
  button.style.display = "block";
  secondsTimer.textContent = restartTimerSecondsValue;
  minutesTimer.textContent = restartTimerMinutesValue;

  updateTimer();
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
    secondsTimer.textContent = "00";
    minutesTimer.textContent = "00";
  }
}
// run code
button.addEventListener("click", () => {
  button.style.display = "none";
  var handle = setInterval(updateTimer, 1000);
  setTimeout(() => {
    clearInterval(handle);
    buttonOnReatart();
  }, timerTime);
});
