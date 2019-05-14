var startButton = document.querySelector("#js--start");
var stopButton = document.querySelector("#js--stop");
var resetButton = document.querySelector("#js--reset");
var stopwatch = document.querySelector("#js--stopwatch");

// Show an element on screen
function hide(element) {
  element.classList.add("display-none");
}

// Hide an element on screen
function show(element) {
  element.classList.remove("display-none");
}

var mil = 0;
var displayMil = "00";
var seconds = 0;
var displaySeconds = "00";

startButton.addEventListener("click", function() {
  hide(startButton);
  hide(resetButton);
  show(stopButton);
  var timer = setInterval(function() {
    mil = mil + 1;

    if (mil === 99) {
      mil = 0;
      seconds = seconds + 1;
    }

    if (mil < 10) {
      displayMil = "0" + mil;
    } else {
      displayMil = mil.toString();
    }

    if (seconds < 10) {
      displaySeconds = "0" + seconds;
    } else {
      displaySeconds = seconds.toString();
    }

    stopwatch.innerHTML = displaySeconds + "." + displayMil;
  }, 10);

  stopButton.addEventListener("click", function() {
    hide(stopButton);
    show(startButton);
    show(resetButton);
    clearInterval(timer);
  });
});

resetButton.addEventListener("click", function() {
  hide(resetButton);
  hide(stopButton);

  mil = 0;
  seconds = 0;
  displayMil = "00";
  displaySeconds = "00";
  stopwatch.innerHTML = displaySeconds + "." + displayMil;
});
